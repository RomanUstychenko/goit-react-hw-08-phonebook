import { useDispatch, 
  // useSelector
  } from "react-redux";
import { login } from 'redux/auth/auth-operation';
import scss from "./Login.module.scss"


// import { isLogin } from 'redux/auth/auth-selector';
// import { Navigate } from "react-router-dom";
import LoginForm from 'components/LoginForm/loginForm';

export default function Login () {
   

    const dispatch = useDispatch();
    // const isUserLogin = useSelector(isLogin);
  
    const onLogin = (data) => {
      console.log("login", data)
     console.log(Boolean(dispatch(login(data)))) 
      dispatch(login(data));
    }
  
    // if (isUserLogin) {
    //   return <Navigate to="/contacts" />
    // }



  return (
    <div className={scss.LoginPage}>
      <h1>Sign in please <br /> in your phonebook</h1>
      <LoginForm onSubmit={onLogin}/>
      
    </div>
  )
};


