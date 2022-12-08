import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser } from '@coreui/icons'

const Registration = () => {
  const [organizationName, setOrganizationName] = useState('')
  const [address, setAddress] = useState('')
  const [personName, setPersonName] = useState('')
  const [businessPhone, setBusinessPhone] = useState('')
  const [personEmail, setPersonEmail] = useState('')
  const [taxId, setTaxId] = useState('')
  const [businessRegistrationNumber, setBusinessRegistrationNumber] = useState('')

  // const handleInputChange = (event) => {
  //   const target = event.target
  //   const value = target.type === 'checkbox' ? target.checked : target.value
  //   const name = target.name
  //   this.setState({
  //     [name]: value,
  //   })
  // }
  // const handleSubmit = async (e) => {
  function handleSubmit(e) {
    e.preventDefault()
    let body = JSON.stringify({
      organizationName: organizationName,
      personName: personName,
      businessPhone: businessPhone,
      personEmail: personEmail,
      businessRegistrationNumber: businessRegistrationNumber,
      taxId: taxId,
    })
    console.log(body)
    let response = fetch('http://localhost:8900/mgmt/v1/registrations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    }).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        setOrganizationName('')
        setAddress('')
        setPersonName('')
        setBusinessPhone('')
        setPersonEmail('')
        setTaxId('')
        setBusinessRegistrationNumber('')
        console.log('Sukses submit')
        alert('Sukses submit')
        return res.json()
      } else {
        console.log('Error ' + res.status)
      }
    })
  }

  return (
    <div className="bg-light min-vh-80 d-flex flex-row align-items-top">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <h1>Register</h1>
                <p className="text-medium-emphasis">Register your company</p>

                <CForm onSubmit={handleSubmit}>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      required
                      placeholder="Company name"
                      // name="organizationName"
                      autoComplete="username"
                      value={organizationName}
                      // onChange={(e) => handleInputChange(e)}
                      onChange={(e) => setOrganizationName(e.target.value)}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Company Address"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Business Registration ID / SIUPP"
                      value={businessRegistrationNumber}
                      onChange={(e) => setBusinessRegistrationNumber(e.target.value)}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Tax ID / NPWP"
                      value={taxId}
                      onChange={(e) => setTaxId(e.target.value)}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Person Name"
                      value={personName}
                      onChange={(e) => setPersonName(e.target.value)}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      autoComplete="email"
                      value={personEmail}
                      required
                      onChange={(e) => setPersonEmail(e.target.value)}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Business Phone"
                      autoComplete="phone"
                      value={businessPhone}
                      onChange={(e) => setBusinessPhone(e.target.value)}
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton color="success" type="submit">
                      Submit
                    </CButton>
                  </div>

                  <p className="text-medium-emphasis">
                    Check your email for registration information
                  </p>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Registration
