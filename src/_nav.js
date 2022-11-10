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
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
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
    component: CNavItem,
    name: 'API Call',
    to: '/pages/api-caller',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Customize API',
    to: '/pages/customize-api',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'API Docs',
    to: '/pages/apidoc',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavTitle,
  //   name: 'Internal Administration',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Internal Dashboard',
  //   to: '/pages/internal-dashboard',
  //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
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
