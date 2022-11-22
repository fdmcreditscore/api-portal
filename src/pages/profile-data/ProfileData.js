import React from 'react'
import {
  CCard,
  CCardBody,
  CContainer,
  CCardHeader,
  CListGroup,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CImage,
} from '@coreui/react'
import tseldata from './telkomsel_price.json'

const ProfileData = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-top">
      <CContainer>
        <CCard>
          <CCardHeader>
            <h5>Telkomsel API Price</h5>
          </CCardHeader>
          <CCardBody>
            <CListGroup />
          </CCardBody>
        </CCard>
        <br />
      </CContainer>
    </div>
  )
}

export default ProfileData
