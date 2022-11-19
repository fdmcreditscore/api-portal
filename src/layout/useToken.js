import { useState } from 'react'

export default function useToken() {
  const getLogin = () => {
    const tokenString = sessionStorage.getItem('cddlogin')
    const userLogin = JSON.parse(tokenString)
    return userLogin?.status
  }

  const [login, setLogin] = useState(getLogin())

  const saveLogin = (userLogin) => {
    if (userLogin.status === 0) sessionStorage.setItem('cddlogin', JSON.stringify(userLogin))
    setLogin(userLogin.status)
  }

  return {
    setLogin: saveLogin,
    login,
  }
}
