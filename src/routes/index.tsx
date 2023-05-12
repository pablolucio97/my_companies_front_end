import SignIn from '@pages/SignIn'
import SignUp from '@pages/SignUp'
import ErrorPage from '@pages/ErrorPage'
import { createBrowserRouter } from 'react-router-dom'

export const Routes = createBrowserRouter([
    {
        errorElement: <ErrorPage />
    },
    {
        path: '/',
        element: <SignIn />
    },
    {
        path: '/cadastro',
        element: <SignUp />
    },
])