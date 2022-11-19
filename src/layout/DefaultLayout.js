import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import Login from 'src/views/pages/login/Login'
import useToken from './useToken'

// function setLogin(userLogin) {
//   sessionStorage.setItem('cddlogin', JSON.stringify(userLogin))
// }

// function getLogin() {
//   const tokenString = sessionStorage.getItem('cddlogin')
//   const userLogin = JSON.parse(tokenString)
//   return userLogin?.status
// }

const DefaultLayout = () => {
  const { login, setLogin } = useToken()
  // const loginStatus = getLogin()
  console.log('status ' + login)
  if (!(login === 0)) {
    return <Login setLogin={setLogin} />
  }

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
