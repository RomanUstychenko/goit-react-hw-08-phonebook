import axios from "axios";

const instanceContacts = axios.create({
    baseURL: "https://63654cf6046eddf1baead718.mockapi.io/api/contacts",
    params: {
        _limit: 12,
    }
});

export const getContacts = async() => {
    const {data} = await instanceContacts.get("/");
    return data;
}

export const addContacts = async(data) => {
    const {data: result} = await instanceContacts.post("/", data);
    return result;
}

export const deleteContact = async(id) => {
    const {data} = await instanceContacts.delete(`/${id}`);
    return data;
}