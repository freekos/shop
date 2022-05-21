import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../store/basketStore";

export const useDecrement = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user.isAuth);

  const decrement = (product, amount) => {
    if(isAuth) {
      if(amount > 0) {
        dispatch(removeProduct({...product, amount: amount - 1}))
      }
    }
  }

  return { decrement }
}