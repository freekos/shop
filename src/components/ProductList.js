import React, { useEffect, useState } from 'react';

import { listMover } from "../components/helper/listMover";
import ProductCard from './UI/ProductCard';
import Arrow from "./../assets/img/arrow.png";

const ProductsList = ({ allProducts }) => {
  const [position, setPosition] = useState(0);
  const [products, setProducts] = useState([]);
  const size = 4;

  useEffect(() => {
    setProducts(allProducts.slice(position, position + size));

    return () => {
      setProducts([]);
    }
  }, [position, allProducts])

  return ( 
    <>
      <div 
        className='flex justify-center items-center mr-[15px] cursor-pointer rounded-full hover:bg-[#5F48A7]' 
        onClick={() => listMover(allProducts, setPosition, size, "prev")}
      >
        <img src={Arrow} alt='' className='rotate-180' />
      </div>

      {products.map(product => <ProductCard key={product.id} product={product} />)}

      <div 
        className='flex justify-center items-center ml-[15px] cursor-pointer rounded-full hover:bg-[#5F48A7]' 
        onClick={() => listMover(allProducts, setPosition, size, "next")}
      >
        <img src={Arrow} alt=''/>
      </div>
    </>
   );
}
 
export default ProductsList;