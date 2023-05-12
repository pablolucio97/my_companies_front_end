import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { GlobalStyle } from './styles/globalStyles'
import Home from './pages/Home'

function App() {
  return (
    <ThemeProvider theme={theme as never}>
      <GlobalStyle theme={theme as never} />
      <Home />
    </ThemeProvider>
  )
}

export default App
