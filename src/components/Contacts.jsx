import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import  ContactForm  from "./ContactForm/ContactForm"
import {ContactList} from "./ContactList/ContactList"
import Filters from "./Filters/Filters"
import css from "./Contacts.module.css"

export default function Contacts() {

  const [contacts, setContacts] = useState(() => {
    const value = JSON.parse(localStorage.getItem("contacts"));
    return value ?? [];
  });
  const [filter, setFilter] = useState("");

  useEffect (() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]) 
  useEffect(() => {
    return () => {localStorage.removeItem("contacts")}
  }, [])

  const findID = nanoid();

 const addContacts = (data) => {
    if (duplicateContacts(data))
    return alert (`${data.name} is already in contact`)

    setContacts((prev) => {
      const newName = {
        id: nanoid(),
        ...data
      }
      return  [...prev, newName]
    })
  };

const delContacts = (id) => {
  setContacts((prev) => {
    return prev.filter((item) => item.id !== id);
  })
  };

const duplicateContacts = ({name}) => {
      const result = contacts.find((contact) => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase());
      return result;
  };

const  handleChange = (e) => {
    const {value} = e.target;
    setFilter(value)
  };

 const getFilteredContact = () => {
    if (!filter) {
      return contacts;
    }
        const normalizedFilter = filter.toLocaleLowerCase();
        const filteredContact = contacts.filter(({name}) => {
        const nornalizedName = name.toLocaleLowerCase();
        const result = nornalizedName.includes(normalizedFilter);
        return result;
      })
      return filteredContact;
    };

  return (
    <div  className={css.phoneBook}>
      <div className={css.contactForm}>
      <h2 className={css.titlePhoneBook}>PhoneBook</h2>
        <ContactForm 
        onSubmit={addContacts} />
      </div>
      <div className={css.contacts}>
      <h2>Contacts</h2>
        <Filters 
        findID={findID}
        filter={filter}
        handleChange={handleChange}
        />
        <ContactList 
        items={getFilteredContact()}
        delContacts={delContacts} 
        />
      </div>
    </div>
    )
};