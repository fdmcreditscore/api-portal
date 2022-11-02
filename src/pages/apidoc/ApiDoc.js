import { CContainer } from '@coreui/react'
import React from 'react'
import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'

const ApiDoc = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-top">
      <CContainer>
        {/* <SwaggerUI url="https://petstore3.swagger.io/api/v3/openapi.json" /> */}
        <SwaggerUI url="http://localhost:3000/openapi.json" />
      </CContainer>
    </div>
  )
}

export default ApiDoc
