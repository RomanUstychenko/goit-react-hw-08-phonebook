import { nanoid } from "nanoid";
import { Component } from "react";
import  ContactForm  from "./ContactForm/ContactForm"
import {ContactList} from "./ContactList/ContactList"
import Filters from "./Filters/Filters"
import css from "./Contacts.module.css"


export default class Contacts extends Component  {
  state = {
    contacts: [],
    filter: ''
  }

  findID = nanoid();
  addContacts = (data) => {
    if (this.duplicateContacts(data))
    return alert (`${data.name} is already in contact`)
    this.setState ((prev) => {
      const newName = {
        id: nanoid(),
        ...data
      }
      return {
        contacts: [...prev.contacts, newName]
      }
    })
  }
  delContacts = (id) => {
    this.setState ((prev) => {
      const newGroup = prev.contacts.filter((item) => item.id !== id);
      return {
        contacts: newGroup
      };
    })
  }
    duplicateContacts = ({name}) => {
      const { contacts } = this.state;
      const result = contacts.find((contact) => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase());
      return result;
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState( 
      {[name]: value}
   )
  }
  getFilteredContact () {
    const { contacts, filter } = this.state;
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
    }
      render () {
        const {findID, addContacts,  delContacts, handleChange} = this;
        const { filter } = this.state;
        const contacts = this.getFilteredContact();
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
                items={contacts}
                delContacts={delContacts} 
                />
              </div>
            </div>
            )
}
}