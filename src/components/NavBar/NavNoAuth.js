import React from 'react';
import { useLocation } from 'react-router';

import SignButton from '../UI/SignButton';
import ProfileButton from '../UI/ProfileButton';
import MainButton from '../UI/MainButton';
import BasketButton from "../UI/BasketButton.js";
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';

const NavNoAuth = () => {
  const location = useLocation();
  const isMain = location.pathname === MAIN_ROUTE;
  const AuthPage = (location.pathname !== LOGIN_ROUTE) && (location.pathname !== REGISTRATION_ROUTE);

  return ( 
    <>
      {isMain === false 
        ?
        <div className='flex justify-between items-center max-w-7xl mx-auto bg-[#684CBB] px-12 py-[1.25rem]'>
          <MainButton/>
          <div className='flex flex-row justify-center items-center'>
            {AuthPage &&
              <>
                <SignButton type="Sign In"/>
                <SignButton type="Sign Up"/>
              </>
            }
            <BasketButton/>
            <ProfileButton />
          </div>
        </div>
        :
        <div className='flex justify-end items-center max-w-7xl mx-auto bg-[#684CBB] px-12 py-6'>
          <div className='flex flex-row justify-center items-center'>
            <SignButton type="Sign In"/>
            <SignButton type="Sign Up"/>
            <BasketButton/>
            <ProfileButton />
          </div>
        </div>
      }
    </>
   );
}
 
export default NavNoAuth;