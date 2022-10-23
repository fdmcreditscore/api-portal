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
import CIcon from '@coreui/icons-react'
import { cilUser } from '@coreui/icons'

const CustomerList = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [customers, setCustomers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
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
            <CListGroup>
              <CListGroupItem component="button" onClick={() => setModalVisible(true)}>
                gdfh justo s
              </CListGroupItem>
              <CListGroupItem component="button">Dapibus ac facilisis in</CListGroupItem>
              <CListGroupItem component="button">Morbi leo risus</CListGroupItem>
              <CListGroupItem component="button">Porta ac consectetur ac</CListGroupItem>
              <CListGroupItem component="button" disabled>
                Vestibulum at eros
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CContainer>
    </div>
  )
}

export default CustomerList
