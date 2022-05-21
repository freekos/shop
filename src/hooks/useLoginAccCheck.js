import { useUserSessionStorage } from "./useUserSessionStorage";

export const useLoginAccCheck = ({ setEmailNotice, setPasswordNotice }) => {
  const { update } = useUserSessionStorage(); 

  const loginAccCheck = (email, password) => {
    let json = sessionStorage.getItem('user');
    if(json) {
      let user = JSON.parse(json);
      if(user.email === email && user.password === password) {
        update({...user, isAuth: true}, true);
      }else {
        setEmailNotice("You entered the data incorrectly");
        setPasswordNotice("You entered the data incorrectly")
      }
    }else {
      setEmailNotice("This user does not exist, Pls Sign Up");
    }
  }
  
  return { loginAccCheck };
}