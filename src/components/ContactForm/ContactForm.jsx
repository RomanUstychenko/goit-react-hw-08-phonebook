import { useState } from "react";
import { nanoid } from "nanoid";
import scss from "./ContactForm.module.scss"
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selector';
import { addContact } from "redux/contacts/contacts-slice"; 


export default function ContactForm () {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

   const [state, setState] = useState({
            name: '',
            number: '',
   });

  const nameID = nanoid();
  const telID = nanoid();

  const handleChange = (e) => {
        const {name, value} = e.target;
        setState((prev) => {
          return {
            ...prev,
            [name]: value,
          }
        })
      };

  const handleSubmit = (e) => {
        e.preventDefault()

        const {name, number} = state;
        onAddContacts({name, number})
      };
      const onAddContacts = (data) => {
        console.log(data)
        if (duplicateContacts(data)) {
          alert (`${data.name} is already in contact`)
          return
        }
        else {
          const action = addContact(data);
          console.log(action)
          dispatch(action);
          setState ({
            name: '',
            number: '',
          })
        }
      };

      const duplicateContacts = ({name}) => {
        console.log(contacts)
        const result = contacts.find((contact) => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase());
        return result;
    };

      return ( 
        <form 
        className={scss.form}
        onSubmit={handleSubmit}>
        <div className={scss.formInput}>
          <label htmlFor={nameID}>Name</label>
          <input 
          className={scss.formInputName}
          id={nameID} 
          type="text" 
          name="name" 
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={state.name} 
          onChange={handleChange} />
        </div>
        <div className={scss.formInput}>
          <label htmlFor={telID}>Number</label>
          <input 
          className={scss.formInputTel}
          id={telID} 
          type="number" 
          name="number" 
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={state.number} 
          onChange={handleChange} 
          required/>
        </div>
        <button 
        className={scss.formBtn}
        type="submit">Add</button>
        </form>
        )
};
