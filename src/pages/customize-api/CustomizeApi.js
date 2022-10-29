import React from 'react'
import { useState, useEffect } from 'react'
import { apiList } from './api-list.js'
import {
  CCard,
  CCardBody,
  CContainer,
  CCardHeader,
  CListGroup,
  CListGroupItem,
  CButton,
  CCardFooter,
  CModal,
  CModalBody,
  CModalFooter,
  CModalTitle,
  CModalHeader,
  CFormCheck,
  CCol,
  CRow,
  CForm,
  // DocsLink,
} from '@coreui/react'

const CustomizeApi = () => {
  const cloneDeep = require('lodash.clonedeep')
  const [modalVisible, setModalVisible] = useState(false)
  const [modules, setModules] = useState([])
  const [apisChooseState, setApisChooseState] = useState(cloneDeep(apiList))

  const handleOnChange = (e) => {
    let apis = apisChooseState.map((element) => {
      element.include = element.name === e.target.id ? !element.include : element.include
      return element
    })
    setApisChooseState(apis)
  }

  function checkDefaultCheck(e) {
    console.log(e)
    return apisChooseState.find((api) => api.name === e).include === true
  }

  const handleOnSubmit = () => {
    const newapis = apisChooseState.filter((el) => el.include === true).map((a) => a.name)
    const bodymsg = { modulNames: newapis }
    console.log(newapis)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bodymsg),
    }
    fetch('http://localhost:8900/mgmt/v1/customers/AQ82290/modulset', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  useEffect(() => {
    fetch('http://localhost:8900/mgmt/v1/customers/AQ82290/modulset')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setModules(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-top">
      <CModal
        alignment="center"
        backdrop="static"
        visible={modalVisible}
        onShow={() => console.log(apisChooseState)}
        onClose={() => setModalVisible(false)}
      >
        <CForm onSubmit={handleOnSubmit}>
          <CModalHeader>
            <CModalTitle>Add New API Set</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <h5>Choose API </h5>
            <CContainer>
              <CRow className="align-items-start">
                <CCol onChange={handleOnChange}>
                  <CFormCheck
                    id="telco:active"
                    label="telco:active"
                    // defaultChecked="true"
                    defaultChecked={
                      apisChooseState.find((e) => e.name === 'telco:active').include === true
                    }
                  />
                  <CFormCheck
                    id="telco:jeniskartu"
                    label="telco:jeniskartu"
                    defaultChecked={checkDefaultCheck('telco:jeniskartu')}
                  />
                  <CFormCheck
                    id="telco:billing"
                    label="telco:billing"
                    defaultChecked={checkDefaultCheck('telco:billing')}
                  />
                  <CFormCheck
                    id="telco:paketdata"
                    label="telco:paketdata"
                    defaultChecked={checkDefaultCheck('telco:paketdata')}
                  />
                  <CFormCheck
                    id="telco:saldo"
                    label="telco:saldo"
                    defaultChecked={checkDefaultCheck('telco:saldo')}
                  />
                  <CFormCheck
                    id="telco:tenure"
                    label="telco:tenure"
                    defaultChecked={checkDefaultCheck('telco:tenure')}
                  />
                  <CFormCheck id="telco:expire" label="telco:expire" />
                  <CFormCheck
                    id="telco:dataexpire"
                    label="telco:dataexpire"
                    defaultChecked={checkDefaultCheck('telco:dataexpire')}
                  />
                  <CFormCheck
                    id="telco:aktivasi"
                    label="telco:aktivasi"
                    defaultChecked={checkDefaultCheck('telco:aktivasi')}
                  />
                </CCol>
                <CCol onChange={handleOnChange}>
                  <CFormCheck
                    id="identity:matchface"
                    label="identity:matchface"
                    defaultChecked={checkDefaultCheck('identity:matchface')}
                  />
                </CCol>
              </CRow>
            </CContainer>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setModalVisible(false)}>
              Cancel
            </CButton>
            <CButton color="primary" type="submit">
              Register
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
      <CContainer>
        <CCard className="mb-4">
          <CCardHeader>Custom API Set</CCardHeader>
          <CCardBody>
            <CListGroup>
              {modules.map((modul) => {
                return (
                  <CListGroupItem
                    component="button"
                    key={modul.modulsetCode}
                    onClick={() => {
                      let registeredApi = modul.moduls.map((n) => n.modulName)
                      let clonedApiList = cloneDeep(apiList)
                      let newApiList = clonedApiList.map((n) => {
                        n.include = registeredApi.includes(n.name) ? true : false
                        return n
                      })
                      setApisChooseState(newApiList)
                      setModalVisible(true)
                    }}
                  >
                    {modul.endpoint}
                  </CListGroupItem>
                )
              })}
            </CListGroup>
            <CCardFooter>
              <CButton
                color="info"
                onClick={() => {
                  setApisChooseState(cloneDeep(apiList))
                  setModalVisible(true)
                }}
              >
                Add New Custom API Set
              </CButton>
            </CCardFooter>
          </CCardBody>
        </CCard>
      </CContainer>
    </div>
  )
}

export default CustomizeApi
