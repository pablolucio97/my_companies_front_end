import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '@interfaces/application'

const auth = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: {
            nome: '',
            id: ''
        } as IUser
    },
    reducers: {
        signIn(state, action) {
            state.isAuthenticated = true
            state.user = action.payload
        },
        signOut(state) {
            state.isAuthenticated = false
            state.user = {
                nome: '',
                id: ''
            }
        }
    }
})

export const { signIn, signOut } = auth.actions
export default auth.reducer