import axios from "axios";
const url = 'https://article-nodejs-api.onrender.com/api/article'

export const getData = async () => {
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