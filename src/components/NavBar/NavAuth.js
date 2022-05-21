import React from 'react';
import { useLocation } from 'react-router-dom';

import MainButton from "../UI/MainButton";
import BasketButton from "../UI/BasketButton";
import ProfileButton from "../UI/ProfileButton";
import { MAIN_ROUTE } from "../../utils/consts";

const NavAuth = () => {
  const location = useLocation();
  const isMain = location.pathname === MAIN_ROUTE;

  return ( 
    <>
      {isMain === false 
        ?
        <div className='flex justify-between items-center max-w-7xl mx-auto bg-[#684CBB] px-12 py-[1.25rem]'>
          <MainButton/>
          <div className='flex flex-row justify-center items-center'>
            <BasketButton />
            <ProfileButton />
          </div>
        </div>
        :
        <div className='flex justify-end items-center max-w-7xl mx-auto bg-[#684CBB] px-12 py-6'>
          <div className='flex flex-row justify-center items-center'>
            <BasketButton />
            <ProfileButton />
          </div>
        </div>
      }
    </>
  );
}
 
export default NavAuth;