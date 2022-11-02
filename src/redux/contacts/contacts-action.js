import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

export const addContacts = createAction("contacts/add", (data) => {
    return {
        payload: {
            ...data,
            id: nanoid()
        }
    }
})

// export const addContacts = payload => {
// return {
//     type: ADD_CONTACT,
//     payload: {
//         id: nanoid(),
//         ...payload
//     }
// }
// }
export const removeContacts = createAction("contacts/remove")
// export const removeContacts = payload => {
//     return {
//         type: REMOVE_CONTACT,
//         payload,
//     }
//     }