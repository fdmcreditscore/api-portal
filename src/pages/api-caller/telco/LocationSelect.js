import React from 'react'
import { useState, useEffect } from 'react'
import { CFormSelect } from '@coreui/react'
import PropTypes from 'prop-types'

function LocationSelect({ setLocation }) {
  const [visibleBupati, setVisibleBupati] = useState(false)
  const [visibleCamat, setVisibleCamat] = useState(false)
  const [visibleDesa, setVisibleDesa] = useState(false)

  const [provinsi, setProvinsi] = useState([])
  const [kabupaten, setKabupaten] = useState([{}])
  const [kecamatan, setKecamatan] = useState([{}])
  const [desa, setDesa] = useState([{}])

  useEffect(() => {
    if (provinsi.length === 0) {
      console.log('fetch provinsi')
      fetch(window.location.origin + '/middlewr/v1/api/master/provinsi', {
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => response.json())
        .then((data) => {
          setProvinsi(data)
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  })

  const handleOnChangeProvinsi = (e) => {
    console.log(e.target.value)
    if (e.target.value !== 'Pilih Provinsi') {
      fetch(
        window.location.origin + '/middlewr/v1/api/master/kabupaten?provinsi=' + e.target.value,
        {
          headers: { 'Content-Type': 'application/json' },
        },
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setKabupaten(data)
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
    setVisibleBupati(true)
    setVisibleCamat(false)
    setVisibleDesa(false)
  }

  const handleOnChangeKabupaten = (e) => {
    console.log(e.target.value)
    if (e.target.value !== 'Pilih Kabupaten') {
      fetch(
        window.location.origin + '/middlewr/v1/api/master/kecamatan?kabupaten=' + e.target.value,
        {
          headers: { 'Content-Type': 'application/json' },
        },
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setKecamatan(data)
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
    setVisibleCamat(true)
    setVisibleDesa(false)
  }

  const handleOnChangeKecamatan = (e) => {
    console.log('pilih kecamatan ' + e.target.value)
    if (e.target.value !== 'Pilih Kecamatan') {
      fetch(window.location.origin + '/middlewr/v1/api/master/desa?kecamatan=' + e.target.value, {
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setDesa(data)
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
    setVisibleDesa(true)
  }

  const handleOnChangeDesa = (e) => {
    console.log('pilih desa: ' + e.target.value)
    if (e.target.value !== 'Pilih Desa') {
      setLocation(e.target.value)
    }
  }

  return (
    <>
      <CFormSelect aria-label="Default select example" onChange={handleOnChangeProvinsi}>
        <option key="A0">Pilih Provinsi</option>
        {provinsi.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </CFormSelect>
      {visibleBupati && (
        <CFormSelect aria-label="Default select example" onChange={handleOnChangeKabupaten}>
          <option key="B0">Pilih Kabupaten</option>
          {kabupaten.map((kab) => (
            <option key={kab.id} value={kab.id}>
              {kab.kabupaten}
            </option>
          ))}
        </CFormSelect>
      )}
      {visibleCamat && (
        <CFormSelect aria-label="Default select example" onChange={handleOnChangeKecamatan}>
          <option key="C0">Pilih Kecamatan</option>
          {kecamatan.map((cam) => (
            <option key={cam.id} value={cam.id}>
              {cam.kecamatan}
            </option>
          ))}
        </CFormSelect>
      )}
      {visibleDesa && (
        <CFormSelect aria-label="Default select example" onChange={handleOnChangeDesa}>
          <option key="D0">Pilih Desa</option>
          {desa.map((d) => (
            <option key={d.idDesa} value={d.idDesa}>
              {d.desa}
            </option>
          ))}
        </CFormSelect>
      )}
    </>
  )
}
export default LocationSelect

LocationSelect.propTypes = {
  setLocation: PropTypes.func.isRequired,
}
