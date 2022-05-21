import { useState } from "react";
import { useLocation } from "react-router";
import { LOGIN_ROUTE } from "../utils/consts";
import { useLoginAccCheck } from "./useLoginAccCheck";
import { useRegistrationAcc } from "./useRegistrationAcc";

const loginCheck = (login) => {
  return login === '';
}

const emailCheck = (email) => {
  let result = email.match(/@[a-z]+?\.(ru|com)$/g) || [];
  return result.length === 0;
}

const passwordCheck = (password) => {
  let upperCase = password.match(/[A-Z]/g) || [];
  return (upperCase.length === 0) || (password.length < 8) ? true : false;
}


export const useAuthCheck = () => {
  const [loginNotice, setLoginNotice] = useState(false);
  const [emailNotice, setEmailNotice] = useState(false);
  const [passwordNotice, setPasswordNotice] = useState(false);
  const location = useLocation();
  const LoginPage = location.pathname === LOGIN_ROUTE
  const { loginAccCheck } = useLoginAccCheck({setLoginNotice, setEmailNotice, setPasswordNotice});
  const { registrationAcc } = useRegistrationAcc({setLoginNotice, setEmailNotice, setPasswordNotice})
  
  const clearNotice = () => {
    setLoginNotice(false);
    setEmailNotice(false);
    setPasswordNotice(false);
  }

  const newVerification = (login, email, password) => {
    let loginResult = LoginPage ? false : loginCheck(login);
    let emailResult = emailCheck(email);
    let passwordResult = passwordCheck(password);

    if(!loginResult && !emailResult && !passwordResult) {

      if(LoginPage) {
        loginAccCheck(email, password);
      }else {
        registrationAcc(login, email, password)
      }

    }else {
      if(loginResult) {
        setLoginNotice("You need to write login");
      }
      if(emailResult) {
        setEmailNotice("Email for example should be like shop@mail.ru");
      }
      if(passwordResult) {
        setPasswordNotice("Password must have one capital letter and a total of 8 letters");
      }
    }
  }

  return { loginNotice, emailNotice, passwordNotice, newVerification, clearNotice }
}