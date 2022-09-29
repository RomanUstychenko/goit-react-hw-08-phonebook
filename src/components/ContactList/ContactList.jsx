import PropTypes from 'prop-types'
import css from "./ContactList.module.css"

 export const ContactList = ({items, delContacts}) => {
    return (
            <ul>
            {items.map(({name, number, id}) => (
            <li className={css.contactList} key={id}> 
            <b>Name:</b>  {name} <br />
            <b className={css.tel}>Tel:</b> {number} 
            <span className={css.delContacts} onClick={() => delContacts(id)}>Delete</span></li>
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
  delContacts: PropTypes.func.isRequired,
}