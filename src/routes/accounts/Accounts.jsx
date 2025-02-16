import React from 'react'
import ReusableTable from '../../components/reusableTable/ReusableTable'
import users from "../../db/Data.json"
import { FiSidebar } from "react-icons/fi";

const Accounts = () => {
  const pageName = location.pathname.split("/").reverse()[0]
  return (
    <div className=''>
      <h2 className='py-[15px] px-[20px] flex items-center gap-3 font-[inter] font-[700]'><FiSidebar/> Akkauntlar</h2>
      <ReusableTable data={users} pageName={pageName}/>
    </div>
  )
}

export default Accounts