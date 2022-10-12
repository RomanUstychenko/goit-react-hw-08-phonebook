import { nanoid } from "nanoid";
// import { Component } from "react";
import { useState, useEffect } from "react";
import  ContactForm  from "./ContactForm/ContactForm"
import {ContactList} from "./ContactList/ContactList"
import Filters from "./Filters/Filters"
import css from "./Contacts.module.css"


// import React from 'react'

export default function Contacts() {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect (() => {

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
    }
    )
    // this.setState ((prev) => {
    //   const newName = {
    //     id: nanoid(),
    //     ...data
    //   }
    //   return {
    //     contacts: [...prev.contacts, newName]
    //   }
    // }
    // )
  }
 const delContacts = (id) => {
  setContacts((prev) => {
    const newGroup = prev.filter((item) => item.id !== id);
    return {
       newGroup
    };
  })
    // this.setState ((prev) => {
    //   const newGroup = prev.contacts.filter((item) => item.id !== id);
    //   return {
    //     contacts: newGroup
    //   };
    // })
  }
   const duplicateContacts = ({name}) => {
      // const { contacts } = this.state;
      const result = contacts.find((contact) => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase());
      return result;
  }

const  handleChange = (e) => {
    const {value} = e.target;
    setFilter(value)
  //   this.setState( 
  //     {[name]: value}
  //  )
  }
 const getFilteredContact = () => {
    // const { contacts, filter } = this.state;
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

   
    // const { filter } = this.state;
    const filteredContacts = getFilteredContact();
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
        items={filteredContacts}
        delContacts={delContacts} 
        />
      </div>
    </div>
    )
}


// export default class Contacts extends Component  {
//   state = {
//     contacts: [],
//     filter: ''
//   }
//   componentDidMount () {
//     // console.log("didmount")
//     const contacts = JSON.parse(localStorage.getItem("contacts"));
//     if (contacts?.length) {
//       this.setState({contacts})
//     }
//   }

//   componentDidUpdate (prevProps, prevState) {
//     // console.log("compdid")
//     const {contacts} = this.state;
//     if (prevState.contacts !== contacts) {
//       // console.log("compdid")
//       localStorage.setItem("contacts", JSON.stringify(contacts));

//     }
//   }
//   componentWillUnmount() {
//     console.log("will")
//     localStorage.removeItem("contacts")
//   }

//   findID = nanoid();
//   addContacts = (data) => {
//     if (this.duplicateContacts(data))
//     return alert (`${data.name} is already in contact`)
//     this.setState ((prev) => {
//       const newName = {
//         id: nanoid(),
//         ...data
//       }
//       return {
//         contacts: [...prev.contacts, newName]
//       }
//     })
//   }
//   delContacts = (id) => {
//     this.setState ((prev) => {
//       const newGroup = prev.contacts.filter((item) => item.id !== id);
//       return {
//         contacts: newGroup
//       };
//     })
//   }
//     duplicateContacts = ({name}) => {
//       const { contacts } = this.state;
//       const result = contacts.find((contact) => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase());
//       return result;
//   }

//   handleChange = (e) => {
//     const {name, value} = e.target;
//     this.setState( 
//       {[name]: value}
//    )
//   }
//   getFilteredContact () {
//     const { contacts, filter } = this.state;
//     if (!filter) {
//       return contacts;
//     }
//         const normalizedFilter = filter.toLocaleLowerCase();
//         const filteredContact = contacts.filter(({name}) => {
//         const nornalizedName = name.toLocaleLowerCase();
//         const result = nornalizedName.includes(normalizedFilter);
//         return result;
//       })
//       return filteredContact;
//     }
//       render () {
//         const {findID, addContacts,  delContacts, handleChange} = this;
//         const { filter } = this.state;
//         const contacts = this.getFilteredContact();
//         return (
//             <div  className={css.phoneBook}>
//               <div className={css.contactForm}>
//               <h2 className={css.titlePhoneBook}>PhoneBook</h2>
//                 <ContactForm 
//                 onSubmit={addContacts} />
//               </div>
//               <div className={css.contacts}>
//               <h2>Contacts</h2>
//                 <Filters 
//                 findID={findID}
//                 filter={filter}
//                 handleChange={handleChange}
//                 />
//                 <ContactList 
//                 items={contacts}
//                 delContacts={delContacts} 
//                 />
//               </div>
//             </div>
//             )
// }
// }