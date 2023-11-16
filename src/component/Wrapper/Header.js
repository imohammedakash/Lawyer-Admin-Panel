import React from 'react'
import { useDispatch } from "react-redux";
import { logout } from '../../Redux/Actions/user';
import { toast } from 'react-toastify';
import { IoMdPerson } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { MdOutlineManageHistory } from "react-icons/md";
import { PiSignOut } from "react-icons/pi";
import { LiaSlidersHSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(logout())
    toast.success("Log out Successfully");
  };
  return (
    <div className='flex items-center justify-between p-2 border-b shadow'>
      <div className='flex items-center justify-start gap-5'>
        <div className='p-2 rounded-full border bg-[#0F2C64] text-white'>
          <IoMdPerson className='text-3xl' />
        </div>
        <div>
          <h4 className='m-0 font-semibold'>
            Mr Admin
          </h4>
          <span className='m-0'>Lorem Ipsum</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <div className='md:flex items-center justify-center hidden'>
          <div className='p-[7px] text-white bg-[#0F2C64]'>
            <CiSearch className='text-xl' />
          </div>
          <input placeholder='Search in Admin Panel..' className='border outline-none p-1 md:w-[20rem]' />
        </div>
        <div className="md:flex items-center justify-center flex-col hidden cursor-pointer">
          <div>
            <CiSettings className='text-xl' />
          </div>
          Setting
        </div>
        <div className="md:flex items-center justify-center flex-col hidden cursor-pointer">
          <div>
            <MdOutlineManageHistory className='text-xl' />
          </div>
          History
        </div>
        <div className="md:flex items-center justify-center flex-col hidden cursor-pointer">
          <div>
            <LiaSlidersHSolid className='text-xl' />
          </div>
          filter
        </div>
        <div onClick={handleLogOut} className="flex items-center justify-center flex-col cursor-pointer">
          <div>
            <PiSignOut className='text-xl' />
          </div>
          Logout
        </div>


      </div>
    </div>
  )
}

export default Header