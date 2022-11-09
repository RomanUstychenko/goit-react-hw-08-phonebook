import React from 'react'
import { nanoid } from "nanoid";

export default function Login() {
  const nameId = nanoid();
    const passwordId = nanoid();
  return (
    <div>
<h1>Login Page</h1>
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
            htmlFor={passwordId}
            >Password </label>}
            <input 
            id={passwordId} placeholder="Enter password" name="name" type="password" required="true"
            // checked={checked}  onChange={handleChange}  className={fullClassName}  value={name}   pattern={pattern}
             />
        </div>
       </form>
       <button>Login</button>
    </div>
  )
}
