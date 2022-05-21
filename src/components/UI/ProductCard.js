import React from 'react';
import { Link } from "react-router-dom";

import { filterText } from "../helper/filterInfoText";

const ProductCard = ({ product:{ title, price, info, img } }) => {

  return ( 
    <div className='flex flex-col w-[250px] h-[240px] bg-[#5A3ABA] mx-[7px] rounded-xl py-[15px] px-[10px] shadow-md'>
      <div className='flex flex-row'>
        <img src={img} alt="" className='max-w-[90px]' />

        <div className='flex flex-col justify-center ml-[5px]'>
          <p className='w-fit h-fit text-[24px] text-white font-rubik'>{title}</p>

          <p className='w-fit h-fit text-[16px] text-white font-rubik'>Price: {price}</p>
        </div>
      </div>

      <div className='w-full h-[50px]'>
        <p className='text-[15px] text-white font-rubik'>Short-Information: {filterText(info, 25)}...</p>
      </div>

      <div className='flex justify-center items-end w-full h-full'>
        <Link to={`/detail/${title}`}>
          <button className='w-[130px] h-[40px] bg-[#8561F2] rounded-xl'>
            <p className='text-[15px] text-white font-rubik'>More</p>
          </button>
        </Link>
      </div>
    </div>
   );
}
 
export default ProductCard;