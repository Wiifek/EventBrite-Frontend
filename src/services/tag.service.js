import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const getAllTags = ()=>{
    return axios({
        method: 'get',
        url: `${BASE_URL}/tags/`
      });
}

const addTag = (playload)=>{
    return axios({
        method: 'post',
        url: `${BASE_URL}/tags/addtag`,
        data: playload
      });
}

const getTagById = (id)=>{
    return axios({
        method: 'get',
        url: `${BASE_URL}/tags/${id}`
      });
}

const editTag = (id, playload)=>{
    return axios({
        method: 'put',
        url: `${BASE_URL}/tags/edittag/${id}`,
        data: playload
      });
}

const deleteTagById = (id)=>{
    return axios({
        method: 'delete',
        url: `${BASE_URL}/tags/deletetag/${id}`
      });
}

export default {getAllTags, addTag, getTagById, editTag, deleteTagById}