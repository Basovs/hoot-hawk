from flask import Flask, request
import uuid
from azure.storage.blob import BlobServiceClient
import tempfile
import threading
from msrest.authentication import CognitiveServicesCredentials
from azure.cognitiveservices.vision.computervision import ComputerVisionClient
from azure.cognitiveservices.vision.computervision.models import OperationStatusCodes
import yaml
import time
import openai
from azure.cosmos import CosmosClient
from datetime import datetime, timezone
import json
from flask_cors import CORS

with open('auth.yaml', 'r') as ff:
        auth = yaml.safe_load(ff)

ENDPOINT = auth['endpoint']
API_KEY = auth['api_key']
cosmos_endpoint = auth['cosmos_endpoint']
cosmos_key = auth['cosmos_key']
cv_client = ComputerVisionClient(ENDPOINT, CognitiveServicesCredentials(API_KEY))
cosmos_client = CosmosClient(url=cosmos_endpoint, credential=cosmos_key)
db = cosmos_client.get_database_client("database_id")
cont = db.get_container_client('container_id')


def image_rec(image_url):
        response = cv_client.read(url=image_url, language='en', raw=True)
        operationLocation = response.headers['Operation-Location']
        operation_id = operationLocation.split('/')[-1]
        result = cv_client.get_read_result(operation_id)
        while not result.status == OperationStatusCodes.succeeded:
                time.sleep(1)
                result = cv_client.get_read_result(operation_id)
        result_text = ''
        if result.status == OperationStatusCodes.succeeded:
                read_results = result.analyze_result.read_results
                for analyzed_result in read_results:
                        for line in analyzed_result.lines:
                                result_text += f'{line.text}\n'
        return result_text
# chat gpt
gpt_key = auth['gpt_key']
def chat_req(text):
        openai.api_key = gpt_key
        message1 = f"Vari lūdzu pārvērst šo tekstu uz latviešu burtiem lūdzu? {text}"
        result1 = openai.Completion.create(model="text-davinci-003", prompt=message1, max_tokens=len(text))
        text2 = result1['choices'][0]['text']
        message2 = "Papildini lūdzu json no teksta (file_category_type ir čeks vai pavadzīme, ja tekstā ir norādīts čeks vai pavadzīme, vat_nr satur LV): \n{\"files\": [{\"file_category_type\": \"\",\"supplier\": \"\",\"reg_no\": \"\",\"vat_nr\": \"\",\"doc_nr\": \"\",\"currency\": \"\",\"vat_rate\": \"\",\"net\": \"\",\"vat_sum\": \"\",\"total_sum\": \"\"}]?\n" + f"{text2}"
        result2 = openai.Completion.create(model="text-davinci-003", prompt=message2, max_tokens=len(result1['choices'][0]['text']))
        return result2['choices'][0]['text']



account_url = "https://digitalpucestorage.blob.core.windows.net"
with open('auth.yaml', 'r') as ff:
        auth = yaml.safe_load(ff)

blob_endpoint = auth['blob_endpoint']
blob_key = auth['blob_key']
blob_service_client = BlobServiceClient(blob_endpoint, credential=blob_key)

app = Flask(__name__)


queue = []

@app.route('/img_rec', methods=['POST'])
async def test():
        if request.method == 'POST':
                #str(uuid.uuid4())[:8]
                try:
                        files = request.json['files']# {"files": [{"filename": <str>, "data": <hexstring>}]}
                except:
                        return 'Wrong datastructure or no files in json', 400
                for file in files:
                        file_uuid = str(uuid.uuid4())
                        filename = f'{file_uuid}.{file["filename"].split(".")[-1]}'
                        with tempfile.TemporaryFile() as temp:
                                temp.write(bytes.fromhex(file['data']))
                                temp.seek(0)
                                blob_client = blob_service_client.get_blob_client(container='apiupload', blob=filename)
                                blob_client.upload_blob(temp)
                        chat_end = {'id':file_uuid, 'file_name': file["filename"], 'upload_status': 'queued'}
                        db_in = {"created_at": datetime.now(tz=timezone.utc).timestamp(), "id": file_uuid[:8], "files": [chat_end]}
                        cont.create_item(db_in)
                        queue.append({'url': f'https://digitalpucestorage.blob.core.windows.net/apiupload/{filename}', 'filename': file["filename"], 'db_in': db_in})
                #with open('tmp.jpg', 'wb') as ff:
                #       ff.write(bytes.fromhex(request.json['img'][0]))
                return '5by5', 200

        # img_url = request.headers.get('img_url')
        # if img_url is None:
        #       print('upload and star the func')
        # else:
        #       return 'No image provided', 400
        else:
                return 'Use a post request', 401

def image_handler():
        while True:
                if len(queue) > 0:
                        img_url = queue[0]['url']
                        img_filename = queue[0]['filename']
                        db_in = queue[0]['db_in']
                        img_rec_result = image_rec(img_url)
                        fl_tmp = img_url.split('/')[-1]
                        file_uuid = fl_tmp.split(".")[0]
                        try:
                                # openai.api_key = gpt_key
                                # # messages = "Vari lūdzu pārvērst šo tekstu uz latviešu burtiem un ievietot json (file_category_type ir čeks vai pavadzīme, ja tekstā ir norādīts čeks vai pavadzīme, vat_nr satur LV), json parametrus netulko!: \n{\"files\": [{\"file_category_type\": \"\",\"supplier\": \"\",\"reg_no\": \"\",\"vat_nr\": \"\",\"doc_nr\": \"\",\"currency\": \"\",\"vat_rate\": \"\",\"net\": \"\",\"vat_sum\": \"\",\"total_sum\": \"\"}]}?\n" + f"{img_rec_result}"
                                # chat = openai.Completion.create(model="text-davinci-003", prompt=messages, max_tokens=len(img_rec_result))
                                # #cont.create_item({"id": filename, "files": []})
                                # chat_end = chat['choices'][0]['text'
                                chat_end = chat_req(img_rec_result)
                                chat_end = json.loads(chat_end)['files'][0]
                                chat_end['id'] = file_uuid
                                chat_end['file_name'] = img_filename
                                chat_end.update(db_in['files'][0])
                                db_in['files'][0] = chat_end
                                db_in['files'][0]['upload_status'] = 'done'
                                print(db_in)
                                cont.upsert_item(db_in)
                                queue.pop(0)
                        except Exception as e:
                                print(e)
                                db_in['files'][0]['upload_status'] = 'failed'
                                cont.upsert_item(db_in)
                else:
                        time.sleep(1)

CORS(app)

if __name__ == '__main__':
        t1 = threading.Thread(target=image_handler)
        t1.start()
        app.debug = False
        app.run(host="0.0.0.0", port=5000)
