const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        serif: ["var(--font-source_serif_4)", ...fontFamily.serif],
      },
      colors: {
        border: "rgba(var(--border))",
        input: "rgba(var(--input))",
        ring: "rgba(var(--ring))",
        background: "rgba(var(--background))",
        foreground: "rgba(var(--foreground))",
        primary: {
          DEFAULT: "rgba(var(--primary))",
          foreground: "rgba(var(--primary-foreground))",

          400: "#BE133C",
          500: "#9F1339",
        },
        secondary: {
          DEFAULT: "rgba(var(--secondary))",
          foreground: "rgba(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "rgba(var(--destructive))",
          foreground: "rgba(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "rgba(var(--muted))",
          foreground: "rgba(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "rgba(var(--accent))",
          foreground: "rgba(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "rgba(var(--popover))",
          foreground: "rgba(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "rgba(var(--card))",
          foreground: "rgba(var(--card-foreground))",
        },

        gray: {
          50: "#F0F6FC",
          100: "#C8D1D9",
          200: "#B1BAC4",
          300: "#8B949E",
          400: "#6D7681",
          500: "#484F58",
          600: "#30363D",
          700: "#21262D",
          800: "#161B22",
          900: "#0D1116",
        },
        blue: {
          50: "#CAE8FF",
          100: "#A5D6FF",
          200: "#79C0FF",
          300: "#58A6FF",
          400: "#398AFD",
          500: "#1F6FEB",
          600: "#1359C7",
          700: "#0E419D",
          800: "#0C2D6B",
          900: "#051D4D",
        },
        green: {
          50: "#AFF4B5",
          100: "#7EE787",
          200: "#56D264",
          300: "#3FBA50",
          400: "#2DA042",
          500: "#248536",
          600: "#196C2E",
          700: "#0E5422",
          800: "#023A16",
          900: "#04260F",
        },
        yellow: {
          50: "#F7E3A1",
          100: "#F2CB60",
          200: "#E2B340",
          300: "#D29822",
          400: "#BB8107",
          500: "#9E6A02",
          600: "#845305",
          700: "#693E01",
          800: "#4A2B00",
          900: "#341A00",
        },
        orange: {
          50: "#FFDEB6",
          100: "#FFC580",
          200: "#FFA656",
          300: "#F0873E",
          400: "#DB6C28",
          500: "#BD571C",
          600: "#9B4214",
          700: "#762E09",
          800: "#5A1E02",
          900: "#3D1500",
        },
        red: {
          50: "#FFDCD7",
          100: "#FFC0BA",
          200: "#FFA198",
          300: "#FF7B72",
          400: "#F85249",
          500: "#DA3633",
          600: "#B62524",
          700: "#8E1518",
          800: "#67050B",
          900: "#490202",
        },
        purple: {
          50: "#EDDDFE",
          100: "#E2C4FF",
          200: "#D3A9FF",
          300: "#BE8CFF",
          400: "#A371F7",
          500: "#8956E5",
          600: "#7040C9",
          700: "#553097",
          800: "#3C1D70",
          900: "#270F52",
        },
        pink: {
          50: "#FFD9EC",
          100: "#FFBEDD",
          200: "#FF9BCE",
          300: "#F778BB",
          400: "#DB61A2",
          500: "#BF4B8A",
          600: "#9E3670",
          700: "#7D2457",
          800: "#5E103E",
          900: "#42062A",
        },
        coral: {
          50: "#FFDDD2",
          100: "#FFC2B2",
          200: "#FFA28B",
          300: "#F78166",
          400: "#E96045",
          500: "#D0462E",
          600: "#AC321F",
          700: "#872212",
          800: "#640D04",
          900: "#460701",
        },
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        reportTable: "auto 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr auto",
      },
      screens: {
        xxxs: "390px",
        xxs: "414px",
        xs: "514px",
        mdxl: "1180px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionProperty: {
        border: "border",
        text: "textColor",
        width: "width",
        widthPadding: "width, padding",
        scale: "width, height",
        menuBtnLabel: "opacity, margin-left",
      },
      animation: {
        bounce: "bounce 1s ease-in-out 1",
        vote: "vote 1s ease-in-out",
        axcelerate: "axcelerate 0.3s ease-out 1",
        "axcelerate-2": "axcelerate 0.3s ease-in-out 3",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        vote: {
          "0%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(-30deg)",
          },
          "75%": {
            transform: "rotate(30deg)",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        axcelerate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("autoprefixer")],
}
