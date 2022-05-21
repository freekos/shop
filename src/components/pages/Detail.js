import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useParams } from 'react-router';

import ProductsList from "../ProductList";
import ProductDetail from "../ProductDetail";
import { getProductDetail } from '../../actions/getProductDetail';

const Detail = () => {
  const [detail, setDetail] = useState({})
  const allProducts = useSelector(state => state.products)
  const { product } = useParams();

  useEffect(() => {
    setDetail(getProductDetail(allProducts, product))

    return () => {
      setDetail({});
    }
  }, [allProducts, product])

  return ( 
    <div className='w-full h-full'>
      {detail
        ?
        <ProductDetail info={detail} />
        :
        <div className='flex justify-center items-center w-full h-full'>
          <p>Hasn't Details</p>
        </div>
      }

      <div className='flex flex-row justify-center items-center w-full h-full my-[50px]'>
        <ProductsList
          allProducts={allProducts} 
        />
      </div>
    </div>
   );
}
 
export default Detail;