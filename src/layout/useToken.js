import { useState } from 'react'

export default function useToken() {
  const getLogin = () => {
    const tokenString = localStorage.getItem('cddlogin')
    const userLogin = JSON.parse(tokenString)
    return userLogin?.status
  }

  const [login, setLogin] = useState(getLogin())

  const saveLogin = (userLogin) => {
    if (userLogin.status === 0) {
      let expires_at = new Date().getTime() + (userLogin.expireIn - 3) * 1000
      let accesstoken = { access_token: userLogin.accessToken, expires_at: expires_at }
      localStorage.setItem('cddlogin', JSON.stringify(userLogin))
      localStorage.setItem('accesstoken', JSON.stringify(accesstoken))
    }
    setLogin(userLogin.status)
  }

  return {
    setLogin: saveLogin,
    login,
  }
}
