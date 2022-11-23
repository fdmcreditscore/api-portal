import React from 'react'
import { useState } from 'react'
import { apiList } from './telco/api-list.js'
import { CNav, CNavItem, CNavLink, CTabPane, CTabContent, CContainer } from '@coreui/react'
import Identity from './identity/Identity.js'
import TelcoForm from './telco/TelcoForm.js'

const ApiCaller = () => {
  const cloneDeep = require('lodash.clonedeep')

  const [activeTab, setActiveTab] = useState(1)

  return (
    <div className="bg-light min-vh-80 d-flex flex-row align-items-top">
      <CContainer>
        <CNav variant="tabs" role="tablist">
          <CNavItem>
            <CNavLink
              href="javascript:void(0);"
              active={activeTab === 1}
              onClick={() => setActiveTab(1)}
            >
              Telco Profile
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="javascript:void(0);"
              active={activeTab === 2}
              onClick={() => setActiveTab(2)}
            >
              Identity
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="javascript:void(0);"
              active={activeTab === 3}
              onClick={() => setActiveTab(3)}
            >
              Social Media
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="javascript:void(0);"
              active={activeTab === 4}
              onClick={() => setActiveTab(4)}
            >
              Credit Score
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeTab === 1}>
            <TelcoForm />
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeTab === 2}>
            <Identity />
          </CTabPane>
        </CTabContent>
      </CContainer>
    </div>
  )
}

export default ApiCaller
