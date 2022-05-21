import React from 'react';
import { useSelector } from "react-redux";

import UserProfile from "../UserProfile";
import ProductsList from '../ProductList';
import NoAuthModal from '../NoAuthModal';

const Profile = () => {
  const allProducts = useSelector(state => state.products);
  const isAuth = useSelector(state => state.user.isAuth);

  return (
    <>
      {isAuth
        ?
        <div className='w-full h-full'>
          <UserProfile />

          <div className='flex flex-row justify-center items-center w-full h-full my-[50px]'>
            <ProductsList
              allProducts={allProducts} 
            />
          </div>
        </div>
        :
        <NoAuthModal/>
      }
    </>
   );
}
 
export default Profile;