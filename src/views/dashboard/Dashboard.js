import React from 'react'
import { useState, useEffect } from 'react'

import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CProgress,
  CProgressBar,
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CTableRow,
  CWidgetStatsC,
  CWidgetStatsF,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcVisa,
  cifBr,
  cifEs,
  cifFr,
  cifPl,
  cifUs,
  cilChartPie,
  cilPeople,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const Dashboard = () => {
  const [clientInfo, setClientInfo] = useState({})

  const loginInfo = JSON.parse(localStorage.getItem('cddlogin'))
  useEffect(() => {
    console.log('Akan quiery clientInfo: ' + loginInfo.clientId)
    fetch(window.location.origin + '/mgmt/v1/customers/' + loginInfo.clientId)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setClientInfo(res)
      })
  }, [loginInfo.clientId])

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h5>Monthly Statistic</h5>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol xs={4}>
              <CWidgetStatsC
                className="mb-3"
                color="primary"
                inverse
                icon={<CIcon icon={cilChartPie} height={36} />}
                progress={{ color: 'success', value: 75 }}
                text="Widget helper text"
                title="Total Request Transaction"
                value="898"
              />
            </CCol>
            <CCol xs={4}>
              <CWidgetStatsC
                className="mb-3"
                color="warning"
                inverse
                icon={<CIcon icon={cilChartPie} height={36} />}
                progress={{ color: 'success', value: 75 }}
                text="Widget helper text"
                title="Current Balance"
                value={clientInfo.lastBalance?.toLocaleString()}
              />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      <CCard className="mb-4">
        <CCardHeader>
          <h5>Monthly Activity (Transaction) per Service</h5>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol xs={4}>
              <CWidgetStatsF
                className="mb-3"
                color="primary"
                icon={<CIcon icon={cilChartPie} height={24} />}
                title="Telco Attribute"
                value="202"
              />
            </CCol>
            <CCol xs={4}>
              <CWidgetStatsF
                className="mb-3"
                color="warning"
                icon={<CIcon icon={cilChartPie} height={24} />}
                title="Demography Attribute"
                value="20"
              />
            </CCol>
            <CCol xs={4}>
              <CWidgetStatsF
                className="mb-3"
                color="primary"
                icon={<CIcon icon={cilChartPie} height={24} />}
                title="Marital Status"
                value="20"
              />
            </CCol>
            <CCol xs={4}>
              <CWidgetStatsF
                className="mb-3"
                color="warning"
                icon={<CIcon icon={cilChartPie} height={24} />}
                title="Socmed Info"
                value="20"
              />
            </CCol>
            <CCol xs={4}>
              <CWidgetStatsF
                className="mb-3"
                color="primary"
                icon={<CIcon icon={cilChartPie} height={24} />}
                title="Credit Card Ownership"
                value="0"
              />
            </CCol>
            <CCol xs={4}>
              <CWidgetStatsF
                className="mb-3"
                color="warning"
                icon={<CIcon icon={cilChartPie} height={24} />}
                title="OCR Service"
                value="0"
              />
            </CCol>
            <CCol xs={4}>
              <CWidgetStatsF
                className="mb-3"
                color="primary"
                icon={<CIcon icon={cilChartPie} height={24} />}
                title="Telco Score API"
                value="0"
              />
            </CCol>
            <CCol xs={4}>
              <CWidgetStatsF
                className="mb-3"
                color="warning"
                icon={<CIcon icon={cilChartPie} height={24} />}
                title="Loan History API"
                value="0"
              />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>
              <h5>User Activity</h5>
            </CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Registered User</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell>Last Login</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          Registered: {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress className="mb-3" height={2}>
                          <CProgressBar color="warning" value={item.usage.value} />
                        </CProgress>
                        <CProgress className="mb-3" height={2}>
                          <CProgressBar thin color="danger" value={item.usage.value} />
                        </CProgress>
                      </CTableDataCell>
                      <CTableDataCell>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
