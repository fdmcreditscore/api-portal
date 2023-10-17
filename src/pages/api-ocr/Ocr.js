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
import axios from 'axios'
import ApiResponse from 'src/components/api-response/ApiResponse'

const Ocr = () => {
  const [onProgress, setOnProgress] = useState(false)
  const [apiResponse, setApiResponse] = useState()
  const [idFormFormat, setIdFormFormat] = useState(true)
  const [withResult, setWithResult] = useState(false)
  const [errMsg, setErrMsg] = useState()
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

  const ocrClient = axios.create({
    baseUrl: window.location.origin,
  })

  ocrClient.interceptors.request.use(
    async (config) => {
      let accesstoken = JSON.parse(localStorage.getItem('accesstoken'))
      const currentDate = new Date()
      console.log(`Interceptor now ${currentDate.getTime()} vs ${accesstoken.expires_at}`)
      if (currentDate.getTime() > accesstoken.expires_at) {
        const promise = await axios.get(window.location.origin + '/mgmt/auth/refresh')
        console.log('intercept: ' + promise.data)
        config.headers.Authorization = `Bearer ${promise.data.access_token}`
        let expires_at = new Date().getTime() + (promise.data.expires_in - 3) * 1000
        let accesstoken = { access_token: promise.data.access_token, expires_at: expires_at }
        localStorage.setItem('accesstoken', JSON.stringify(accesstoken))
      }
      return config
    },
    (error) => {
      console.log('error on intercept.request')
      setErrMsg('Unauthorized')
      return Promise.reject(error)
    },
  )

  ocrClient.interceptors.response.use(
    function (response) {
      if (response.data) {
        if (response.status === 200 || response.status === 201) {
          return response
        }
        // reject errors &
        console.log('450 reject response')
        return Promise.reject(response)
      }
      console.log('550 reject response')
      return Promise.reject(response)
    },
    function (error) {
      console.log('client interceptor -> error')
      localStorage.removeItem('cddlogin')
      setErrMsg('Unauthorized')
      return Promise.reject(error)
      // return <Navigate replace to="/login" />
    },
  )

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setOnProgress(true)
    setWithResult(false)
    setErrMsg()
    if (!(fileImg && fileImg.encoded)) {
      alert('File image belum diupload')
      return
    }
    console.log('Submitting')
    let cddlogin = JSON.parse(localStorage.getItem('cddlogin'))

    const headers = {
      'Content-Type': 'application/json',
      'XA-ClientId': 'SUAB46906',
      Authorization: 'Bearer ' + cddlogin.accessToken,
    }
    ocrClient
      .post('/middlewr/v1/api/ocr', { imageKtp: fileImg.encoded }, { headers: headers })
      .then((response) => {
        setApiResponse(response?.data)
        setWithResult(true)
        setOnProgress(false)
      })
      .catch((error) => {
        console.log('error 2: ' + error)
        if (!error?.response) {
          setErrMsg('No Server Response')
        } else if (error.response?.status === 401) {
          setErrMsg('Unauthorized')
        } else if (error.response?.status === 404) {
          setErrMsg('Service not available')
        } else {
          console.log(error.response)
          setErrMsg('API call Failed')
        }
        setOnProgress(false)
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
      {errMsg && (
        <CListGroup>
          <CListGroupItem color="info">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Error</h5>
              <pre>{errMsg}</pre>
            </div>
          </CListGroupItem>
        </CListGroup>
      )}
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
