import { useUserSessionStorage } from "./useUserSessionStorage";


export const useRegistrationAcc = ({ setEmailNotice }) => {
  const { update } = useUserSessionStorage();

  const registrationAcc = (login, email, password) => {
    let json = sessionStorage.getItem('user');
    if(json) {
      let user = JSON.parse(json);
      if(user.email === email && user.password === password) {
        setEmailNotice("This user with this Email already exists");
      }else {
        update({login, email, password, isAuth: true}, true);
      }
    }else {
      update({login, email, password, isAuth: true}, true);
    }
  }

  return { registrationAcc };
} 