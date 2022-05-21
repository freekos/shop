import React, { useEffect, useState } from "react";
import { useLogout } from "../hooks/useLogout";

import Logo from "../assets/img/portfolioBig.png";

const UserProfile = () => {
  const [login, setLogin] = useState('Login');
  const [email, setEmail] = useState('email@mail.ru');
  const { logout } = useLogout();

  useEffect(() => {
    let json = sessionStorage.getItem('user');
    if(json) {
      let user = JSON.parse(json);
      if(user.isAuth) {
        setLogin(user.login);
        setEmail(user.email);
      }
    }
  }, [])

  return ( 
    <div className=' w-full h-full bg-[#5A3ABA] px-[10px] py-[20px] rounded-[20px] shadow-md'>
        <div className='flex flex-row justify-start items-center'>
          <div className='flex justify-center items-center w-[220px] h-[210px] bg-[#5234AE] rounded-[60px] ml-[35px]'>
            <img src={Logo} className='w-40' alt=''/>
          </div>
          
          <div className='w-fit h-fit ml-[40px]'>
            <p className='text-[32px] font-rubik w-fit h-fit'>{login}</p>

            <div className='flex flex-row justify-center items-center w-fit h-fit'>
              <p className='text-[17px] text-[#2F205A] font-rubik w-fit h-fit'>Email:</p>
              <p className='text-[16px] text-[#2F205A] font-rubik ml-1'>{email}</p>
            </div>

            <button 
              className='w-[130px] h-[40px] bg-[#8561F2] rounded-xl mt-[40px]'
              onClick={() => logout()}
            >
              <p className='text-[15px] text-white font-rubik'>Logout</p>
            </button>
          </div>

        </div>
      </div>
   );
}
 
export default UserProfile