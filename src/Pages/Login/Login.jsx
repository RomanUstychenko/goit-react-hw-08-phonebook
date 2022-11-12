import { useDispatch, useSelector  } from "react-redux";
import { login } from 'redux/auth/auth-operation';


import { isLogin } from 'redux/auth/auth-selector';
import { Navigate } from "react-router-dom";
import LoginForm from 'components/LoginForm/loginForm';

export default function Login () {

  // const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
    
//     const dispatch = useDispatch();


//     const handleChange = (event) => {
//       const { name, value } = event.currentTarget;

//       switch (name) {
//           case 'email':
//               setEmail(value);
//               break;
//           case 'password':
//               setPassword(value);
//               break;
//           default:
//               setEmail('');
//               setPassword('');
//       };
//   };

//   const handleSubmit = (e) => {
//       e.preventDefault();
//       dispatch(login({ email: email, password: password }));
//       setEmail('');
//       setPassword('');
// };

/////////////////////////////////////////////////////
// import { useMemo } from "react";



// const LoginForm = ({onSubmit}) => {
   

    // const emailId = useMemo(()=> nanoid(), []);
    // const passwordId = useMemo(()=> nanoid(), []);

    

    const dispatch = useDispatch();
    const isUserLogin = useSelector(isLogin);
  
    const onLogin = (data) => {
      dispatch(login(data));
    }
  
    if (isUserLogin) {
      return <Navigate to="/contacts" />
    }



  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onSubmit={onLogin}/>
      
    </div>
  )
};


