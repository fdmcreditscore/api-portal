import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const NewCustomer = React.lazy(() => import('./pages/new-cust/NewCustomer'))
const Registration = React.lazy(() => import('./pages/registration/Registration'))
const CustomerList = React.lazy(() => import('./pages/customer-list/CustomerList'))
const CustomizeApi = React.lazy(() => import('./pages/customize-api/CustomizeApi'))
const CustomerDashboard = React.lazy(() => import('./pages/customer-dashboard/CustomerDashboard'))
const ApicallHistory = React.lazy(() => import('./pages/apicall-history/ApicallHistory'))
const ApiDoc = React.lazy(() => import('./pages/apidoc/ApiDoc'))
const TelcoForm = React.lazy(() => import('./pages/api-telco/TelcoForm'))
const Identity = React.lazy(() => import('./pages/api-identity/Identity'))
const Socmed = React.lazy(() => import('./pages/api-socmed/Socmed'))
const CreditScore = React.lazy(() => import('./pages/api-credit-score/CreditScore'))
const CreditCard = React.lazy(() => import('./pages/api-creditcard/CreditCard'))
const Ocr = React.lazy(() => import('./pages/api-ocr/Ocr'))
const TelcoScore = React.lazy(() => import('./pages/api-telco-score/TelcoScore'))
const LoanHist = React.lazy(() => import('./pages/api-loan-hist/LoanHist'))

const History = React.lazy(() => import('./pages/history/History'))
const Pricing = React.lazy(() => import('./pages/pricing/Pricing'))
const ProfileData = React.lazy(() => import('./pages/profile-data/ProfileData'))

const routes = [
  { path: '/webui', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/pages/registration', name: 'Registration', element: Registration },
  { path: '/pages/newcustomer', name: 'NewCustomer', element: NewCustomer },
  { path: '/pages/customer-list', name: 'CustomerList', element: CustomerList },
  { path: '/pages/customize-api', name: 'CustomizeApi', element: CustomizeApi },
  { path: '/pages/customer-dashboard', name: 'CustomerDashboard', element: CustomerDashboard },
  { path: '/pages/apicallhistory', name: 'ApicallHistory', element: ApicallHistory },
  { path: '/pages/apidoc', name: 'ApiDoc', element: ApiDoc },
  { path: '/pages/api-telco', name: 'TelcoForm', element: TelcoForm },
  { path: '/pages/api-identity', name: 'Identity', element: Identity },
  { path: '/pages/api-socmed', name: 'Socmed', element: Socmed },
  { path: '/pages/api-credit-score', name: 'CreditScore', element: CreditScore },
  { path: '/pages/api-creditcard', name: 'CreditCard', element: CreditCard },
  { path: '/pages/api-ocr', name: 'OCR', element: Ocr },
  { path: '/pages/api-telco-score', name: 'TelcoScore', element: TelcoScore },
  { path: '/pages/api-loan-hist', name: 'LoanHist', element: LoanHist },
  { path: '/pages/history', name: 'History', element: History },
  { path: '/pages/pricing', name: 'Pricing', element: Pricing },
  { path: '/pages/profile-data', name: 'ProfileData', element: ProfileData },
]

export default routes
