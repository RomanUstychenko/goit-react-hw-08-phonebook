import { Component } from "react";
import Contacts from "./Contacts"

export default class App extends Component  {
  state = {
    contactsOpen: true,
  }
  delContacts = () => {
    this.setState ((prev) => {
      return {
        contactsOpen: !prev.contactsOpen
      }
    })
  }
  render () {
    const {contactsOpen} = this.state
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <button onClick={() => this.delContacts()}>{contactsOpen ? "видалити" : "додати"}</button>
     {contactsOpen && <Contacts 
      />}
    </div>
  )
}
}
//  App;
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       <Contacts 
//       />
//     </div>
//   );
// };
