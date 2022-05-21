import React, { useRef } from 'react';

import { replacerType } from '../helper/replacerType';
import { VisibilityChanger } from "../helper/VisibilityChanger";
import Hide from "../../assets/img/hidden.png";
import NoticeAuth from './NoticeAuth';

const InputAuth = ({ pHolder, value, setValue, notice }) => {
  const imgRef = useRef(null);
  const passwordRef = useRef(null);
  const [ type ] = replacerType(pHolder);

  return (
    <>
      <div className='mt-3 w-[500px] h-[55px]'>
        {type === 'password' 
          ?
          <div className='w-full h-full relative cursor-pointer rounded-2xl'>
            <input 
            className='w-full h-full border-[2px] border-[#8561F2] rounded-2xl hover:border-[#5c33d6] focus:outline-none focus:ring-2 focus:ring-[#5c33d6] text-base font-rubik px-[20px] py-[10px]'
            placeholder={pHolder}
            type={type}
            value={value}
            ref={passwordRef}
            autoComplete='current-password'
            maxLength="32"
            size={32}
            onChange={(e) => setValue(e.target.value)}
            />
            <div className='w-fit h-fit absolute top-[27%] right-[3%]' onClick={() => VisibilityChanger(imgRef, passwordRef)}>
              <img 
                className='w-[25px] h-[25px]' 
                src={Hide} 
                ref={imgRef} 
                alt="" 
              />
            </div>
          </div>
          :
          <input 
          className='w-full h-full border-[2px] border-[#8561F2] rounded-2xl hover:border-[#5c33d6] focus:outline-none focus:ring-2 focus:ring-[#5c33d6] text-base font-rubik px-[20px] py-[10px]'
          placeholder={pHolder}
          type={type}
          value={value}
          autoComplete={type}
          onChange={(e) => setValue(e.target.value)}
          />
        }
      </div>
      {notice && <NoticeAuth notice={notice}/>}
    </>

  );
}
 
export default InputAuth;