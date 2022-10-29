import React from 'react'
import { useState, useEffect } from 'react'
import { apiList } from './api-list.js'
import {
  CCard,
  CCardBody,
  CContainer,
  CCardHeader,
  CListGroup,
  CListGroupItem,
  CButton,
  CCardFooter,
  CModal,
  CModalBody,
  CModalFooter,
  CModalTitle,
  CModalHeader,
  CFormCheck,
  CCol,
  CRow,
  // DocsLink,
} from '@coreui/react'

const CustomizeApi = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modules, setModules] = useState([])
  const [isChecked, setIsChecked] = useState(new Array(toppings.length).fill(false))

  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    fetch('http://localhost:8900/mgmt/v1/customers/AQ82290/modulset')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setModules(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-top">
      <CModal
        alignment="center"
        backdrop="static"
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <CModalHeader>
          <CModalTitle>Add New API Set</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <h5>Choose API </h5>
          <CContainer>
            <CRow className="align-items-start">
              <CCol>
                <CFormCheck id="telco:active" label="telco:active" />
                <CFormCheck id="telco:jeniskartu" label="telco:jeniskartu" />
                <CFormCheck id="telco:billing" label="telco:billing" />
                <CFormCheck id="telco:paketdata" label="telco:paketdata" />
                <CFormCheck id="telco:saldo" label="telco:saldo" />
                <CFormCheck id="telco:tenure" label="telco:tenure" />
                <CFormCheck id="telco:expire" label="telco:expire" />
                <CFormCheck id="telco:dataexpire" label="telco:dataexpire" />
                <CFormCheck id="telco:aktivasi" label="telco:aktivasi" />
              </CCol>
              <CCol>
                <CFormCheck id="identity:matchface" label="identity:matchface" />
              </CCol>
            </CRow>
          </CContainer>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModalVisible(false)}>
            Cancel
          </CButton>
          <CButton color="primary">Register</CButton>
        </CModalFooter>
      </CModal>
      <CContainer>
        <CCard className="mb-4">
          <CCardHeader>Custom API Set</CCardHeader>
          <CCardBody>
            <CListGroup>
              {modules.map((modul) => {
                return (
                  <CListGroupItem component="button" key={modul.modulsetCode}>
                    {modul.endpoint}
                  </CListGroupItem>
                )
              })}
            </CListGroup>
            <CCardFooter>
              <CButton color="info" onClick={() => setModalVisible(true)}>
                Add New Custom API Set
              </CButton>
            </CCardFooter>
          </CCardBody>
        </CCard>
      </CContainer>
    </div>
  )
}

export default CustomizeApi
