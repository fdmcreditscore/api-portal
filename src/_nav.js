import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilSpeedometer, cilPuzzle } from '@coreui/icons'
import { CNavItem, CNavGroup, CNavTitle } from '@coreui/react'

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
    component: CNavGroup,
    name: 'API data sources services',
    to: '/ApiSource',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Telco Attribute',
        to: '/pages/api-telco',
      },
      {
        component: CNavItem,
        name: 'Demography Attribute',
        to: '/pages/api-telco',
      },
      {
        component: CNavItem,
        name: 'Social Media Info',
        to: '/pages/api-socmed',
      },
      {
        component: CNavItem,
        name: 'Credit Card Ownership',
        to: '/pages/api-socmed',
      },
      {
        component: CNavGroup,
        name: 'Credit/Loan History ',
        to: '/Hist',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Bank',
            to: '/pages/api-socmed',
          },
          {
            component: CNavItem,
            name: 'Fintech',
            to: '/pages/api-socmed',
          },
          {
            component: CNavItem,
            name: 'BPR',
            to: '/pages/api-socmed',
          },
          {
            component: CNavItem,
            name: 'Koperasi',
            to: '/pages/api-socmed',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'BPJS Info',
        to: '/Bpjs',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Worker',
            to: '/pages/api-socmed',
          },
          {
            component: CNavItem,
            name: 'Health',
            to: '/pages/api-socmed',
          },
        ],
      },
      {
        component: CNavItem,
        name: 'DJP Info',
        to: '/pages/api-socmed',
      },
      {
        component: CNavItem,
        name: 'Married Status',
        to: '/pages/api-socmed',
      },
      {
        component: CNavItem,
        name: 'Criminal Info',
        to: '/pages/api-socmed',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'API Photo Comparation',
    to: '/pages/api-identity',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'API OCR Service',
    to: '/pages/api-ocr',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Telco Score Service',
    to: '/pages/api-credit-score',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Credit Score Service',
    to: '/pages/api-creditcard',
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
    name: 'Profile Population Services',
    to: '/pages/api-loan-hist',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Information',
  },
  {
    component: CNavItem,
    name: 'API Service Prices',
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
  {
    component: CNavItem,
    name: 'User Profile',
    to: '/pages/report',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
]

export default _nav
