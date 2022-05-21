import { useUserSessionStorage } from "./useUserSessionStorage";
import { removeAll } from "../store/basketStore";
import { useDispatch } from "react-redux";

export const useLogout = () => {
  const { update } = useUserSessionStorage();
  const dispatch = useDispatch();

  const logout = () => {
    let json = sessionStorage.getItem('user');
    if(json) {
      let user = JSON.parse(json);
      if(user.isAuth) {
        dispatch(removeAll())
        update({...user, isAuth: false}, false);
      }
    }
  }

  return { logout }
}