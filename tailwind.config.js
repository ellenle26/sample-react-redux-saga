module.exports = {
  content: ["./src/components/**/*.tsx", "./src/pages/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Noto Sans JP", "sans-serif"],
    },
    colors: {
      primary: '#004C88',
      gray: '#DCDCDC',
      gray_file: "#F8F8F8",
      primary_text: '#525252',
      error: '#d22',
      black: '#000',
      black_70: 'rgb(0,0,0, 0.7)',
      yellow_bg: '#FEF8E2',
      tag: '#B1E1F6',
      gray_: "#C9C9C9",
      gray_bg: "#EFEFEF",
      white: "#FFFFFF",
      secondary: "#BCD8FB",
      third: "#E0F3FB",
      border: "#878787",
      border2: "#C4C4C4",
      background1: "#F1F1F1",
      background2: "rgba(51, 51, 51, 0.6)",
      background3: "#F8F8F8",
      background4: "#FEF8E2",
      red: '#F53F3F',
      primary_2: '#F7B215'
    },
    minWidth: {
      '10': "2.5rem"
    },
    minHeight: {
      '10': '2.5rem'
    },
    extend: {
      padding: {
        '5%': '5%',
        '10%': '10%',
        "5px": "5px",
        "8px": "8px"
      },
      height: {
        'full-screen': '100vh'
      },
      maxHeight: {
        'inner-screen': 'calc(100% - 56px)',
        'dialog': '85%',
        'preview-body': '450px'
      },
      boxShadow: {
        '1': '0px 4px 4px rgba(87, 87, 87, 0.25)',
        '2': '0px 4px 4px rgba(218, 218, 218, 0.6)'
      },
      borderRadius: {
        'button': '28px',
        '2': '0px 4px 4px rgba(218, 218, 218, 0.6)'
      },
      gridTemplateColumns: {
        '3fr-1fr-3fr-1fr': '3fr 1fr 3fr 1fr',
        '2fr-1fr': '2fr 1fr'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
