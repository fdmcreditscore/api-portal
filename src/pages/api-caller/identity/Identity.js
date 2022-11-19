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
  CImage,
  CSpinner,
} from '@coreui/react'

const Identity = () => {
  const [onProgress, setOnProgress] = useState(false)
  const [apiResponse, setApiResponse] = useState()
  const [idFormFormat, setIdFormFormat] = useState(false)

  const [fileKtp, setFileKtp] = useState({
    image: null,
    encoded: null,
  })
  const [fileSelfie, setFileSelfie] = useState({
    image: null,
    encoded: null,
  })

  const handleResultFormat = () => {
    setIdFormFormat(!idFormFormat)
  }

  const handleOnChangeKtpFile = (e) => {
    e.preventDefault()
    let reader = new FileReader()
    reader.onloadend = () => {
      let base64 = reader.result
      setFileKtp({
        image: URL.createObjectURL(e.target.files[0]),
        encoded: base64,
      })
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const handleOnChangeSelfieFile = (e) => {
    e.preventDefault()
    let reader = new FileReader()
    reader.onloadend = () => {
      let base64 = reader.result
      setFileSelfie({
        image: URL.createObjectURL(e.target.files[0]),
        encoded: base64,
      })
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setOnProgress(true)
    console.log('Submitting')
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        imageKtp: fileKtp.encoded,
        imageSelfie: fileSelfie.encoded,
      }),
    }

    fetch(window.location.origin + '/middlewr/v1/api/identity/facematch', config)
      .then((response) => response.json())
      .then((data) => {
        setApiResponse(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
    setOnProgress(false)
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
                  <CCol sm={5}>
                    <CFormLabel className="col-sm-5 col-form-label">Upload File KTP</CFormLabel>
                    <CFormInput type="file" id="filektp" onChange={handleOnChangeKtpFile} />
                  </CCol>
                  <CCol>
                    <CImage
                      align="end"
                      thumbnail
                      src={fileKtp.image}
                      width={200}
                      height={200}
                      alt="preview image"
                    />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CCol sm={5}>
                    <CFormLabel className="col-sm-5 col-form-label">Upload Foto wajah</CFormLabel>
                    <CFormInput type="file" id="filewajah" onChange={handleOnChangeSelfieFile} />
                  </CCol>
                  <CCol>
                    <CImage
                      align="end"
                      thumbnail
                      src={fileSelfie.image}
                      width={200}
                      height={200}
                      alt="preview image"
                    />
                  </CCol>
                </CRow>
              </CCardBody>
              <CCardFooter>
                <CButton onClick={handleOnSubmit}>Submit</CButton>
                {onProgress && (
                  <CButton disabled>
                    <CSpinner component="span" size="sm" aria-hidden="true" />
                    Loading...
                  </CButton>
                )}
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CForm>
      <CListGroup>
        <CListGroupItem color="info">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Result</h5>
            <CButton color="link" size="sm" onClick={handleResultFormat}>
              {idFormFormat ? 'JSON Format' : 'Form Format'}
            </CButton>
          </div>
        </CListGroupItem>
        {idFormFormat && (
          <>
            <CListGroupItem>
              <CRow>
                <CCol sm={3}>Status :</CCol>
                <CCol>{apiResponse.status}</CCol>
              </CRow>
              <CRow>
                <CCol sm={3}>Message :</CCol>
                <CCol>{apiResponse.message}</CCol>
              </CRow>
            </CListGroupItem>
          </>
        )}
        {!idFormFormat && (
          <CListGroupItem>
            <CRow>
              <CCol>
                <pre>{JSON.stringify(apiResponse, null, 4)}</pre>
              </CCol>
            </CRow>
          </CListGroupItem>
        )}
      </CListGroup>
    </div>
  )
}

export default Identity
