import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../store/basketStore";

export const useIncrement = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user.isAuth);

  const increment = (product, amount) => {
    if(isAuth) {
      if(amount < 99) {
        dispatch(addProduct({...product, amount: amount + 1}))
      }
    }
  }

  return { increment }
}