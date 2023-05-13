import { toast } from 'react-toastify'

const showSuccessToast = (message: string) => toast(message, {
    hideProgressBar: true,
    type: 'success',
})

const showErrorToast = (message: string) => toast(message, {
    hideProgressBar: true,
    type: 'error',
})

export { showSuccessToast, showErrorToast }