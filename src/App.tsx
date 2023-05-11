import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { GlobalStyle } from './styles/globalStyles'

function App() {
  return (
    <ThemeProvider theme={theme as never}>
      <GlobalStyle theme={theme as never} />
 
    </ThemeProvider>
  )
}

export default App
