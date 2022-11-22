import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilSpeedometer } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  // {
  //   component: CNavItem,
  //   name: 'Dashboard',
  //   to: '/dashboard',
  //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Customer Menu',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Customer Dashboard',
  //   to: '/pages/customer-dashboard',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Submit Registration',
  //   to: '/pages/registration',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  {
    component: CNavTitle,
    name: 'API Services',
  },
  {
    component: CNavItem,
    name: 'Telco API',
    to: '/pages/api-caller/telco',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Identity API',
    to: '/pages/api-caller/identity',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Social Media API',
    to: '/pages/api-caller/socmed',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Credit Score API',
    to: '/pages/api-caller/credit-score',
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
