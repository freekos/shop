import { MAIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, PROFILE_ROUTE, DETAIL_ROUTE, BASKET_ROUTE, ERROR_ROUTE } from "./utils/consts";
import Main from "./components/pages/Main";
import Auth from "./components/pages/Auth";
import Detail from "./components/pages//Detail";
import Basket from "./components/pages/Basket";
import Errors from "./components/pages/Errors";
import Profile from "./components/pages/Profile";

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: PROFILE_ROUTE,
    Component: Profile,
  },
  {
    path: DETAIL_ROUTE,
    Component: Detail,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
  {
    path: ERROR_ROUTE,
    Component: Errors,
  },
]