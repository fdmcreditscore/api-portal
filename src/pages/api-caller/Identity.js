import React from 'react'
import { useState } from 'react'
import {
  CRow,
  CCol,
  CFormInput,
  CButton,
  CForm,
  CCard,
  CCardHeader,
  CCardBody,
  CCardFooter,
  CFormLabel,
  CListGroup,
  CListGroupItem,
  CAlert,
} from '@coreui/react'

const Identity = () => {
  const [files, setFiles] = useState({
    ktp: null,
    diri: null,
  })

  const [apiResponse, setApiResponse] = useState({
    message: '',
    status: '',
    errcode: '',
    errdesc: '',
    face_liveness: {
      liveness: '',
    },
    face_match: {
      similarity: '',
    },
  })

  const handleOnChangeFile = (e) => {
    e.preventDefault()
    console.log(e.target.id)
    if (e.target.id === 'filektp') files.ktp = e.target.files[0]
    else files.diri = e.target.files[0]
  }

  const [alertVisible, setAlertVisible] = useState(false)
  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log('Submitting')

    const formData = new FormData()
    formData.append('files', files.ktp)
    formData.append('files', files.diri)
    const config = {
      method: 'POST',
      body: formData,
    }

    fetch(process.env.REACT_APP_IDENTITY_URL, config)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setApiResponse(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <div>
      <CForm>
        <CRow>
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
                  <CFormLabel className="col-sm-2 col-form-label">Upload File KTP</CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="file" id="filektp" onChange={handleOnChangeFile} />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label">Upload Foto wajah</CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="file" id="filewajah" onChange={handleOnChangeFile} />
                  </CCol>
                </CRow>
              </CCardBody>
              <CCardFooter>
                <CButton onClick={handleOnSubmit}>Submit</CButton>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CForm>
      <h5>Result</h5>
      <CListGroup>
        <CListGroupItem>
          <CRow>
            <CCol>
              <pre>{JSON.stringify(apiResponse, null, 4)}</pre>
            </CCol>
          </CRow>
        </CListGroupItem>
      </CListGroup>
    </div>
  )
}

export default Identity
