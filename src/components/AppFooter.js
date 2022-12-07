import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="http://isinovasi.com" target="_blank" rel="noopener noreferrer">
          DI Check
        </a>
        <span className="ms-1">&copy; 2022</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
