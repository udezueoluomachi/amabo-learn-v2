/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors : {
      grey : "#979696",
      "orange" : {
        1 : "#FD7012",
        2 : "#FA7913"
      },
      white : {
        1 : "#FFFFFF",
        2 : "#F3F3F3",
        3 : "#EDEDED",
        4 : "#E6E6E6"
      },
      black : {
        1 : "#333333"
      },
      purple : "#F513FA"
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
