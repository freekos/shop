import React from 'react';
import { Link } from "react-router-dom";

import BasketLogo from "../../assets/img/basket.png";
import { BASKET_ROUTE } from '../../utils/consts';

const BasketButton = () => {
  return ( 
    <>
      <Link to={BASKET_ROUTE} className="mr-[10px]">
        <div className='flex justify-center items-center w-[55px] h-[55px] rounded-full bg-[#5936C1] drop-shadow-md'>
          <img src={BasketLogo} alt="Basket" className="w-7 h-7 mr-[3px]"></img>
        </div>
      </Link>
    </>
   );
}
 
export default BasketButton;