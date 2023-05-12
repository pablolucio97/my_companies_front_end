import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { GlobalStyle } from './styles/globalStyles'
import SignUp from '@pages/SignUp'

function App() {
  return (
    <ThemeProvider theme={theme as never}>
      <GlobalStyle theme={theme as never} />
      <SignUp />
    </ThemeProvider>
  )
}

export default App
