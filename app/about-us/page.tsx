import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutUsPage() {
  return (
    <div className="max-w-[600px] flex flex-col gap-6">
      <h2 className="font-bold text-2xl">
        Mēs Trenējam AI, lai Finanšu Datu Vākšana un Analīze Latviešu Valodā
        Būtu Precīza un Efektīva!
      </h2>

      <p className="">
        Komanda <b>&quot;Hook &amp; Hawk&quot;</b> ir dinamiska piecu
        profesionāļu alianse, kas radās hackathonā. Katrs no mums ienes savas
        unikālas prasmes, radot sinerģiju un veidojot spēcīgu kopumu. Mēs esam
        izveidojuši platformu, kas, izmantojot mūsu izstrādāto API, spēj izvilkt
        informāciju no finanšu dokumentiem un pārvērst to JSON formātā. Šis API
        ir pielāgojams un integrējams jebkurā dokumentu pārvaldības platformā,
        atverot jaunas iespējas datu pārvaldības un analīzes jomā.
      </p>

      <p className="">
        Mūsu īpašā pieeja ir balstīta uz AI trenētu datu izmantošanu, kas
        nodrošina precīzu un efektīvu informācijas iegūšanu. Mūsu specializācija
        ir dokumentu nolasīšana un datu uzglabāšana tieši latviešu valodā, kas
        ir nianses, ko mūsu &quot;kolēģi&quot; bieži izvēlas ignorēt.
      </p>

      <p className="">
        Šādi mēs nodrošinām precīzu un efektīvu risinājumu datu izvilkšanai un
        analīzēšanai no dokumentiem latviešu valodā. Tāpēc, ja meklējat
        pārbaudītu un ticamu partneri dokumentu datu pārvaldībai latviešu
        valodā, izvēlēties mūs!
      </p>

      <Link href="/" className="ml-auto">
        <Button size="lg">Uz sākumlapu</Button>
      </Link>
    </div>
  )
}
