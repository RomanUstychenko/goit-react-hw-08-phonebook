import { useState } from 'react';
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { signup } from 'redux/auth/auth-operation';


export default function Registration() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameId = nanoid();
    const emailId = nanoid();
    const passwordId = nanoid();

  const dispatch = useDispatch();
  // const isUserLogin = useSelector(isLogin);

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
        case 'name':
            setName(value);
            break;
        case 'email':
            setEmail(value);
            break;
        case 'password':
            setPassword(value);
            break;
        default:
            setName('');
            setEmail('');
            setPassword('');
    };
};

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ name: name, email: email, password: password }));
    setName('');
    setEmail('');
    setPassword('');
};

  // const onRegister = (data) => {
  //   // data.preventDefault();
  //   dispatch(signup(data));
  // }

 

  return (
    <div>
       <h1>Registration</h1> 
       <form
       onSubmit={handleSubmit}>
       <div>
            {<label 
            htmlFor={nameId}
            >Login </label>}
            <input 
            id={nameId} placeholder="Enter name" name="name" type="text" required onChange={handleChange} value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // checked={checked}    className={fullClassName}  
             />
        </div>
        <div>
            {<label 
            htmlFor={emailId}
            >E-mail </label>}
            <input 
            id={emailId} placeholder="Enter email" name="email" type="email" required onChange={handleChange} value={email}
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
            // checked={checked}    className={fullClassName}
             />
        </div>
        <button>Registration</button>
       </form>
       
       </div>
  )
}
