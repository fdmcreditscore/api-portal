import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

const NewCustomer = React.lazy(() => import('./pages/new-cust/NewCustomer'))
const Registration = React.lazy(() => import('./pages/registration/Registration'))
const CustomerList = React.lazy(() => import('./pages/customer-list/CustomerList'))
const CustomizeApi = React.lazy(() => import('./pages/customize-api/CustomizeApi'))
const CustomerDashboard = React.lazy(() => import('./pages/customer-dashboard/CustomerDashboard'))
const InternalDashboard = React.lazy(() => import('./pages/internal-dashboard/InternalDashboard'))
const ApicallHistory = React.lazy(() => import('./pages/apicall-history/ApicallHistory'))
const ApiDoc = React.lazy(() => import('./pages/apidoc/ApiDoc'))
const ApiCaller = React.lazy(() => import('./pages/api-caller/ApiCaller'))
const TelcoForm = React.lazy(() => import('./pages/api-caller/telco/TelcoForm'))
const Identity = React.lazy(() => import('./pages/api-caller/identity/Identity'))
const Socmed = React.lazy(() => import('./pages/api-caller/socmed/Socmed'))
const CreditScore = React.lazy(() => import('./pages/api-caller/credit-score/CreditScore'))
const History = React.lazy(() => import('./pages/history/History'))
const Pricing = React.lazy(() => import('./pages/pricing/Pricing'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Typography, exact: true },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/pages/registration', name: 'Registration', element: Registration },
  { path: '/pages/newcustomer', name: 'NewCustomer', element: NewCustomer },
  { path: '/pages/customer-list', name: 'CustomerList', element: CustomerList },
  { path: '/pages/customize-api', name: 'CustomizeApi', element: CustomizeApi },
  { path: '/pages/customer-dashboard', name: 'CustomerDashboard', element: CustomerDashboard },
  { path: '/pages/internal-dashboard', name: 'InternalDashboard', element: InternalDashboard },
  { path: '/pages/apicallhistory', name: 'ApicallHistory', element: ApicallHistory },
  { path: '/pages/apidoc', name: 'ApiDoc', element: ApiDoc },
  { path: '/pages/api-caller', name: 'ApiCaller', element: ApiCaller },
  { path: '/pages/api-caller/telco', name: 'TelcoForm', element: TelcoForm },
  { path: '/pages/api-caller/identity', name: 'Identity', element: Identity },
  { path: '/pages/api-caller/socmed', name: 'Socmed', element: Socmed },
  { path: '/pages/api-caller/credit-score', name: 'CreditScore', element: CreditScore },
  { path: '/pages/history', name: 'History', element: History },
  { path: '/pages/pricing', name: 'Pricing', element: Pricing },
]

export default routes
