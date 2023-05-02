/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ['14px', '23px'],
        base: ['11px', '21px'],
        lg: ['20px', '28px'],
        xl: ['35px', '52px'],
        xl: ['55px', '62px'],
        medio: ['16px', '26px'],
      },
      colors: {
        verde: "#16c57c",
        gray: {
          '50':  '#f9faf9',
          '100': '#f0f2f2',
          '200': '#dddfe1',
          '300': '#b7bdbe',
          '400': '#879493',
          '500': '#69726c',
          '600': '#53574f',
          '700': '#3f413c',
          '800': '#2b2b2a',
          '900': '#1a1a1b',
        },
        blue: {
          '50':  '#f6f9fb',
          '100': '#e3f0fd',
          '200': '#c5d9fa',
          '300': '#9db5f3',
          '400': '#798eea',
          '500': '#6269e3',
          '600': '#514dd6',
          '700': '#3e39b6',
          '800': '#2b2788',
          '900': '#181956',
        },
        indigo: {
          '50':  '#f9fafb',
          '100': '#edeffb',
          '200': '#dad4f8',
          '300': '#baaeef',
          '400': '#a485e3',
          '500': '#8c60da',
          '600': '#7344c9',
          '700': '#5733a6',
          '800': '#3c2377',
          '900': '#221748',
        },
        cerise: {
          '50':  '#fdfcfb',
          '100': '#faeff2',
          '200': '#f6cbe6',
          '300': '#ec9ecb',
          '400': '#ea6fac',
          '500': '#df4b91',
          '600': '#c93270',
          '700': '#a22652',
          '800': '#771b35',
          '900': '#49111c',
        },
        cerise: {
          '50':  '#fdfcfa',
          '100': '#fbf0ed',
          '200': '#f8cfda',
          '300': '#eea1b5',
          '400': '#eb718d',
          '500': '#de4e6b',
          '600': '#c7344c',
          '700': '#a02738',
          '800': '#741b25',
          '900': '#471114',
        },
        cocoa: {
          '50':  '#fcfbf8',
          '100': '#faf0d9',
          '200': '#f5d7b1',
          '300': '#e7ae7d',
          '400': '#da804f',
          '500': '#c55d30',
          '600': '#a8431f',
          '700': '#823219',
          '800': '#5a2313',
          '900': '#39150c',
        },
        gold: {
          '50':  '#fbfaf4',
          '100': '#f9f0bd',
          '200': '#f1dd81',
          '300': '#dcb84f',
          '400': '#bd8e2a',
          '500': '#9e6f15',
          '600': '#80550d',
          '700': '#62400c',
          '800': '#432c0b',
          '900': '#2c1b08',
        },
        lemon: {
          '50':  '#faf9f3',
          '100': '#f8f0b5',
          '200': '#eedf76',
          '300': '#d4bd46',
          '400': '#ac9424',
          '500': '#897611',
          '600': '#6e5d0b',
          '700': '#54450a',
          '800': '#392f09',
          '900': '#271d08',
        },
        green: {
          '50':  '#f2f6f3',
          '100': '#dff0e6',
          '200': '#b5e6c5',
          '300': '#7acb94',
          '400': '#35ab62',
          '500': '#25903c',
          '600': '#1f7a2b',
          '700': '#1d5d24',
          '800': '#15401d',
          '900': '#0f2717',
        },
        submarine: {
          '50':  '#eff6f5',
          '100': '#d0f0f4',
          '200': '#9be6e6',
          '300': '#61cbc8',
          '400': '#27aca2',
          '500': '#1c907c',
          '600': '#197963',
          '700': '#175d4d',
          '800': '#123f39',
          '900': '#0c272a',
        },
        'tarawera': {
          '50': '#ebfffe',
          '100': '#cdfeff',
          '200': '#a1f9ff',
          '300': '#60f2ff',
          '400': '#18e1f8',
          '500': '#00c4de',
          '600': '#009cba',
          '700': '#087d96',
          '800': '#10647a',
          '900': '#125367',
          '950': '#053545',
      },
        gray: {
          '50':  '#f9faf9',
          '100': '#f0f2f2',
          '200': '#dddfe1',
          '300': '#b7bdbe',
          '400': '#879493',
          '500': '#69726c',
          '600': '#53574f',
          '700': '#3f413c',
          '800': '#2b2b2a',
          '900': '#1a1a1b',
        },
        gray: {
          '50':  '#f8f9f9',
          '100': '#eef1f4',
          '200': '#d8dee7',
          '300': '#b1bbcb',
          '400': '#8493a7',
          '500': '#677185',
          '600': '#535667',
          '700': '#3f404d',
          '800': '#2b2c36',
          '900': '#1a1a22',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
