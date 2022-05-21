import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addProduct } from '../store/basketStore';

const ProductDetail = ({ info }) => {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch()

  return ( 
    <div className='flex flex-row w-full h-full bg-[#5A3ABA] rounded-[20px] py-4 px-3'>
      <div className='width-full ml-[10px] mr-[10px]'>
        <img src={info.img} alt=''/>
      </div>

      <div className='flex flex-col'>

        <p className='text-[27px] text-white font-rubik'>{info.title}</p>
        <div className='flex flex-row justify-start items-center'>
          <p className='text-[18px] text-white font-rubik'>Price:</p>
          <p className='text-[15px] text-white font-rubik mt-[2px] ml-1'>{info.price}</p>
        </div>

        <div 
          className='w-full h-full mt-5'
          onClick={() => isAuth && dispatch(addProduct({...info, amount: 1}))}
        >
          <button className='w-[130px] h-[40px] bg-[#542BD0] rounded-xl shadow-md'>
            <p className='text-[15px] text-white font-rubik'>Add to Basket</p>
          </button>
        </div>

        <div className='w-full h-full mt-16 mb-[20px]'>
          <p className='text-[18px] text-white font-rubik'>Information:</p>
          <p className='text-[15px] text-white font-rubik ml-1'>{info.info}</p>
        </div>
      </div>
    </div>
   );
}
 
export default ProductDetail;