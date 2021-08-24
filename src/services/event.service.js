import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const getAllEvents = ()=>{
    return axios({
        method: 'get',
        url: `${BASE_URL}/events/`
      });
}

const addEvent = (playload)=>{
    return axios({
        method: 'post',
        url: `${BASE_URL}/events/addevent`,
        data: playload
      });
}

const getEventById = (id)=>{
    return axios({
        method: 'get',
        url: `${BASE_URL}/events/${id}`
      });
}

const editEvent = (id, playload)=>{
    return axios({
        method: 'put',
        url: `${BASE_URL}/events/editevent/${id}`,
        data: playload
      });
}

const deleteEventById = (id)=>{
    return axios({
        method: 'delete',
        url: `${BASE_URL}/events/deleteevent/${id}`
      });
}

const addTagToEvent = (id, tagId)=>{
    return axios({
        method: 'put',
        url: `${BASE_URL}/events/addtag/${id}/${tagId}`
      });
}

const deleteTagFromEvent = (id, tagId)=>{
    return axios({
        method: 'delete',
        url: `${BASE_URL}/events/removetag/${id}/${tagId}`
      });
}

export default {getAllEvents, addEvent, getEventById, editEvent, deleteEventById, addTagToEvent, deleteTagFromEvent}