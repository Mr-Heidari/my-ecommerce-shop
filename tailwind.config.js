/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile:'400px',
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "2kmonitor": "2300px",
      "4kmonitor": "3600px",

    },
    extend: {
      backgroundImage: {
        cartIcone: "url('/src/assets/cartIcone.svg')",
        img1: "url('/src/assets/img1.png')",
        img2: "url('/src/assets/img2.png')",
        img3: "url('/src/assets/img3.png')",
        img4: "url('/src/assets/img4.png')",
        addtocartIcone: "url('/src/assets/addtocartIcone.svg')",
        deleteIcone: "url('/src/assets/deleteIcone.svg')",
        menuIcone: "url('/src/assets/menuIcone.svg')",
        searchIcone: "url('/src/assets/searchIcone.svg')",
        amex: "url('/src/assets/paymentIcones/svg/amex-fill.svg')",
        applepay: "url('/src/assets/paymentIcones/svg/applepay-fill.svg')",
        cash: "url('/src/assets/paymentIcones/svg/cash-dollar-fill.svg')",
        discover: "url('/src/assets/paymentIcones/svg/discover-fill.svg')",
        mastercard: "url('/src/assets/paymentIcones/svg/mastercard-fill.svg')",
        paypal: "url('/src/assets/paymentIcones/svg/paypal-fill.svg')",
        visa: "url('/src/assets/paymentIcones/svg/visa-fill.svg')",
        themeIcone:"url('/src/assets/themeIcone.svg')",
      },
    },
  },
  plugins: [],
};
