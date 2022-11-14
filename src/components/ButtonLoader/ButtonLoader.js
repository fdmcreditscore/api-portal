import React, { Component } from 'react'
import { CButton } from '@coreui/react'

export default class ButtonLoader extends Component {
  state = {
    loading: false,
  }

  fetchData = () => {
    this.setState({ loading: true })

    //Faking API call here
    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000)
  }

  render() {
    const { loading } = this.state

    return (
      <div>
        <CButton onClick={this.fetchData} disabled={loading}>
          {loading && <i className="fa fa-refresh fa-spin" style={{ marginRight: '5px' }} />}
          {loading && <span>Loading..</span>}
          {!loading && <span>Submit</span>}
        </CButton>
      </div>
    )
  }
}
