import { toast } from 'react-toastify'

const showSuccessToast = (message: string) => toast(message, {
    hideProgressBar: true,
    type: 'success',
    autoClose: 1600
})

const showErrorToast = (message: string) => toast(message, {
    hideProgressBar: true,
    type: 'error',
    autoClose: 1600
})

export { showSuccessToast, showErrorToast }