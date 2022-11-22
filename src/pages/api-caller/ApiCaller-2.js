import React from 'react'
import { useState } from 'react'
import { apiList } from './telco/api-list.js'
import {
  CButton,
  CCard,
  CCardBody,
  CContainer,
  CCardHeader,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
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
  CInputGroupText,
  CInputGroup,
} from '@coreui/react'

const ApiCaller = () => {
  const cloneDeep = require('lodash.clonedeep')
  const [modalVisible, setModalVisible] = useState(false)
  const [telcoVarsChoosen, setTelcoVarsChoosen] = useState(cloneDeep(apiList))

  const [telcoRequest, setTelcoRequest] = useState({
    msisdn: '',
    variable: [''],
    actdate: '',
  })

  const [requestInfo, setRequestInfo] = useState({
    refid: '',
    msisdn: '',
    ktp: '',
    telcoParameters: [],
    telcoRequest: telcoRequest,
  })

  const [apiResponse, setApiResponse] = useState({
    requestId: '',
    telcoResult: [],
  })

  const handleOnSubmit = () => {
    requestInfo.telcoParameters = telcoVarsChoosen
      .filter((el) => el.include === true)
      .map((a) => a.name)
    requestInfo.refid = Math.floor(Math.random() * 99999)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestInfo),
    }
    console.log(requestOptions)

    fetch(window.Configs.apiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setApiResponse(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
    setModalVisible(true)
  }

  const handleRequestInfoChange = (e) => {
    let r = requestInfo
    if (e.target.id === 'msisdn') {
      r.msisdn = e.target.value
    } else if (e.target.id === 'ktp') {
      r.ktp = e.target.value
    }
    setRequestInfo(r)
  }

  const handleChkOnChange = (e) => {
    let apis = telcoVarsChoosen.map((element) => {
      element.include = element.name === e.target.id ? !element.include : element.include
      return element
    })
    setTelcoVarsChoosen(apis)
    console.log(telcoVarsChoosen)
  }

  return (
    <div className="bg-light min-vh-80 d-flex flex-row align-items-top">
      <CContainer>
        <CNav variant="tabs">
          <CNavItem>
            <CNavLink href="#" active>
              Active
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              onClick={() => {
                console.log('ok')
              }}
            >
              Identity
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Social Media</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Credit Score</CNavLink>
          </CNavItem>
        </CNav>
        <CForm>
          {/* <CRow>
            <CCol sm={10} onChange={handleRequestInfoChange}>
              <CCard className="mb-4">
                <CCardHeader>Input Data Customer</CCardHeader>
                <CCardBody>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-2 col-form-label">No MSISDN</CFormLabel>
                    <CCol sm={10}>
                      <CFormInput
                        type="text"
                        id="msisdn"
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
          </CRow> */}
          <CRow>
            <CCol>
              <CCard className="mb-4">
                <CCardHeader>Parameter Pencarian: Telco Profile</CCardHeader>
                <CCardBody>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-3 col-form-label">No MSISDN</CFormLabel>
                    <CCol sm={9}>
                      <CFormInput
                        type="text"
                        id="msisdn"
                        placeholder="No MSISDN"
                        aria-label="default input example"
                        onChange={handleRequestInfoChange}
                      />
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CCol sm={6} onChange={handleChkOnChange}>
                      <CFormCheck id="telco:valid" label="check Valid" />
                      <CFormCheck id="telco:active" label="check Active" />
                      <CFormCheck id="telco:jeniskartu" label="check Jenis Kartu" />
                      <CFormCheck id="telco:billing" label="check status Billing" />
                      <CFormCheck id="telco:paketdata" label="check Paket data" />
                    </CCol>
                    <CCol sm={6} onChange={handleChkOnChange}>
                      <CFormCheck id="telco:saldo" label="check Saldo" />
                      <CFormCheck id="telco:quotadata" label="check Quota Data" />
                      <CFormCheck id="telco:tenure" label="check Tenure" />
                      <CFormCheck id="telco:expire" label="check Expire" />
                      <CFormCheck id="telco:dataexpire" label="check Data Expire" />
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol>
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
                    <CFormLabel className="col-sm-2 col-form-label">No KTP</CFormLabel>
                    <CCol sm={10}>
                      <CFormInput
                        type="text"
                        placeholder="Input no KTP"
                        aria-label="default input example"
                      />
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Upload foto KTP"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <CInputGroupText id="basic-addon2">Choose file</CInputGroupText>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CFormInput
                        placeholder="Upload foto wajah"
                        aria-label="foto wajah"
                        aria-describedby="basic-addon2"
                      />
                      <CInputGroupText id="basic-addon2">Choose file</CInputGroupText>
                    </CInputGroup>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <CCard className="mb-4">
                <CCardHeader>Parameter Pencarian: Credit Score</CCardHeader>
                <CCardBody>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-3 col-form-label">NIK KTP</CFormLabel>
                    <CCol sm={9}>
                      <CFormInput
                        type="text"
                        id="ktpcc"
                        placeholder="NIK"
                        aria-label="ktpcc"
                        disabled
                      />
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol>
              <CCard className="mb-4">
                <CCardHeader>Parameter Pencarian: Sosial Media</CCardHeader>
                <CCardBody>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-3 col-form-label">Email Address</CFormLabel>
                    <CCol sm={9}>
                      <CFormInput
                        type="text"
                        id="email"
                        placeholder="Email Address"
                        aria-label="default input example"
                        disabled
                      />
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-3 col-form-label">Twitter</CFormLabel>
                    <CCol sm={9}>
                      <CFormInput
                        type="text"
                        id="twitter"
                        placeholder="Twitter Account"
                        aria-label="twitter"
                        disabled
                      />
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-3 col-form-label">Instagram</CFormLabel>
                    <CCol sm={9}>
                      <CFormInput
                        type="text"
                        id="instagram"
                        placeholder="Instagram Account"
                        aria-label="instagram"
                        disabled
                      />
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-3 col-form-label">Facebook</CFormLabel>
                    <CCol sm={9}>
                      <CFormInput
                        type="text"
                        id="facebook"
                        placeholder="Facebook Account"
                        aria-label="facebook"
                        disabled
                      />
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CButton onClick={handleOnSubmit}>Submit</CButton>
        </CForm>
      </CContainer>
      <CModal
        size="xl"
        alignment="center"
        backdrop="static"
        visible={modalVisible}
        onShow={() => console.log(telcoVarsChoosen)}
        onClose={() => setModalVisible(false)}
      >
        <CModalHeader>
          <CModalTitle>API Request Result</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol sm="auto">
              <CCard style={{ width: '32rem' }} className="mb-4">
                <CCardHeader>Telco Response</CCardHeader>
                <CListGroup flush>
                  {apiResponse.telcoResult.map((n, key) => (
                    <CListGroupItem key={n.apiName}>
                      <h6>{n.apiName}</h6>
                      {n.status} : {n.responseDesc}
                    </CListGroupItem>
                  ))}
                </CListGroup>
              </CCard>
            </CCol>
            <CCol sm="auto">
              <CCard style={{ width: '32rem' }}>
                <CCardHeader>Identity Check Response</CCardHeader>
              </CCard>
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={() => setModalVisible(false)}>
            OK
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  )
}

export default ApiCaller