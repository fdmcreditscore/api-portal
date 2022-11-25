import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilSpeedometer } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'API Parameter Services',
  },
  {
    component: CNavItem,
    name: 'Telco API',
    to: '/pages/api-telco',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Identity API',
    to: '/pages/api-identity',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Social Media API',
    to: '/pages/api-socmed',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Credit Score API',
    to: '/pages/api-credit-score',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Credit Card API',
    to: '/pages/api-creditcard',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'OCR API',
    to: '/pages/api-ocr',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Telco Score API',
    to: '/pages/api-telco-score',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Loan History API',
    to: '/pages/api-loan-hist',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Profile Data Service',
  },
  {
    component: CNavItem,
    name: 'Sektor UMKM',
    to: '/pages/profiledata',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Sektor Pendidikan',
    to: '/pages/profiledata',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Information',
  },
  {
    component: CNavItem,
    name: 'Pricing',
    to: '/pages/pricing',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavItem,
  //   name: 'Customize API',
  //   to: '/pages/customize-api',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  {
    component: CNavItem,
    name: 'API Docs',
    to: '/pages/apidoc',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'History Report',
    to: '/pages/report',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavTitle,
  //   name: 'Internal Administration',
  // },
  // {
  //   component: CNavItem,
  //   name: 'New Customer',
  //   to: '/pages/newcustomer',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Customer List',
  //   to: '/pages/customer-list',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'API Call Usage',
  //   to: '/pages/apicall-history',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
]

export default _nav
