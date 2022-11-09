import React from 'react'
import { nanoid } from "nanoid";



export default function Registration() {

  const nameId = nanoid();
    const emailId = nanoid();
    const passwordId = nanoid();
    // const {name, email, password} = state;

  //   const initialState = {
  //     name: "",
  //     email: "",
  //     password: "",
  // }

  return (
    <div>
       <h1>Registration</h1> 
       <form>
       <div>
            {<label 
            htmlFor={nameId}
            >Login </label>}
            <input 
            id={nameId} placeholder="Enter name" name="name" type="text" required="true"
            // checked={checked}  onChange={handleChange}  className={fullClassName}  value={name}   pattern={pattern}
             />
        </div>
        <div>
            {<label 
            htmlFor={emailId}
            >E-mail </label>}
            <input 
            id={emailId} placeholder="Enter email" name="email" type="email" required="true"
            // checked={checked}  onChange={handleChange}  className={fullClassName}  value={name}   pattern={pattern}
             />
        </div>
        <div>
            {<label 
            htmlFor={passwordId}
            >Password </label>}
            <input 
            id={passwordId} placeholder="Enter password" name="name" type="password" required="true"
            // checked={checked}  onChange={handleChange}  className={fullClassName}  value={name}   pattern={pattern}
             />
        </div>
       </form>
       <button>Registration</button>
       </div>
  )
}
