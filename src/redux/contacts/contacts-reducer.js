import { ADD_CONTACT, REMOVE_CONTACT } from "./contacts-types";
// import { ADD_CONTACT } from "./contacts-types";

const initialState = []

const contactReducer = (store = initialState, {type, payload}) => {

    switch (type) {
        case ADD_CONTACT:
            const newContacts = [...store.contacts, payload];
            return {...store, contacts: newContacts};

        case REMOVE_CONTACT:
            const result = store.contacts.filter((item) => item.id !== payload);
            return {...store, contacts: result};

        default:
            return store
    }
    

};

export default contactReducer