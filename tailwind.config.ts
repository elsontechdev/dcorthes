import type { Config } from 'tailwindcss'






const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        dcortes:{
          dark:"#1D18E",
          superdark:"#1A100F",
          extradark:"#110E12v",
          darkgray:"#333333",
          gray:"#999999",
          lightgray:"#E4D9BF",
          primary:"#E0AA2C",
          caki:"#C4AB61",
          amarelo:"#E0AA2C",
          cinza:"#d9d9d9",
          cinzaclaro:"#e6e6e6",
          cinzaescuro:"#333333",

        }
      },
      fontFamily:{
        inter:['var(--font-inter)'],
        rubik:['var(--font-rubik)'],
        abril:['var(--font-abril-fatface)'],
        poppins:['var(--font-poppins)'],
        lobster:['var(--font-lobster-two)'],
        dancing:['var(--font-dancing-script)'],

      }
    },
  },
  plugins: [],
}
export default config
