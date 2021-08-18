import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const getAllTags = ()=>{
    return axios({
        method: 'get',
        url: `${BASE_URL}/tags/`
      });
}

const addTag = ()=>{
    return axios({
        method: 'post',
        url: `${BASE_URL}/tags/addtag`
      });
}

const getTagById = (id)=>{
    return axios({
        method: 'get',
        url: `${BASE_URL}/tags/${id}`
      });
}

const editTag = (id)=>{
    return axios({
        method: 'put',
        url: `${BASE_URL}/tags/edittag/${id}`
      });
}

const deleteTagById = (id)=>{
    return axios({
        method: 'delete',
        url: `${BASE_URL}/tags/deletetag/${id}`
      });
}

export default {getAllTags, addTag, getTagById, editTag, deleteTagById}