import React from 'react';
import { useSelector } from 'react-redux';

import Card from "../Card";
import Burger from "../../assets/img/burger.png";
import HotDog from "../../assets/img/hot_dog.png";
import Drumstick from "../../assets/img/drumstick.png";

const Main = () => {
  const products = useSelector(state => state.products)

  return ( 
    <div className='mx-auto w-fit h-fit'>
      <div className='flex flex-row justify-end items-center w-full h-[65vh] relative'>
        <div className='absolute top-0 left-0 w-full h-full'>
          <p className='text-[100px] text-white font-rubikOne'>Shop</p>
        </div>

        <div className='absolute right-[5%] top-[10%] animate-animateHotDog'>
          <img src={HotDog} alt=''/>
        </div>

        <div className='absolute right-[20%] top-[30%] animate-animateBurger'>
          <img src={Burger} alt=''/>
        </div>

        <div className='absolute right-[35%] top-[10%] animate-animateDrumstick'>
          <img src={Drumstick} alt=''/>
        </div>
      </div>

      <div className='flex flex-wrap justify-start items-start m-max h-max'>
        {products.map(product => <Card key={product.id} product={product}/>)}
      </div>
    </div>
   );
}
 
export default Main;

//TODO: Card position when card more