import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import Login from 'src/views/pages/login/Login'
import useToken from './useToken'
import { AuthProvider } from 'src/context/AuthProvider'

export const LoginContext = React.createContext({ loginInfo: {} })

const DefaultLayout = () => {
  const { login, setLogin } = useToken()
  if (!(login === 0)) {
    return (
      <AuthProvider>
        <Login setLogin={setLogin} />
      </AuthProvider>
    )
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
