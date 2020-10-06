import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const SANS_FONT_FAMILY = "'Poppins', 'Helvetica', 'Arial', sans-serif"

let theme = createMuiTheme({
  type: 'light',
  fontFamily: SANS_FONT_FAMILY,
  palette: {
    common: {
      black: '#1b1b1b',
    },
    background: {
      paper: '#fff',
      default: '#fff',
    },
    primary: {
      main: '#4C3FC5',
      contrastText: '#fff',
    },
    text: {
      primary: '#1B1B1B',
      secondary: '#606060',
    },
  },
  typography: {
    h1: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 800,
      fontSize: '3rem',
      lineHeight: 1.6,
      letterSpacing: '-0.0021875em',
    },
    h2: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.5,
      letterSpacing: '-0.001625em',
    },
    h3: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 800,
      fontSize: '1.5rem',
      lineHeight: 1.6,
      letterSpacing: '0.03125em',
    },
    h4: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5,
      letterSpacing: '0.0025em',
    },
    h5: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.05em',
    },
    h6: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.0625em',
    },
    body1: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
    body2: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      letterSpacing: '0.035em',
    },
    button: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 500,
      fontSize: '0.75rem',
      lineHeight: 2,
      letterSpacing: '0.07185em',
    },
    caption: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 300,
      fontSize: '0.75rem',
      lineHeight: 2,
      letterSpacing: '0.15em',
    },
    subtitle1: {
      fontFamily: SANS_FONT_FAMILY,
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 2,
      letterSpacing: '0.015em',
    },
  },
})

theme.overrides.MuiButton = {
  root: {
    height: '2.75rem',
    borderRadius: '99px',
  },
  label: {
    fontSize: '0.75rem',
    lineHeight: 2,
  },
  sizeLarge: {
    height: '3.25rem',
  },
}
theme = responsiveFontSizes(theme)

export default theme
