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

const Pricing = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-top">
      <CContainer>
        <CCard>
          <CCardHeader>
            <h5>Telkomsel API Price</h5>
          </CCardHeader>
          <CCardBody>
            <CListGroup>
              <CTable>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">API Service</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Output</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Rate per-hit</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tseldata.map((t) => (
                    <CTableRow key={t.no}>
                      <CTableHeaderCell scope="row">{t.no}</CTableHeaderCell>
                      <CTableDataCell>{t.api_service}</CTableDataCell>
                      <CTableDataCell>{t.description}</CTableDataCell>
                      <CTableDataCell>{t.output}</CTableDataCell>
                      <CTableDataCell>{t.rate_per_hit}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CListGroup>
          </CCardBody>
        </CCard>
        <br />
        <CCard>
          <CCardHeader>
            <h5>Indosat API Price</h5>
          </CCardHeader>
          <CCardBody>
            <CImage src="/price_indosat.png" width={1100} height={500} fluid />
          </CCardBody>
        </CCard>
      </CContainer>
    </div>
  )
}

export default Pricing
