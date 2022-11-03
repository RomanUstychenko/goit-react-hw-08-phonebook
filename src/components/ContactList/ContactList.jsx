import PropTypes from 'prop-types'
import scss from "./ContactList.module.scss"
import { removeContact } from 'redux/contacts/contacts-slice'

 export const ContactList = ({items
    // , removeContact
}) => {
    return (
            <ul>
            {items.map(({name, number, id}) => (
            <li className={scss.contactList} key={id}> 
            <b>Name:</b>  {name} <br />
            <b className={scss.tel}>Tel:</b> {number} 
            <span className={scss.delContacts} onClick={() => removeContact(id)}>Delete</span></li>
    ))
    }
         </ul>)
         }

ContactList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })).isRequired,
        // removeContact: PropTypes.func.isRequired,
}