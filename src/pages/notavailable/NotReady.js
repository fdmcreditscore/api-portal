import React from 'react'
import { CRow, CCol, CForm, CCard, CCardHeader, CCardBody } from '@coreui/react'

const NotReady = () => {
  return (
    <div>
      <CForm>
        <CRow>
          <CCol>
            <CCard className={`mb-3 border-top-success border-top-3`} textColor="danger">
              <CCardHeader>This module currently not available</CCardHeader>
              <CCardBody></CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CForm>
    </div>
  )
}

export default NotReady
