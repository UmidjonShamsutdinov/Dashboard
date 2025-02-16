import React from 'react'
import ReusableTable from '../../components/reusableTable/ReusableTable'
import users from "../../db/Data.json"

const Informations = () => {
  const pageName = location.pathname.split("/").reverse()[0]
  return (
    <div className='w-[100%]'>
      <ReusableTable data={users} pageName={pageName}/>
    </div>
  )
}

export default Informations