import { useState } from 'react';
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { login } from 'redux/auth/auth-operation';

export default function Login() {

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();
    const emailId = nanoid();
    const passwordId = nanoid();

    const handleChange = (event) => {
      const { name, value } = event.currentTarget;

      switch (name) {
          case 'email':
              setEmail(value);
              break;
          case 'password':
              setPassword(value);
              break;
          default:
              setEmail('');
              setPassword('');
      };
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login({ email: email, password: password }));
      setEmail('');
      setPassword('');
};
  return (
    <div>
<h1>Login Page</h1>
<form
onSubmit={handleSubmit}
>
       <div>
            {<label htmlFor={emailId}> Login </label>}
            <input 
            id={emailId} placeholder="Enter name" name="email" type="text" required onChange={handleChange} value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            // checked={checked}    className={fullClassName}  
             />
        </div>
        <div>
            {<label 
            htmlFor={passwordId}
            >Password </label>}
            <input 
            id={passwordId} placeholder="Enter password" name="password" type="password" required onChange={handleChange} value={password}
            // checked={checked}   className={fullClassName}  
             />
        </div>
        <button>Login</button>
       </form>
      
    </div>
  )
}
