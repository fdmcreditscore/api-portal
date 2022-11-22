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
  const [idFormFormat, setIdFormFormat] = useState(true)
  const [withResult, setWithResult] = useState(false)
  const [similarity, setSimilarity] = useState('0.7')

  const [fileKtp, setFileKtp] = useState({})
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

  const handleOnChangeSimilarity = (e) => {
    e.preventDefault()
    setSimilarity(e.target.value)
    console.log(similarity)
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
    if (!(fileKtp && fileKtp.encoded && fileSelfie && fileSelfie.encoded)) {
      alert('File image belum diupload')
      return
    }
    setOnProgress(true)
    console.log('Submitting')
    console.log('Similarity ' + similarity)
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        similarity: similarity,
        imageKtp: fileKtp.encoded,
        imageSelfie: fileSelfie.encoded,
      }),
    }

    fetch(window.location.origin + '/middlewr/v1/api/identity/facematch', config)
      .then((response) => response.json())
      .then((data) => {
        setApiResponse(data)
        setWithResult(true)
        setOnProgress(false)
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
                  <CCol sm={4}>
                    <CFormLabel className="col-sm-5 col-form-label">
                      Similarity threshold:
                    </CFormLabel>
                  </CCol>
                  <CCol sm={4}>
                    <CFormInput
                      type="number"
                      step="0.05"
                      min="0.10"
                      max="1.00"
                      id="similarity"
                      onChange={handleOnChangeSimilarity}
                      value={similarity}
                    />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CCol sm={5}>
                    <CFormLabel className="col-sm-5 col-form-label">Upload File KTP</CFormLabel>
                    <CFormInput type="file" id="filektp" onChange={handleOnChangeKtpFile} />
                    {fileKtp.image && (
                      <CImage
                        align="end"
                        thumbnail
                        src={fileKtp.image}
                        width={200}
                        height={200}
                        alt="preview image"
                      />
                    )}
                  </CCol>
                  <CCol sm={5}>
                    <CFormLabel className="col-sm-6 col-form-label">Upload Foto wajah</CFormLabel>
                    <CFormInput type="file" id="filewajah" onChange={handleOnChangeSelfieFile} />
                    {fileSelfie.image && (
                      <CImage
                        align="end"
                        thumbnail
                        src={fileSelfie.image}
                        width={200}
                        height={200}
                        alt="preview image"
                      />
                    )}
                  </CCol>
                </CRow>
              </CCardBody>
              <CCardFooter>
                <CButton onClick={handleOnSubmit}>Submit</CButton>
                {onProgress && <CSpinner color="success" />}
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CForm>
      {withResult && (
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
                  <CCol>{apiResponse?.status}</CCol>
                </CRow>
                <CRow>
                  <CCol sm={3}>Message :</CCol>
                  <CCol>{apiResponse?.message}</CCol>
                </CRow>
              </CListGroupItem>
              {apiResponse.face_match && (
                <CListGroupItem>
                  <CRow>
                    <CCol sm={3}>Face Match :</CCol>
                    <CCol>
                      {apiResponse.face_match.match ? 'Match!' : 'Not Match'} {}
                      (Similarity: {apiResponse.face_match.similarity})
                    </CCol>
                  </CRow>
                </CListGroupItem>
              )}
              {apiResponse.face_liveness && (
                <CListGroupItem>
                  <CRow>
                    <CCol sm={3}>Face Liveness :</CCol>
                    <CCol>
                      {apiResponse?.face_liveness.doubt ? 'In doubt' : 'Live'} (liveness: {}
                      {apiResponse?.face_liveness.liveness})
                    </CCol>
                  </CRow>
                </CListGroupItem>
              )}
              {apiResponse.face_size_check && (
                <CListGroupItem>
                  <CRow>
                    <CCol sm={3}>Face Size Check :</CCol>
                    <CCol>
                      {apiResponse.face_size_check.pass_min_face_size ? 'Pass!' : 'Not passed'} {}
                      (dimensi: {}
                      {apiResponse.face_size_check.face_h} x {apiResponse?.face_size_check.face_w} )
                    </CCol>
                  </CRow>
                </CListGroupItem>
              )}
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
      )}
    </div>
  )
}

export default Identity
