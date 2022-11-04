import { useState } from "react";
import Contacts from "../../pages/contacts/Contacts"

import React from 'react'

export default function App() {

  const [contactsOpen
    // , setContactsOpen
  ] = useState(true);

//  const delContacts = () => {
//   setContactsOpen((prev) => !prev)
//   };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* <button onClick={() => delContacts()}>{contactsOpen ? "видалити" : "додати"}</button> */}
     {contactsOpen && <Contacts 
      />}
    </div>
  )
};
