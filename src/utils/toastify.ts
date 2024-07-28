import { Bounce, toast } from 'react-toastify'

export function showToast(message: string) {
  return toast.error(message, {
    position: 'top-center',
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'dark',
    transition: Bounce
  })
}
