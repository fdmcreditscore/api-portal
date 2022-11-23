import { useState } from 'react'

export default function useToken() {
  const getLogin = () => {
    const tokenString = localStorage.getItem('cddlogin')
    const userLogin = JSON.parse(tokenString)
    return userLogin?.status
  }

  const [login, setLogin] = useState(getLogin())

  const saveLogin = (userLogin) => {
    if (userLogin.status === 0) localStorage.setItem('cddlogin', JSON.stringify(userLogin))
    setLogin(userLogin.status)
  }

  return {
    setLogin: saveLogin,
    login,
  }
}
