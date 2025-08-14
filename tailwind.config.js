/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.vue'],
  prefix: 'tw-',
  theme: {
    extend: {
      fontSize: {
        h1: ['24px', '125%'],
        h2: ['20px', '125%'],
        h3: ['18px', '125%'],
        body_l: ['16px', '125%'], //18, 28
        body_m: ['15px', '125%'], // 16, 24
        body_s: ['14px', '125%'], // 14, 24
        body_xs: ['13px', '125%'], // 12, 16
      },
      fontFamily: {
        inter: 'Inter',
      },
      borderRadius: {
        sm: '0px',
        md: '4px',
        lg: '16px',
        xl: '20px',
      },
    },
    colors: {
      white: '#FFFFFF',
      white80: '#FFFFFFCC',
      back40: '#20243A66',
      success: '#02B644',
      error: '#FF000099',
      primary_orange: '#F85921',
      primary_gr: ' linear-gradient(180deg, #FF7D4F 5.22%, #F85921 112.95%)',
      primart_grback:
        'linear-gradient(95.46deg, rgba(9, 11, 22, 0.8) 0%, #20243A 100%)',
      icon_nav: '#B8B8B8',
      icon_brown50: '#8E776280',
      icon: '#8E7762',
      base: '#F4EEE8',
      els: '#FDFCFA',
      shade: '#00000080',
      black: '#20243A',
      secondary: '#6F6B67',
      categories: '#E3D8CD',
      disabled: '#F5C1AC',
      stroke: '#ECE5DD',
      stroke50: '#F8592180',
      link: '#1D3FFF',
      transparent: 'transparent',
    },

    container: {
      center: true,
      padding: '16px',
    },
  },
  plugins: [],
}
