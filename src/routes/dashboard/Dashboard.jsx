import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FiLifeBuoy } from "react-icons/fi";
import { IoMdMore } from "react-icons/io";
import "./Dashboard.scss"

const Dashboard = () => {
  return (
    <div className='flex h-[100vh] max-w-[100vw] overflow-x-hidden'>
      <div className="py-[14px] px-[10px] flex-col flex gap-2 min-w-fit">
        <div className='flex gap-3 items-center'>
          <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="photo" className='w-[28px] aspect-square rounded-sm'/>
          <p className='whitespace-nowrap text-[1rem] font-[inter] font-[800]'>Umidjon Shamsutdinov</p>
          <IoMdMore/>
        </div>          
          <NavLink className={`flex items-center gap-3 py-[10px] px-[10px] duration-[0.5s] ${(({ isActive })=>{isActive ? "active" : ""})}`} to={"accounts"}><RxHamburgerMenu/> Accounts</NavLink>
          <NavLink className={`flex items-center gap-3 py-[10px] px-[10px] duration-[0.5s] ${(({ isActive })=>{isActive ? "active" : ""})}`} to={"user-info"}><MdOutlinePeopleAlt/> User Info</NavLink>
          <NavLink className={`flex items-center gap-3 py-[10px] px-[10px] duration-[0.5s] ${(({ isActive })=>{isActive ? "active" : ""})}`} to={"support"}><FiLifeBuoy/> Support</NavLink>
      </div>
      <Outlet/>
    </div>
  )
}

export default Dashboard