import React from 'react'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CImage,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import PropTypes from 'prop-types'
import { useState } from 'react'

async function loginUser(credentials) {
  console.log('login ke : ' + window.location.origin + '/mgmt/auth/login')
  return fetch(window.location.origin + '/mgmt/auth/login', {
    // return fetch('http://localhost:9050/mgmt/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json())
}

async function getAccessToken(credentials) {
  console.log('start getaccesstoken')
  return fetch(
    'https://dicheck.isinovasi.com:8443/realms/hujanbadai/protocol/openid-connect/token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'client_id=react-app&username=user1&password=password&grant_type=password',
    },
  ).then((data) => data.json())
}

const Login = ({ setLogin }) => {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const [alertVisible, setAlertVisible] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const login = await loginUser({
      username,
      password,
    })
    setAlertVisible(login === 0 ? false : true)
    setLogin(login)

    const accessToken = await getAccessToken({
      username,
      password,
    })
    console.log(accessToken)
    localStorage.setItem('accesstoken', accessToken.access_token)
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={7}>
            <CCardGroup>
              <CCard className="p-5">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="username"
                        autoComplete="username"
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type="submit" color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                  <CAlert color="warning" visible={alertVisible}>
                    User/password is not registered
                  </CAlert>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center justify-content-center">
                  <br />
                  <br />
                  <br />
                  <CImage
                    thumbnail
                    src="./checkyou_logo.png"
                    width={250}
                    height={250}
                    alt="preview image"
                  />
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

Login.propTypes = {
  setLogin: PropTypes.func.isRequired,
}

export default Login
