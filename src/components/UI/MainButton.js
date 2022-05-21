import React from 'react';
import { Link } from "react-router-dom";

import { MAIN_ROUTE } from '../../utils/consts';

const MainButton = () => {
  return ( 
    <>
      <Link to={MAIN_ROUTE}>
          <div className='font-rubikOne text-4xl text-white'>Shop</div>
      </Link>
    </>
   );
}
 
export default MainButton;