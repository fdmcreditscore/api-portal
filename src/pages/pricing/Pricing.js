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
} from '@coreui/react'
import tseldata from './telkomsel_price.json'
import isatprice from './isat_price.json'
import ocrprice from './ocr_price.json'

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
                <CTableHead color="warning">
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
            <CListGroup>
              <CTable>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell sm={2}>No</CTableHeaderCell>
                    <CTableHeaderCell scope="col">API Service</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Output</CTableHeaderCell>
                    <CTableHeaderCell>Tier #1</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tier #2</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tier #3</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tier #4</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tier #5</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {isatprice.map((p) => (
                    <CTableRow key={p.no}>
                      <CTableDataCell>{p.no}</CTableDataCell>
                      <CTableDataCell>{p.attributes}</CTableDataCell>
                      <CTableDataCell>{p.type}</CTableDataCell>
                      <CTableDataCell>{p.tier1}</CTableDataCell>
                      <CTableDataCell>{p.tier2}</CTableDataCell>
                      <CTableDataCell>{p.tier3}</CTableDataCell>
                      <CTableDataCell>{p.tier4}</CTableDataCell>
                      <CTableDataCell>{p.tier5}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
              <p className="text-medium-emphasis small">
                Tier #1: 10,000 - 50,000 Hits/Month
                <br />
                Tier #2: 50,001 - 1,000,000 Hits/Month
                <br />
                Tier #3: 1,000,001 - 5,000,000 Hits/Month
                <br />
                Tier #4: 5,000,001 - 10,000,000 Hits/Month
                <br />
                Tier #5: 10,000,001 and above
              </p>
            </CListGroup>
          </CCardBody>
        </CCard>
        <br />
        <CCard>
          <CCardHeader>
            <h5>OCR API Price</h5>
          </CCardHeader>
          <CCardBody>
            <CListGroup>
              <CTable>
                <CTableHead color="warning">
                  <CTableRow>
                    <CTableHeaderCell sm={2}>No</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Hits</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Joining Fee</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tariff per hits</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tariff</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {ocrprice.map((p) => (
                    <CTableRow key={p.no}>
                      <CTableDataCell>{p.no}</CTableDataCell>
                      <CTableDataCell>{p.hits}</CTableDataCell>
                      <CTableDataCell>{p.joining_fee}</CTableDataCell>
                      <CTableDataCell>{p.tariff_perhits}</CTableDataCell>
                      <CTableDataCell>{p.tariff}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CContainer>
    </div>
  )
}

export default Pricing
