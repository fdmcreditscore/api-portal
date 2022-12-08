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
import { LoginContext } from '../../layout/DefaultLayout'

const Ocr = () => {
  const [onProgress, setOnProgress] = useState(false)
  const [apiResponse, setApiResponse] = useState()
  const [idFormFormat, setIdFormFormat] = useState(true)
  const [withResult, setWithResult] = useState(false)

  const [fileImg, setFileImg] = useState({})

  const handleResultFormat = () => {
    setIdFormFormat(!idFormFormat)
  }

  const handleOnChangeImage = (e) => {
    e.preventDefault()
    let reader = new FileReader()
    reader.onloadend = () => {
      let base64 = reader.result
      setFileImg({
        image: URL.createObjectURL(e.target.files[0]),
        encoded: base64,
      })
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (!(fileImg && fileImg.encoded)) {
      alert('File image belum diupload')
      return
    }
    setOnProgress(true)
    console.log('Submitting')
    let cddlogin = JSON.parse(localStorage.getItem('cddlogin'))
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'XA-ClientId': 'SUAB46906',
        Authorization: 'Bearer ' + cddlogin.accessToken,
      },
      body: JSON.stringify({
        imageKtp: fileImg.encoded,
      }),
    }

    fetch(window.location.origin + '/middlewr/v1/api/ocr', config)
      // fetch('http://localhost:9030/middlewr/v1/api/ocr', config)
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
                  <CCol sm={5}>
                    <CFormLabel className="col-sm-5 col-form-label">Upload File KTP</CFormLabel>
                    <CFormInput type="file" id="fileimg" onChange={handleOnChangeImage} />
                    {fileImg.image && (
                      <CImage
                        align="end"
                        thumbnail
                        src={fileImg.image}
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
                  <CCol sm={3}>NIK :</CCol>
                  <CCol>{apiResponse?.data.nik}</CCol>
                </CRow>
                <CRow>
                  <CCol sm={3}>Nama :</CCol>
                  <CCol>{apiResponse?.data.nama}</CCol>
                </CRow>
                <CRow>
                  <CCol sm={3}>Tempat/Tgl Lahir :</CCol>
                  <CCol>{apiResponse?.data.ttl}</CCol>
                </CRow>
                <CRow>
                  <CCol sm={3}>Gender :</CCol>
                  <CCol>{apiResponse?.data.gender}</CCol>
                </CRow>
                <CRow>
                  <CCol sm={3}>Golongan Darah :</CCol>
                  <CCol>{apiResponse?.data.goldarah}</CCol>
                </CRow>
                <CRow>
                  <CCol sm={3}>Alamat :</CCol>
                  <CCol>{apiResponse?.data.alamat}</CCol>
                </CRow>
                <CRow>
                  <CCol sm={3}>RT/RW :</CCol>
                  <CCol>{apiResponse?.data.rtrw}</CCol>
                </CRow>
                <CRow>
                  <CCol sm={3}>Desa :</CCol>
                  <CCol>{apiResponse?.data.desa}</CCol>
                </CRow>
                <CRow>
                  <CCol sm={3}>Kecamatan :</CCol>
                  <CCol>{apiResponse?.data.kecamatan}</CCol>
                </CRow>
                <CRow>
                  <CCol sm={3}>Kota :</CCol>
                  <CCol>{apiResponse?.data.kota}</CCol>
                </CRow>
                <CRow>
                  <CCol sm={3}>Provinsi :</CCol>
                  <CCol>{apiResponse?.data.provinsi}</CCol>
                </CRow>
                <CRow>
                  <CCol sm={3}>Agama :</CCol>
                  <CCol>{apiResponse?.data.agama}</CCol>
                </CRow>
                <CRow>
                  <CCol sm={3}>Pekerjaan :</CCol>
                  <CCol>{apiResponse?.data.pekerjaan}</CCol>
                </CRow>
                <CRow>
                  <CCol sm={3}>Warganegara :</CCol>
                  <CCol>{apiResponse?.data.warganegara}</CCol>
                </CRow>
                <CRow>
                  <CCol sm={3}>Tanggal Lahir :</CCol>
                  <CCol>{apiResponse?.data.tanggal_lahir}</CCol>
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
      )}
    </div>
  )
}

export default Ocr
