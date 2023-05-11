import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { GlobalStyle } from './styles/globalStyles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <p>Hello from My Companies</p>
    </ThemeProvider>
  )
}

export default App
