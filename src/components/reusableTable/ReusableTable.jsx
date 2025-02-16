import React from 'react'
import { BiCopy } from "react-icons/bi";

const ReusableTable = ({data, pageName}) => {
    const tableHeaders = Object.keys(data[0])
    console.log(location.pathname.split("/").reverse()[0]);
    console.log(tableHeaders);
    location.pathname.split("/").reverse()[0] === "accounts" ? tableHeaders.splice(tableHeaders.length-3, 3) : tableHeaders.splice(2, tableHeaders.length-5) 
       
    

    
  return (
    <div className='w-[100%] h-[100%] overflow-auto'>
        <table className='w-[100%]'>
            <thead>
                <tr className=''>
                    {
                        tableHeaders?.map((e,i)=>
                            <th key={i} className='px-[24px] py-[12px] border border-gray-200 text-[1rem] bg-[#F3F4F6] font-[inter] text-[#71717B] capitalize font-[700] text-start whitespace-nowrap'>
                                {e.length > 5 ? e.toLocaleLowerCase().replaceAll("_", " ") : e.toLocaleUpperCase()}
                            </th>
                        )
                    }               
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((user,index)=>
                        <tr key={index}>
                            <td className='border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start'>
                                {user.id}
                            </td>
                            <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.full_name}
                            </td >                            
                            {pageName != "user-info" ? <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.pinfl}
                            </td> : <td className="flex gap-2 items-center border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.entrance_code} <BiCopy className='hover:cursor-pointer'/>
                            </td>}
                            <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {pageName != "user-info" ? user.auto_number : user.account_type}
                            </td>
                            <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {pageName != "user-info" ? user.vin_code: user.created_at}
                            </td>
                            {pageName != "user-info" && <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.car_type}
                            </td>}
                            {pageName != "user-info" && <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.car_model}
                            </td>}
                            {pageName != "user-info" && <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.client_id}
                            </td>}
                            {pageName != "user-info" && <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.bank_branch}
                            </td>}
                            {pageName != "user-info" && <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.gps_engineer_status}
                            </td>}
                            {pageName != "user-info" && <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.affirmative_status}
                            </td>}
                            {pageName != "user-info" && <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.legal_status}
                            </td>}
                            {pageName != "user-info" && <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.files && "SMTH"}
                            </td>}

                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ReusableTable