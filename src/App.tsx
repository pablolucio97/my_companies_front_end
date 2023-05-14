import { queryClient } from '@services/queryClient'
import { QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'
import Routes from './routes'
import store from './store'
import { GlobalStyle } from './styles/globalStyles'
import theme from './theme'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme as never}>
          <QueryClientProvider client={queryClient}>
            <GlobalStyle theme={theme as never} />
            <Routes />
            <ToastContainer />
          </QueryClientProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App
