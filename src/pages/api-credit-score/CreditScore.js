import React from 'react'
import { CRow, CCol, CForm, CCard, CCardHeader, CCardBody } from '@coreui/react'

const CreditScore = () => {
  return (
    <div>
      <CForm>
        <CRow>
          <CCol>
            <CCard className="mb-4">
              <CCardHeader>Parameter Pencarian: Credit Score</CCardHeader>
              <CCardBody></CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CForm>
    </div>
  )
}

export default CreditScore
