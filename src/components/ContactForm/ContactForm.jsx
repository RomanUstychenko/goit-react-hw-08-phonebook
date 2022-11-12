import { useState } from "react";
import { nanoid } from "nanoid";
import scss from "./ContactForm.module.scss"
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contacts-selector';
import { addContacts } from "redux/contacts/contacts-operation"; 

export default function ContactForm () {
  const contacts = useSelector(getFilteredContacts);
  
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  //  const [state, setState] = useState({
  //           name: '',
  //           phone: '',
  //  });

  const nameID = nanoid();
  const telID = nanoid();

  const handleChange = (e) => {
        // const {name, value} = e.target;
        const { name } = e.currentTarget;
        switch (name) {
          case 'name':
            setName(e.currentTarget.value);
            break;
          case 'phone':
            setPhone(e.currentTarget.value);
            break;
          default:
            break;
        }
        // setState((prev) => {
        //   return {
        //     ...prev,
        //     [name]: value,
        //   }
        // })
      };

  const handleSubmit = (e) => {
        e.preventDefault()

        const duplicateContacts = contacts.find(contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase());
      console.log(duplicateContacts)
        console.log(contacts)
          if (duplicateContacts) {
            alert (`${name} is already in contact`)
            return
          }
          else {
            dispatch(addContacts({ name, phone }));
            setName('');
            setPhone('');
          }
        


        
        // const {name, phone} = state;
        // onAddContacts({name, phone})
      };
      // const onAddContacts = (data) => {
      //   if (duplicateContacts(data)) {
      //     alert (`${data.name} is already in contact`)
      //     return
      //   }
      //   else {
      //     const action = addContacts(data);
      //     dispatch(action);
      //     setState ({
      //       name: '',
      //       phone: '',
      //     })
      //   }
      // };

    //   const duplicateContacts = ({name}) => {
    //     const result = contacts.find((contact) => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase());
    //     return result;
    // };

    // const handleSubmit = e => {
    //   e.preventDefault();
    //   const isExistContact = contacts.find(
    //     contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    //   );
    //   if (isExistContact) {
    //     toast.error(`${name} is already in contacts`);
    //     return;
    //   }
    //   dispatch(addContact({ name, number }));
    //   toast.success('Successfully added contact!');
    //   setName('');
    //   setNumber('');
    // };

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
          value={name} 
          onChange={handleChange} />
        </div>
        <div className={scss.formInput}>
          <label htmlFor={telID}>Phone</label>
          <input 
          className={scss.formInputTel}
          id={telID} 
          type="number" 
          name="phone" 
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={phone} 
          onChange={handleChange} 
          required/>
        </div>
        <button 
        className={scss.formBtn}
        type="submit">Add</button>
        </form>
        )
};