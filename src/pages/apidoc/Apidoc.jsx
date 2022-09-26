import React from 'react'
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css"

const Apidoc = () => {
  return (
    <div>
            {/* <SwaggerUI url="https://petstore3.swagger.io/api/v3/openapi.json" /> */}
            <SwaggerUI url="./cdd_schema.json" />
    </div>
  )
}

export default Apidoc