import React from 'react'
import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ content: 'asala aja' })

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.object.isRequired,
}

export default AuthContext
