/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '25px',
      screens: {
        md: '920px',
        lg: '1200px',
        xl: '1320px',
      },
    },
    extend: {
      screens: {
        xs: '400px',
      },
      fontFamily: {
        bricolage: ["'Bricolage Grotesque'", "sans-serif"],
        instrument: ["'Instrument Sans'", "sans-serif"],
        walsheim: ["'Walsheim'", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],
      },
      colors: {
        primary: "#5046E5",
        primary_light: "#4B72CA",
        secondary: "#BB69CC",
        body: "#606060",
        dark: "#141418",
        gray: "#B3B3B3",

        /* custom */
        /* purple */
        purple: "#7B34F1",
        purple_light: "#F593E3",
        purple_dark: "#7F18F5",
        purple_vintage: "#865F70",

        /* green */
        green_light: "#71C954",
        green_dark: "#618A09",
        green_dark_2: "#2B830D",
        green: "#58AC70",
        green_accent: "#21D073",

        /* salmon */
        salmon: "#8B37E4",
        salmon_accent: "#DE5A59",
        
        /* pink */
        pink: "#F451A5",
        pink_accent: "#FD8FAB",
        pink_strong: "#DD22F5",
        
        /* blue */
        blue: "#2B5D89",
        blue_accent: "#2C8AF6",
        blue_light: "#03AADD",
        blue_dark: "#394BBA",
        blue_deep: "#5250B9",
        sky: "#34AFF1",
        blue_royal: "#3954C7",
        aqua: "#21BCCA",
        cyan: "#0BFDED",
        
        /* red */
        red_light: "#F5A593",
        red: "#EA1B45",
        
        /* lighter */
        lighter: "#F6F7F9",
        divider: "#E6E9EE",
        neutral: "#7F7F7F",
        
        /* dark */
        blue_gray: "#262532",

        /* yellow */
        yellow: "#f6e85c",
      },
      fontSize: {
        tiny: ['16px', '1.5'],
        base: ['17px', '1.4'],
        headline: ['28px', '1.2'],
        subtitle: ['32px', '1.2'],
        title: ['38px', '1.2'],
        hero: ['42px', '1.1'],
      },
      boxShadow: {
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.1)',
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container-small': {
          maxWidth: '920px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '25px',
          paddingRight: '25px',
        },
      });
    },
  ],
}