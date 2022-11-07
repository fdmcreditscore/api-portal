import React from 'react'
import { useState, useEffect } from 'react'
import { apiList } from './api-list.js'
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
  CFormCheck,
  CForm,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser } from '@coreui/icons'

const ApiCaller = () => {
  const cloneDeep = require('lodash.clonedeep')
  const [modalVisible, setModalVisible] = useState(false)
  const [apisChooseState, setApisChooseState] = useState(cloneDeep(apiList))

  const handleChkOnChange = (e) => {
    let apis = apisChooseState.map((element) => {
      element.include = element.name === e.target.id ? !element.include : element.include
      return element
    })
    setApisChooseState(apis)
  }

  return (
    <div className="bg-light min-vh-80 d-flex flex-row align-items-top">
      <CContainer>
        <CForm>
          <CRow className="mb-3">
            <CCol sm={10}>
              <CCard className="mb-4">
                <CCardHeader>Input Data Customer</CCardHeader>
                <CCardBody>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-2 col-form-label">No MSISDN</CFormLabel>
                    <CCol sm={10}>
                      <CFormInput
                        type="text"
                        placeholder="No MSISDN"
                        aria-label="default input example"
                      />
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-2 col-form-label">No KTP</CFormLabel>
                    <CCol sm={10}>
                      <CFormInput
                        type="text"
                        placeholder="No KTP"
                        aria-label="default input example"
                      />
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol>
              <CCard className="mb-4">
                <CCardHeader>Parameter Pencarian: Telco Profile</CCardHeader>
                <CCardBody>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-2 col-form-label">Options</CFormLabel>
                    <CCol sm={10} onChange={handleChkOnChange}>
                      <CFormCheck id="telco:valid" label="check Valid" />
                      <CFormCheck id="telco:active" label="check Active" />
                      <CFormCheck id="telco:jeniskartu" label="check Jenis Kartu" />
                      <CFormCheck id="telco:billing" label="check status Billing" />
                      <CFormCheck id="telco:paketdata" label="check Paket data" />
                      <CFormCheck id="telco:saldo" label="check Saldo" />
                      <CFormCheck id="telco:tenure" label="check Tenure" />
                      <CFormCheck id="telco:expire" label="check Expire" />
                      <CFormCheck id="telco:dataexpire" label="check Data Expire" />
                      <CFormCheck id="telco:aktivasi" label="check Waktu Aktivasi" />
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol>
              <CCard className="mb-4">
                <CCardHeader>Parameter Pencarian: Identity</CCardHeader>
                <CCardBody>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-2 col-form-label">Options</CFormLabel>
                    <CCol sm={10}>
                      <CFormCheck id="telco:valid" label="check Kesesuaian KTP - foto wajah" />
                      <CFormCheck id="telco:active" label="check No KTP" />
                      <CFormCheck id="telco:jeniskartu" label="check No SIM" />
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CButton>Submit</CButton>
        </CForm>
      </CContainer>
    </div>
  )
}

export default ApiCaller
