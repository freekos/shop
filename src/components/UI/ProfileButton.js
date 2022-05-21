import React from 'react';
import { Link } from 'react-router-dom'; 

import ProfileLogo from "../../assets/img/portfolio.png";
import { PROFILE_ROUTE } from '../../utils/consts';

const ProfileButton = () => {
  return ( 
    <>
      <Link to={PROFILE_ROUTE}>
          <div className='flex justify-center items-center w-[55px] h-[55px] rounded-full bg-[#5936C1] drop-shadow-md'>
            <img src={ProfileLogo} alt="Profile" className="w-7 h-7"></img>
          </div>
      </Link>
    </>
   );
}
 
export default ProfileButton;