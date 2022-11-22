import React from 'react'
import { CCard, CCardBody, CContainer, CCardHeader, CListGroup } from '@coreui/react'

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
