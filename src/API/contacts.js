// import axios from "axios";
import instance from "./auth";

// const instanceContacts = axios.create({
//     baseURL: "https://63654cf6046eddf1baead718.mockapi.io/api/contacts",
//     // params: {
//     //     _limit: 12,
//     // }
// });

// const instance = axios.create({
//     baseURL: 'https://connections-api.herokuapp.com',
//   });

// console.log(instance)

// export const signup = async (signupData) => {
//     const { data } = await instance.post("/users/signup", signupData);
//     instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
//     return data;
// }

// export const login = async (loginData) => {
//     const { data } = await instance.post("/users/login", loginData);
//     instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
//     return data;
// }



export const getContacts = async () => {
    const {data} = await instance.get('/contacts');
    console.log(data)
    return data;
}

export const addContacts = async (data) => {
    const {data: result} = await instance.post('/contacts', data);
    return result;
}

export const deleteContact = async (id) => {
    const {data} = await instance.delete(`/contacts/${id}`);
    return data;
}
// export const getContacts = async () => {
//     const { data } = await instance.get('/');
//     // console.log(data);
//     return data;
//   };
  
//   export const addContact = async data => {
//     const { data: result } = await instance.post('/', data);
//     return result;
//   };
  
//   export const removeContact = async id => {
//     const { data } = await instance.delete(`/${id}`);
//     return data;
//   };