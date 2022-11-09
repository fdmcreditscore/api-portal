import React from 'react'

import {
    CCard,
    CCardBody,
    CContainer,
    CCardHeader,
    CCol,
    CRow,
    CFormLabel,
    CFormCheck,
  } from '@coreui/react'
  
const CustomerInfoCard = () => {

    return (
        <CRow>
            <CCol>
            <CCard className="mb-4">
                <CCardHeader>Parameter Pencarian: Telco Profile</CCardHeader>
                <CCardBody>
                    <CRow className="mb-3">
                        <CFormLabel className="col-sm-2 col-form-label">Options</CFormLabel>
                        <CCol sm={10}>
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
                    <CFormCheck
                        id="ident:foto"
                        label="check Kesesuaian KTP - foto wajah"
                        disabled
                    />
                    <CFormCheck id="ident:cktp" label="check No KTP" disabled />
                    <CFormCheck id="ident:csim" label="check No SIM" disabled />
                    </CCol>
                </CRow>
                </CCardBody>
            </CCard>
            </CCol>
        </CRow>
    )
}
