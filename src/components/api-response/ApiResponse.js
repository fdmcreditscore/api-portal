import React from 'react'
import { CRow, CCol, CListGroupItem } from '@coreui/react'

const ocrdata = {
  refid: '2212113882408',
  responseCode: '200',
  responseDesc: 'success',
  data: {
    referenceId: '221200051',
    nik: '3171234567890123',
    nama: 'MIRA SETIAWAN',
    ttl: 'JAKARTA, 18-02-1986',
    gender: 'PEREMPUAN',
    goldarah: 'B',
    alamat: 'JL. PASTI CEPAT A7/66',
    rtrw: '007/008',
    desa: 'PEGADUNGAN',
    kecamatan: 'KALIDERES',
    kota: 'JAKARTA BARAT',
    provinsi: 'PROVINSI DKI JAKARTA',
    agama: 'ISLAM',
    pekerjaan: 'PEGAWAI SWASTA',
    warganegara: 'WNI',
    tanggal_lahir: '18-02-1986',
  },
}

const ApiResponse = () => {
  const a = [['refid', ocrdata.refid]]
  const entries = Object.entries(ocrdata.data)
  console.log(entries)
  return (
    <>
      <CListGroupItem>
        <CRow>
          <CCol sm={3}>NIK :</CCol>
          <CCol>240005053</CCol>
        </CRow>
        <CRow>
          <CCol sm={3}>Nama :</CCol>
          <CCol>4jl5lkj</CCol>
        </CRow>
      </CListGroupItem>
    </>
  )
}

export default ApiResponse
