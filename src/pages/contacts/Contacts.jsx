import { nanoid } from "nanoid";
import { useEffect } from "react";
import  ContactForm  from "../../components/ContactForm/ContactForm"
import {ContactList} from "../../components/ContactList/ContactList"
import Filters from "../filter/Filters"
import scss from "./Contacts.module.scss"
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { addContacts, removeContacts, setFilter } from "redux/action"; 


export default function Contacts() {
const contacts = useSelector(getContacts)
const filter = useSelector(getFilter)
const dispatch = useDispatch()
  // const [contacts, setContacts] = useState(() => {
  //   const value = JSON.parse(localStorage.getItem("contacts"));
  //   return value ?? [];
  // });
  // const [filter, setFilter] = useState("");

  useEffect (() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]) 
  useEffect(() => {

    return () => {
      localStorage.removeItem("contacts")}
  }, [])

  const findID = nanoid();

 const onAddContacts = (data) => {
    if (duplicateContacts(data))
    return alert (`${data.name} is already in contact`)
const action = addContacts(data);
dispatch(action);
    // setContacts((prev) => {
    //   const newName = {
    //     id: nanoid(),
    //     ...data
    //   }
    //   return  [...prev, newName]
    // })
  };

const delContacts = (id) => {
  const action = removeContacts(id);
dispatch(action);
  // setContacts((prev) => {
  //   return prev.filter((item) => item.id !== id);
  // })
  };

const duplicateContacts = ({name}) => {
      const result = contacts.find((contact) => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase());
      return result;
  };

const  handleChange = (e) => {
    const {value} = e.target;
    dispatch(setFilter(value))
    // setFilter(value)
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
    <div  className={scss.phoneBook}>
      <div className={scss.contactForm}>
      <h2 className={scss.titlePhoneBook}>PhoneBook</h2>
        <ContactForm 
        onSubmit={onAddContacts} />
      </div>
      <div className={scss.contacts}>
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