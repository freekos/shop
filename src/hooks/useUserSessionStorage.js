import { useDispatch } from "react-redux"
import { useNavigate } from "react-router";

import { Auth } from "../store/userStore";
import { MAIN_ROUTE } from "../utils/consts";

export const useUserSessionStorage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const update = (newUser, isAuth) => {
    let newJson = JSON.stringify(newUser);
    sessionStorage.setItem('user', newJson);
    dispatch(Auth(isAuth));
    navigate(MAIN_ROUTE);
  }

  return { update };
}