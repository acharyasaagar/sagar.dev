import { ThemeProvider } from '@material-ui/core/styles'

import App from './components/App'
import theme from './theme'

const Index = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)

export default Index
