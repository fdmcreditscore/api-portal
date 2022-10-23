import React from 'react'
import { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CContainer,
  CCardHeader,
  CListGroup,
  CListGroupItem,
  CModal,
  CModalBody,
  CModalFooter,
  CModalTitle,
  CModalHeader,
  CCol,
  CRow,
  // DocsLink,
} from '@coreui/react'

const NewCustomer = () => {
  const [registrations, setRegistrations] = useState([])
  useEffect(() => {
    const param = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic dXNlcjphZG1pbg==',
      },
    }
    fetch('http://localhost:8900/mgmt/v1/registrations', param)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setRegistrations(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])
  const [modalVisible, setModalVisible] = useState(false)

  function handleClick(e) {
    e.preventDefault()
    console.log('click')
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-top">
      <CModal
        alignment="center"
        backdrop="static"
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <CModalHeader>
          <CModalTitle>New Customer Confirmation</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <h5>Registration Information</h5>
          <CContainer>
            <CRow className="align-items-start">
              <CCol>Instansi</CCol>
              <CCol>One of three columns</CCol>
            </CRow>
            <CRow className="align-items-start">
              <CCol>Address</CCol>
              <CCol>One of three columns</CCol>
            </CRow>
            <CRow className="align-items-start">
              <CCol>Email</CCol>
              <CCol>One of three columns</CCol>
            </CRow>
          </CContainer>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModalVisible(false)}>
            Cancel
          </CButton>
          <CButton color="primary">New Customer</CButton>
        </CModalFooter>
      </CModal>
      <CContainer>
        <CCard className="mb-4">
          <CCardHeader>Pick one.</CCardHeader>
          <CCardBody>
            <CListGroup>
              {registrations.map((registration) => {
                return (
                  <CListGroupItem
                    component="button"
                    key={registration.registrationId}
                    onClick={() => setModalVisible(true)}
                  >
                    {registration.instansi}
                  </CListGroupItem>
                )
              })}
            </CListGroup>
          </CCardBody>
        </CCard>
      </CContainer>
    </div>
  )
}

export default NewCustomer
