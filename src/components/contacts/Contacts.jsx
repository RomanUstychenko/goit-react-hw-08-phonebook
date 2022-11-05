import { useEffect } from "react";
import  ContactForm  from "../ContactForm/ContactForm"
import {ContactList} from "../ContactList/ContactList"
import Filter from "../filter/Filter"
import scss from "./Contacts.module.scss"
import { useSelector } from "react-redux";
import { getContacts } from "redux/contacts/contacts-selector";


export default function Contacts() {
const contacts = useSelector(getContacts)

  useEffect (() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
    console.log(contacts)
  }, [contacts]);

  useEffect(() => {
    return () => {
      localStorage.removeItem("contacts")}
  }, [])

  return (
    <div  className={scss.phoneBook}>
      <div className={scss.contactForm}>
      <h2 className={scss.titlePhoneBook}>PhoneBook</h2>
        <ContactForm />
      </div>
      <div className={scss.contacts}>
      <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
    )
};