import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { GlobalStyle } from './styles/globalStyles'
import SignIn from '@pages/SignIn'

function App() {
  return (
    <ThemeProvider theme={theme as never}>
      <GlobalStyle theme={theme as never} />
      <SignIn />
    </ThemeProvider>
  )
}

export default App
