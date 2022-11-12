import { nanoid } from "nanoid";
import useForm from 'components/hooks/useForm';
import PropTypes from "prop-types";

    const initialState = {
        email: "",
        password: "",
      };
    
    export default function LoginForm({onSubmit}) {

        const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});
        const {email, password} = state;

        const emailId = nanoid();
        const passwordId = nanoid();


      return (
        <div>
        <form onSubmit={handleSubmit}>
       <div>
            {<label htmlFor={emailId}> Login </label>}
            <input 
            id={emailId} placeholder="Enter name" name="email" type="text" required onChange={handleChange} value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
             />
        </div>
        <div>
            {<label htmlFor={passwordId}>Password </label>}
            <input 
            id={passwordId} placeholder="Enter password" name="password" type="password" required onChange={handleChange} value={password}
             />
        </div>
        <button>Login</button>
       </form>
       </div>
      )
    };

    LoginForm.defaultProps = {
        onSubmit: () => {}
      }
      
      LoginForm.propTypes = {
        onSubmit: PropTypes.func,
      }
    