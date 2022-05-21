import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';
import InputAuth from '../UI/InputAuth';
import { resetValues } from "../helper/resetAuthValues";
import { useAuthCheck } from '../../hooks/useAuthCheck';

const Auth = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {loginNotice, emailNotice, passwordNotice, newVerification, clearNotice} = useAuthCheck();
  const location = useLocation();
  const LoginPage = location.pathname === LOGIN_ROUTE;
  

  useEffect(() => {
    clearNotice();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login, email, password])

  return ( 
    <div className='flex flex-col justify-center items-center py-[130px]'>
      <div className='flex flex-col justify-center items-center'>
        <div className='text-4xl mb-[45px] font-rubik text-white' >{LoginPage ? "Sign In" : "Sign Up"}</div>
        {LoginPage 
          ?
          <>
            <InputAuth value={email} setValue={setEmail} pHolder="Email" notice={emailNotice}/>
            <InputAuth value={password} setValue={setPassword} pHolder="Password" notice={passwordNotice}/>
          </>
          :
          <>
            <InputAuth value={login} setValue={setLogin} pHolder="Login" notice={loginNotice}/>
            <InputAuth value={email} setValue={setEmail} pHolder="Email" notice={emailNotice}/>
            <InputAuth value={password} setValue={setPassword} pHolder="Password" notice={passwordNotice}/>
          </>
        }

        <div className='flex flex-row justify-between w-full h-full mt-3'>
          <div className='w-fit h-fit ml-[6px]' onClick={() => resetValues(setLogin, setEmail, setPassword) }>
            <NavLink to={LoginPage ? REGISTRATION_ROUTE : LOGIN_ROUTE}>
              <p className='text-[15px] text-white'>{LoginPage ? 'Sign Up' : 'Sign In'}</p>
            </NavLink>
          </div>

          <button
            className='flex justify-center items-center w-[110px] h-[45px] bg-[#8561F2] rounded-2xl shadow-md'
            onClick={() => newVerification(login, email, password)}
            >
            <p className='text-[17px] text-white'>{LoginPage ? 'Sign In' : 'Sign Up'}</p>
          </button>
        </div>
      </div>
    </div>
   );
}
 
export default Auth;