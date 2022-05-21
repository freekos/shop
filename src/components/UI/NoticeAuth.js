import React from 'react';

const NoticeAuth = ({ notice }) => { 

  return ( 
    <div className='flex justify-start items-center w-[485px] h-full'>
      <p className='text-[14.3px] text-red-600 font-rubik'>Incorrectly entered:{notice}</p>
    </div>
   );
}
 
export default NoticeAuth;