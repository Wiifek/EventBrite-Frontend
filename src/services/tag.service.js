import axios from "axios";
import authHeader from "./auth_header";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const getAllTags = ()=>{
    return axios({
        method: 'get',
        url: `${BASE_URL}/tags/`,
        headers: authHeader()
      });
}

const addTag = ()=>{
    return axios({
        method: 'post',
        url: `${BASE_URL}/tags/addtag`,
        headers: authHeader()
      });
}

const getTagById = (id)=>{
    return axios({
        method: 'get',
        url: `${BASE_URL}/tags/${id}`,
        headers: authHeader()
      });
}

const editTag = (id)=>{
    return axios({
        method: 'put',
        url: `${BASE_URL}/tags/edittag/${id}`,
        headers: authHeader()
      });
}

const deleteTagById = (id)=>{
    return axios({
        method: 'delete',
        url: `${BASE_URL}/tags/deletetag/${id}`,
        headers: authHeader()
      });
}

export default {getAllTags, addTag, getTagById, editTag, deleteTagById}