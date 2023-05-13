import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { GlobalStyle } from './styles/globalStyles'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@services/queryClient'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import store from './store'

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
