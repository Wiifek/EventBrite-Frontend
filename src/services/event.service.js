import axios from "axios";
import authHeader from "./auth_header";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const getAllEvents = ()=>{
    return axios({
        method: 'get',
        url: `${BASE_URL}/events/`,
        headers: authHeader()
      });
}

const addEvent = ()=>{
    return axios({
        method: 'post',
        url: `${BASE_URL}/events/addevent`,
        headers: authHeader()
      });
}

const getEventById = (id)=>{
    return axios({
        method: 'get',
        url: `${BASE_URL}/events/${id}`,
        headers: authHeader()
      });
}

const editEvent = (id)=>{
    return axios({
        method: 'put',
        url: `${BASE_URL}/events/editevent/${id}`,
        headers: authHeader()
      });
}

const deleteEventById = (id)=>{
    return axios({
        method: 'delete',
        url: `${BASE_URL}/events/deleteevent/${id}`,
        headers: authHeader()
      });
}

const addTagToEvent = (id, tagId)=>{
    return axios({
        method: 'put',
        url: `${BASE_URL}/events/addtag/${id}/${tagId}`,
        headers: authHeader()
      });
}

const deleteTagFromEvent = (id, tagId)=>{
    return axios({
        method: 'delete',
        url: `${BASE_URL}/events/removetag/${id}/${tagId}`,
        headers: authHeader()
      });
}

export default {getAllEvents, addEvent, getEventById, editEvent, deleteEventById, addTagToEvent, deleteTagFromEvent}