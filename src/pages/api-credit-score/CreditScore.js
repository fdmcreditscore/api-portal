import React from 'react'
import { CRow, CCol, CForm, CCard, CCardHeader, CCardBody, CButton } from '@coreui/react'

const CreditScore = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:8080/hello')
      .then((response) => console.log(response))
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
              <CCardHeader>Parameter Pencarian: Credit Score</CCardHeader>
              <CCardBody>
                <CButton onClick={handleOnSubmit}>Submit</CButton>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CForm>
    </div>
  )
}

export default CreditScore
