import React from 'react'
import { CForm } from '@coreui/react'
import { useState } from 'react'
import {
  CRow,
  CCol,
  CFormCheck,
  CFormLabel,
  CFormInput,
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CButton,
  CListGroup,
  CListGroupItem,
  CFormSelect,
  CSpinner,
} from '@coreui/react'
import { apiList } from './api-list.js'
import LocationSelect from './LocationSelect.js'

const TelcoForm = () => {
  const cloneDeep = require('lodash.clonedeep')
  const [telcoVarsChoosen, setTelcoVarsChoosen] = useState(cloneDeep(apiList))
  const [resultVisible, setResultVisible] = useState(false)
  const [providerOpt, setProviderOpt] = useState('Indosat')
  const [actdate, setActdate] = useState('')
  const [visibleLocation, setVisibleLocation] = useState(false)
  const [location, setLocation] = useState()
  const [formFormat, setFormFormat] = useState(true)
  const [loading, setLoading] = useState(false)

  const [apiResponse, setApiResponse] = useState({
    requestId: '',
    telcoResult: [],
  })

  const [requestInfo, setRequestInfo] = useState({
    refid: '',
    provider: '',
    msisdn: '',
    apiServices: [
      {
        apiName: '',
        apiParam: '',
      },
    ],
  })

  const handleOnChangeResultFormat = () => {
    setFormFormat(!formFormat)
  }

  const handleOnSubmit = () => {
    setLoading(true)
    requestInfo.refid = Math.floor(Math.random() * 99999)
    requestInfo.provider = 'Indosat'
    requestInfo.apiServices = telcoVarsChoosen.filter((el) => el.include === true)
    if (actdate) {
      requestInfo.apiServices.push({
        apiName: 'isat:aktivasi',
        apiParam: actdate,
      })
    }
    if (location) {
      requestInfo.apiServices.push({
        apiName: 'isat:location',
        apiParam: location,
      })
    }

    console.log(requestInfo)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestInfo),
    }
    console.log(requestOptions)

    fetch(window.location.origin + '/middlewr/v1/api/telco', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setApiResponse(data)
        setResultVisible(true)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err.message)
      })
  }

  const handleRequestInfoChange = (e) => {
    let r = requestInfo
    if (e.target.id === 'msisdn') {
      r.msisdn = e.target.value
      setRequestInfo(r)
    } else if (e.target.id === 'actdate') {
      setActdate(e.target.value)
    }
  }

  const handleChkOnChange = (e) => {
    let apis = telcoVarsChoosen.map((element) => {
      element.include = element.apiName === e.target.id ? !element.include : element.include
      return element
    })
    setTelcoVarsChoosen(apis)
    console.log(telcoVarsChoosen)
  }

  const handleLocationChkOnChange = () => {
    setVisibleLocation(!visibleLocation)
    if (!visibleLocation) setLocation()
  }

  return (
    <div>
      <CForm>
        <CRow>
          <CCol>
            <CCard className="mb-4">
              <CCardHeader>Parameter Pencarian: Telco Profile</CCardHeader>
              <CCardBody>
                <CRow>
                  <CFormLabel className="col-sm-2 col-form-label">Provider</CFormLabel>
                  <CCol sm={4}>
                    <CFormSelect onChange={(e) => setProviderOpt(e.target.value)}>
                      <option value="Indosat">Indosat</option>
                      <option value="Telkom">Telkom</option>
                      <option value="XL" disabled>
                        XL
                      </option>
                    </CFormSelect>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label">No MSISDN</CFormLabel>
                  <CCol sm={5}>
                    <CFormInput
                      type="text"
                      id="msisdn"
                      placeholder="No MSISDN"
                      aria-label="default input example"
                      onChange={handleRequestInfoChange}
                    />
                  </CCol>
                </CRow>
                {providerOpt === 'Indosat' && (
                  <div>
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
                    <CRow onChange={(e) => console.log(e.target.id)}>
                      <CCol sm={3}>
                        <CFormCheck id="telco:aktivasi" label="perkiraan Waktu Aktivasi" />
                      </CCol>
                      <CCol sm={2}>
                        <CFormInput
                          type="date"
                          id="actdate"
                          placeholder="yyyy-MM-dd"
                          aria-label="default input example"
                          size="sm"
                          onChange={handleRequestInfoChange}
                        />
                      </CCol>
                    </CRow>
                    <CRow className="mb-3">
                      <CCol onChange={handleLocationChkOnChange}>
                        <CFormCheck id="telco:location" label="Perkiraan Lokasi" />
                      </CCol>
                      {visibleLocation && (
                        <CCol>
                          <LocationSelect setLocation={setLocation} />
                        </CCol>
                      )}
                    </CRow>
                  </div>
                )}
              </CCardBody>
              <CCardFooter>
                <CButton onClick={handleOnSubmit} disabled={providerOpt !== 'Indosat'}>
                  Submit
                </CButton>
                {loading && <CSpinner color="success" />}
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CForm>
      {resultVisible && (
        <CListGroup>
          <CListGroupItem color="info">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-1">Result</h6>
              <CButton color="link" size="sm" onClick={handleOnChangeResultFormat}>
                {formFormat ? 'JSON Format' : 'Form Format'}
              </CButton>
            </div>
          </CListGroupItem>
          {formFormat &&
            apiResponse.responses.map((r) => (
              <CListGroupItem key={r.apiName}>
                <CRow>
                  <CCol sm={3}>{r.apiName} :</CCol>
                  <CCol>
                    {r.status} - {r.responseDesc}
                  </CCol>
                </CRow>
              </CListGroupItem>
            ))}
          {!formFormat && (
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

export default TelcoForm
