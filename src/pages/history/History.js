import React from 'react'
import { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CContainer,
  CCardHeader,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

const History = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-top">
      <CContainer>
        <CCard className="mb-4">
          <CCardHeader>Daftar Laporan Transaksi</CCardHeader>
          <CCardBody>
            <CListGroup flush>
              <CListGroupItem>
                PDF Daftar API call untuk <a href="#">periode sekarang</a> /{}
                <a href="#">periode lalu</a>
              </CListGroupItem>
              <CListGroupItem>
                PDF Daftar API call per User untuk <a href="">periode sekarang</a> /{}
                <a href="#">periode lalu</a>
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CContainer>
    </div>
  )
}

export default History
