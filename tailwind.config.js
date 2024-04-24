/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    colors: {
      'pink': '#EB568E',
      'blue': '#144EE3',
      'black': '#0B101B',
      'grey': '#181E29',
      'lite': '#C9CED6',
      'pink_2': '#A353AA',

      //Utlização do Gradiente mediante  explicação a exemplo abaixo:
      // "from-*": Indica cor inicial do gradiente.
      // "to-*": Indica com final do gradiente.
      //"via-*": Indica a cor do meio so gradiente

      //<div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."></div>

      //Sequencia do Gradiente: blue --> pink --> pink_2 --> blue.  


    },
    fontFamily: {
      'small-13-normal': ['Inter', 'sans-serif'],
      'basic-16-normal': ['Inter', 'sans-serif'],
      'para-16': ['Inter', 'sans-serif'],
      'cta': ['Inter', 'sans-serif'],
      'basic-16-bold': ['Inter', 'sans-serif'],
      'title-24-normal': ['Inter', 'sans-serif'],
      'title-24-bold': ['Inter', 'sans-serif'],
      'large-60-bold': ['Inter', 'sans-serif'],
    },
    fontSize: {
      'small-13-normal': '13px',
      'basic-16-normal': '16px',
      'para-16': '16px',
      'cta': '16px',
      'basic-16-bold': '16px',
      'title-24-normal': '24px',
      'title-24-bold': '24px',
      'large-60-bold': '60px',
    },
    fontWeight: {
      'small-13-normal': '400',
      'basic-16-normal': '400',
      'para-16': '400',
      'cta': '700',
      'basic-16-bold': '700',
      'title-24-normal': '400',
      'title-24-bold': '700',
      'large-60-bold': '700',
    },
    lineHeight: {
      'small-13-normal': '15px',
      'basic-16-normal': '100%',
      'para-16': '150%',
      'cta': '16px',
      'basic-16-bold': '16px',
      'title-24-normal': '100%',
      'title-24-bold': '100%',
      'large-60-bold': '91%',
    },
    letterSpacing: {
      'small-13-normal': '0.63px',
      'basic-16-normal': '4%',
      'para-16': '0.63px',
      'cta': '0.63px',
      'basic-16-bold': '3%',
      'title-24-normal': '4%',
      'title-24-bold': '4%',
      'large-60-bold': '4%',
    },
    extend: {
      spacing: {
        '1': "8px",
        '2': "16px",
        '3': "20px",
        '4': "32px",
        '5': "40px"
      },
    },
  },
  plugins: [],
}

