import axios from "axios";
// import { appCheck, getToken } from "../firebase";
const url = 'https://article-nodejs-api.onrender.com/api'

// const generateToken = async () => {
//     try {
//         const Token = await getToken(appCheck)
//         return Token
//     } catch (error) {
//         console.log(error)
//     }
// }

export const getData = async () => {
    // const token = await generateToken()
    return await axios.get(url + '/article')
}

export const readData = async (id) => {
    return await axios.get(url + '/article/' + id)
}

export const editData = async (id, data) => {
    return await axios.put(url + '/article/' + id, data)
}

export const removeData = async (id) => {
    await axios.delete(url + '/article/' + id)
}

export const addData = async (data) => {
    await axios.post(url + '/article', data)
}