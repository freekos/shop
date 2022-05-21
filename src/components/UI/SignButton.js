import React from 'react';
import { Link } from 'react-router-dom';

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';

const SignButton = ({ type }) => {
  const Sign = type === "Sign In";

  return ( 
    <>
      {Sign 
      ?
      <Link to={LOGIN_ROUTE} className='mr-[10px]'>
        <div className='flex justify-center items-center w-[80px] h-[50px] rounded-[100px] bg-[#5936C1] shadow-md'>
          <p>{type}</p>
        </div>
      </Link>
      :
      <Link to={REGISTRATION_ROUTE} className='mr-[10px]'>
        <div className='flex justify-center items-center w-[110px] h-[50px] rounded-[100px] bg-[#5936C1] shadow-md'>
          <p>{type}</p>
        </div>
      </Link>
      }
    </>
   );
}
 
export default SignButton;
