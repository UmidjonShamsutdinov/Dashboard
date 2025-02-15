import React from 'react'
import { useLocation, useParams } from 'react-router-dom';


const ReusableTable = ({data}) => {
    const tableHeaders = Object.keys(data[0])
    console.log(tableHeaders);
    console.log(location.pathname.split("/").sort((a,b)=> a + b));
    
    
    
    

    
  return (
    <div className='h-[100%] overflow-auto'>
        <table className=''>
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
                            <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.pinfl}
                            </td>
                            <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.auto_number}
                            </td>
                            <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.vin_code}
                            </td>
                            <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.car_type}
                            </td>
                            <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.car_model}
                            </td>
                            <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.client_id}
                            </td>
                            <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.bank_branch}
                            </td>
                            <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.gps_engineer_status}
                            </td>
                            <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.affirmative_status}
                            </td>
                            <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.legal_status}
                            </td>
                            <td className="border border-gray-200 font-[inter] text-black capitalize text-[1rem] px-[24px] py-[12px] font-[600] whitespace-nowrap text-start">
                                {user.files && "SMTH"}
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ReusableTable