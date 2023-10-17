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
    name: 'API Datasource Services',
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
        to: '/pages/notavailable',
      },
      {
        component: CNavItem,
        name: 'Social Media Info',
        to: '/pages/notavailable',
      },
      {
        component: CNavItem,
        name: 'Credit Card Ownership',
        to: '/pages/notavailable',
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
            to: '/pages/notavailable',
          },
          {
            component: CNavItem,
            name: 'Fintech',
            to: '/pages/notavailable',
          },
          {
            component: CNavItem,
            name: 'BPR',
            to: '/pages/notavailable',
          },
          {
            component: CNavItem,
            name: 'Koperasi',
            to: '/pages/notavailable',
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
            to: '/pages/notavailable',
          },
          {
            component: CNavItem,
            name: 'Health',
            to: '/pages/notavailable',
          },
        ],
      },
      {
        component: CNavItem,
        name: 'DJP Info',
        to: '/pages/notavailable',
      },
      {
        component: CNavItem,
        name: 'Marital Status',
        to: '/pages/notavailable',
      },
      {
        component: CNavItem,
        name: 'Criminal Info',
        to: '/pages/notavailable',
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
    to: '/pages/notavailable',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Credit Score Service',
    to: '/pages/notavailable',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Profile Population Services',
    to: '/pages/notavailable',
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
    to: '/pages/notavailable',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'History Report',
    to: '/pages/history',
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
