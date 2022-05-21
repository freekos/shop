import React from 'react';
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';

import { useIncrement } from "../hooks/useIncrement";
import { useDecrement } from "../hooks/useDecrement";
import { fullRemoveProduct } from '../store/basketStore';

const BasketCard = ({ product }) => {
  const { increment } = useIncrement();
  const { decrement } = useDecrement()
  const dispatch = useDispatch();
  
  return ( 
    <div className='flex flex-row justify-start items-center w-[80%] h-[90px] bg-[#5234AE] rounded-2xl mt-[15px] py-[7px] px-[20px]'>
      <img src={product.img} alt='' className='w-[60px]'/>

      <div className='flex flex-col'>
        <p className='text-[17px] text-white font-rubik'>{product.title}</p>
        <div className='flex flex-row'>
          <p className='text-[15px] text-white font-rubik'>Price:</p>
          <p className='text-[14px] text-white font-rubik ml-[5px] mt-[1px]'>{product.price}</p>
        </div>
      </div>

      <div className='flex flex-row justify-end items-center w-full h-full'>
        <button 
          className='w-[100px] h-[45px] bg-[#D63737] rounded-xl mr-3'
          onClick={() => dispatch(fullRemoveProduct(product))}
        >
          <p>Remove</p>
        </button>

        <Link to={`/detail/${product.title}`}>
          <button className='w-[80px] h-[45px] bg-[#8561F2] rounded-xl'>
            <p>More</p>
          </button>
        </Link>

        <button 
          className='flex justify-center items-center w-[45px] h-[45px] bg-[#542BD0] rounded-full mr-3 ml-3'
          onClick={() => increment(product, product.amount)}
        >
            <p className=' text-[25px] text-white'>+</p>
        </button>
        <button 
          className='flex justify-center items-center w-[45px] h-[45px] bg-[#542BD0] rounded-full'
          onClick={() => decrement(product, product.amount)}
        >
          <p className=' text-[25px] text-white'>-</p>
        </button>

        <div className='flex flex-col justify-center items-center w-fit h-full ml-[20px]'>
          <p className='text-[15px] text-white font-rubik'>Am-t</p>
          <p className='text-[14px] text-white font-rubik'>{product.amount}</p>
        </div>
      </div>
    </div>
   );
}
 
export default BasketCard;