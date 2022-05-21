import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

import { filterText } from './helper/filterInfoText';
import { useIncrement } from '../hooks/useIncrement';
import { useDecrement } from '../hooks/useDecrement';

const Card = ({ product }) => {
  const [amount, setAmount] = useState(0);
  const basket = useSelector(state => state.basket.basket);
  const basketProduct = basket[product.id];
  const { increment } = useIncrement();
  const { decrement } = useDecrement();

  useEffect(() => {
    if(basketProduct?.amount) {
      setAmount(basketProduct.amount);
    }else {
      setAmount(0);
    }

    return () => {
      setAmount(0);
    }
  }, [basketProduct])
  
  return ( 
    <div className='flex flex-col justify-between w-[380px] h-[360px] bg-[#5A3ABA] rounded-3xl shadow-md mt-7 mx-[7.3px]'>
        <div className='flex flex-row justify-center mt-6'>
          <div className='flex flex-col w-xl w-36'>
            <div className='text-[27px] font-rubik text-white mb-2'>{product.title}</div>
            <div className='text-[20px] font-rubik text-white mb-2'>Price: {product.price}</div>
            <div className='text-[18px] font-rubik text-white mb-1'>Information:</div>
            <div className='block text-[18px] font-rubik text-white'>{filterText(product.info, 15)}...</div>
          </div>

          <div className=' flex justify-center items-end w-[120px]'>
            <img src={product.img} alt="Img"/>
          </div>

          <div className='flex justify-center items-center w-[45px] h-[45px] bg-[#8A63FF]  rounded-2xl shadow-md' >
            <p className='text-2xl font-rubik text-white'>{amount}</p>
          </div>
        </div>

        <div className='flex flex-row justify-between mb-5'>
        <Link to={`/detail/${product.title}`} className='ml-5'>
          <button className='flex justify-center items-center w-[160px] h-[45px] bg-[#8561F2] rounded-[15px] shadow-md'>
            <p className='text-[19px] text-white'>Learn More</p>
          </button>
        </Link>

        <div className='flex flex-row mr-5'>
          <button 
            className='flex justify-center items-center w-[70px] h-[45px] bg-[#542BD0] rounded-[15px] shadow-md mr-3'
            onClick={() => increment(product, amount)}
          >
            <p className=' text-[25px] text-white'>+</p>
          </button>
          <button 
            className='flex justify-center items-center w-[70px] h-[45px] bg-[#542BD0] rounded-[15px] shadow-md'
            onClick={() => decrement(product, amount)}
          >
            <p className=' text-[25px] text-white'>-</p>
          </button>
        </div>
      </div>

    </div>
   );
}
 
export default Card;