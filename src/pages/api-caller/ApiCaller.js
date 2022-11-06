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
  CFormInput,
  CFormLabel,
  // DocsLink,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser } from '@coreui/icons'

const CustomerDashboard = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [customers, setCustomers] = useState([])
  useEffect(() => {
    fetch('http://localhost:8900/mgmt/v1/customers/AQ82290')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCustomers(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

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
          <CCardHeader>Customer List</CCardHeader>
          <CCardBody>
            <CRow className="mb-3">
              <CFormLabel className="col-sm-2 col-form-label">Instansi</CFormLabel>
              <CCol sm={10}>
                <CFormInput
                  type="text"
                  id="Instansi"
                  defaultValue={customers.instansi}
                  readOnly
                  plainText
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel className="col-sm-2 col-form-label">Client Id</CFormLabel>
              <CCol sm={10}>
                <CFormInput
                  type="text"
                  id="clientId"
                  defaultValue={customers.clientId}
                  readOnly
                  plainText
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel className="col-sm-2 col-form-label">Email Address</CFormLabel>
              <CCol sm={10}>
                <CFormInput
                  type="text"
                  id="emailAddress"
                  defaultValue={customers.emailAddress}
                  readOnly
                  plainText
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel className="col-sm-2 col-form-label">Saldo Balance</CFormLabel>
              <CCol sm={10}>
                <CFormInput
                  type="text"
                  id="Balance"
                  defaultValue={customers.lastBalance}
                  readOnly
                  plainText
                />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CContainer>
    </div>
  )
}

export default CustomerDashboard
