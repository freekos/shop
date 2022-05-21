import React from 'react';
import { Link } from "react-router-dom";

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const NoAuthModal = () => {
  return ( 
    <div className='flex justify-center items-center w-full h-full p-[150px]'>
      <div className='flex flex-col justify-start items-center w-[500px] h-[350px] bg-[#8561F2] rounded-3xl shadow-lg'>
        <p className='text-[20px] font-rubik mt-[35px]'>-----Sign Up-----</p>

        <Link to={REGISTRATION_ROUTE} className='mt-8'>
          <button className='flex justify-center items-center w-[250px] h-[45px] bg-[#5A3ABA] rounded-[15px] shadow-md'>
            <p className='text-[18px] font-rubik text-white'>Sign Up</p>
          </button>
        </Link>

        <p className='text-[20px] font-rubik mt-[35px]'>-----Sign In-----</p>

        <Link to={LOGIN_ROUTE} className='mt-8'>
          <button className='flex justify-center items-center w-[250px] h-[45px] bg-[#5A3ABA] rounded-[15px] shadow-md'>
            <p className='text-[18px] font-rubik text-white'>Sign In</p>
          </button>
        </Link>
      </div>
    </div>
   );
}
 
export default NoAuthModal;