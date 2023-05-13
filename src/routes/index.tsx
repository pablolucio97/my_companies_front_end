import Companies from '@pages/Companies'
import ErrorPage from '@pages/ErrorPage'
import Places from '@pages/Places'
import SignIn from '@pages/SignIn'
import SignUp from '@pages/SignUp'
import { Routes as RouterRoutes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@store/index'

export default function Routes() {

    const state = useSelector((state: RootState) => state)
    const { isAuthenticated } = state.auth

    if (isAuthenticated) {
        return (
            <RouterRoutes>
                <Route path='/empresas' element={<Companies />} />
                <Route path='/locais/:companyId' element={<Places />} />
                <Route path="/*" element={<ErrorPage />} />
            </RouterRoutes>
        )
    } else {
        return (
            <RouterRoutes>
                <Route path='/' element={<SignIn />} />
                <Route path='/cadastro' element={<SignUp />} />
                <Route path="/*" element={<ErrorPage />} />
            </RouterRoutes>
        )
    }
}