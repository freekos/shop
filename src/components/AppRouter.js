import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import { publicRoutes } from "../routes";
import { MAIN_ROUTE } from '../utils/consts';

const AppRouter = () => {
  return (
    <div className='w-full h-full bg-[#684CBB]'>
      <div className='max-w-7xl min-h-[90.1vh] h-full mx-auto px-12 py-12'>
        <Routes>
          {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

          <Route path="*" element={<Navigate to={MAIN_ROUTE} />}/>
        </Routes>
      </div>
    </div>
  )
}

export default AppRouter;

//TODO: Page, Logic, Redux, Async Response