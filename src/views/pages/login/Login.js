import React, { useState, useContext } from 'react'
import {
  CAlert,
  CButton,
  CCard,
  CCardImage,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/AuthProvider'
import axios from 'axios'

const baseURL = window.location.origin + '/mgmt/auth/login'
// const baseURL = 'http://localhost:9050/mgmt/auth/login'

const Login = ({ setLogin }) => {
  const { setAuth } = useContext(AuthContext)
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState(null)
  const [onProgress, setOnProgress] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setOnProgress(true)
    axios
      .post(baseURL, { username, password }, { withCredentials: true })
      .then((response) => {
        const logInfo = response?.data
        setLogin(response.data)
        setAuth({ logInfo })
        setOnProgress(false)
      })
      .catch((error) => {
        if (!error?.response) {
          setErrMsg('No Server Response')
        } else if (error.response?.status === 400) {
          setErrMsg('Missing Username or Password')
        } else if (error.response?.status === 401) {
          setErrMsg('Unauthorized')
        } else if (error.response?.status === 404) {
          setErrMsg('Service not available')
        } else {
          console.log(error.response)
          setErrMsg('Login Failed')
          setOnProgress(false)
        }
      })
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardImage orientation="top" src="./checkyou_logo.png" />
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    {/* <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="SUAB46906"
                        disabled
                        onChange={(e) => setClient(e.target.value)}
                      />
                    </CInputGroup> */}
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
                        {onProgress && <CSpinner color="success" />}
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                  <CAlert color="danger" visible={errMsg !== null}>
                    {errMsg}
                  </CAlert>
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
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
              </CCard> */}
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
