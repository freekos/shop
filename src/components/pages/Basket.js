import React from 'react';
import { useSelector } from "react-redux";

import BasketImg from "../../assets/img/shopping-cart.png";
import BasketCard from '../BasketCard';
import NoAuthModal from '../NoAuthModal';

const Basket = () => {
  const basket = useSelector(state => state.basket.basket);
  const basketArr = Object.values(basket);
  const isAuth = useSelector(state => state.user.isAuth)

  return (
    <>
      {isAuth 
        ?
        <div className='w-full h-full bg-[#5A3ABA] rounded-lg py-[15px] px-[20px]'>
          <div className='flex flex-row justify-between items-center' >
            <div className='flex flex-row items-center'>
              <p className='text-[20px] text-white font-rubik'>Basket</p>
              <img src={BasketImg} alt=''/>
            </div>

            <div className='flex flex-row items-center'>
              <p className='text-[16px] text-white font-rubik'>Number of products:</p>
              <p className='text-[15px] text-white font-rubik ml-[10px] mt-[2px]'>{basketArr.length}</p>
            </div>
          </div>
          

          <div className='flex flex-col justify-start items-center mb-[60px] mt-[10px]'>
            {basketArr.length
            ?
              <>
                {basketArr.map(product => <BasketCard key={product.id} product={product} />)}
              </>
            :
              <p className='text-[17px] text-white font-rubik'>You need to select a product!</p>
            }
          </div>
        </div>
        :
        <NoAuthModal/>

      }
    </>
   );
}
 
export default Basket;