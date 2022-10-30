import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

const NewCustomer = React.lazy(() => import('./pages/new-cust/NewCustomer'))
const Registration = React.lazy(() => import('./pages/registration/Registration'))
const CustomerList = React.lazy(() => import('./pages/customer-list/CustomerList'))
const CustomizeApi = React.lazy(() => import('./pages/customize-api/CustomizeApi'))
const CustomerDashboard = React.lazy(() => import('./pages/customer-dashboard/CustomerDashboard'))
const InternalDashboard = React.lazy(() => import('./pages/internal-dashboard/InternalDashboard'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/pages/registration', name: 'Registration', element: Registration },
  { path: '/pages/newcustomer', name: 'NewCustomer', element: NewCustomer },
  { path: '/pages/customer-list', name: 'CustomerList', element: CustomerList },
  { path: '/pages/customize-api', name: 'CustomizeApi', element: CustomizeApi },
  { path: '/pages/customer-dashboard', name: 'CustomerDashboard', element: CustomerDashboard },
  { path: '/pages/internal-dashboard', name: 'InternalDashboard', element: InternalDashboard },
]

export default routes
