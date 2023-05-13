import Companies from '@pages/Companies'
import ErrorPage from '@pages/ErrorPage'
import Places from '@pages/Places'
import SignIn from '@pages/SignIn'
import SignUp from '@pages/SignUp'
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
    {
        path: '/empresas',
        element: <Companies />
    },
    {
        path: '/locais/:companyId',
        element: <Places />
    },
])