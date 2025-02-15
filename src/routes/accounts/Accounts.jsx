import React from 'react'
import ReusableTable from '../../components/reusableTable/ReusableTable'
import users from "../../db/Data.json"

const Accounts = () => {
  return (
    <div className='w-[100%]'>
      <ReusableTable data={users}/>
    </div>
  )
}

export default Accounts