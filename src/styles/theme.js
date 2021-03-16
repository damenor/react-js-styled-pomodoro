const defaultColor = {
  primary: '#F96F73',
  primaryContrast: '#333',
  secondary: '#72F1F8',
  secondaryContrast: '#333',
  tertuary: '#D981F9',
  tertuaryContrast: '#333',
  dark: '#151C2C',
  gray: '#D4DDFA',
  light: '#f2f2f2',
}

const light = {
  color: {
    ...defaultColor,
    bg: '#fff',
    bgDark: '',
  }
}

const dark = {
  color: {
    ...defaultColor,
    bg: '#1E2140',
    bgDark: '#151932',
  }
}

const defaultTheme = {
  fontSizes: {
    xs: '0.8rem',
    s: '0.9rem',
    m: '1rem',
    l: '1.5rem',
    xl: '2.5rem',
    xxl: '4rem',
  },
  fontWeights: {
    s: 300,
    m: 400,
    xl: 700
  },
  timeProgressBarSize: '200px'
}

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }
