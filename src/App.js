import React, { useEffect } from 'react';
import { HashRouter } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import { Auth } from "./store/userStore";
import { initialStateReplacer } from './store/basketStore';

const App = () => {
    const isError = useSelector(state => state.error.isError);
    const dispatch = useDispatch();

    useEffect(() => {
        let userJson = sessionStorage.getItem('user');
        if(userJson) {
            let user = JSON.parse(userJson);
            dispatch(Auth(user.isAuth));
        }

        let basketJson = sessionStorage.getItem('basket');
        if(basketJson) {
            let basket = JSON.parse(basketJson);
            dispatch(initialStateReplacer(basket));
        }
    })

    return ( 
        <React.StrictMode>
            <HashRouter>
                {isError && <AppRouter />}
                {!isError && 
                <>
                    <NavBar />
                    <AppRouter />
                </>
                }
            </HashRouter>
        </React.StrictMode>
     );
}
 
export default App;
