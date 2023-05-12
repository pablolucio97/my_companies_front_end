import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { GlobalStyle } from './styles/globalStyles'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './routes'

function App() {
  return (
    <ThemeProvider theme={theme as never}>
      <GlobalStyle theme={theme as never} />
      <RouterProvider router={Routes} />
    </ThemeProvider>
  )
}

export default App
