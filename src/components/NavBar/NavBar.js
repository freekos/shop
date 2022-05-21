import React from 'react';
import { useSelector } from "react-redux";

import NavAuth from './NavAuth';
import NavNoAuth from './NavNoAuth';

const NavBar = () => {
  const isAuth = useSelector(state => state.user.isAuth);

  return ( 
    <div className='w-full h-full bg-[#684CBB]'>
      {isAuth === false 
        ?
        <NavNoAuth />
        :
        <NavAuth />
      }
    </div>
   );
}
 
export default NavBar;