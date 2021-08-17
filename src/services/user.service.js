import axios from "axios";
import authHeader from "./auth_header";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const getAllUsers = ()=>{
    return axios({
        method: 'get',
        url: `${BASE_URL}/users/`,
        headers: authHeader()
      });
}

const getUserById = (id)=>{
    return axios({
        method: 'get',
        url: `${BASE_URL}/users/${id}`,
        headers: authHeader()
      });
}

const editUser = (id)=>{
    return axios({
        method: 'put',
        url: `${BASE_URL}/users/edituser/${id}`,
        headers: authHeader()
      });
}

const deleteUserById = (id)=>{
    return axios({
        method: 'delete',
        url: `${BASE_URL}/users/deleteuser/${id}`,
        headers: authHeader()
      });
}

const getUserTickets = (id)=>{
    return axios({
        method: 'get',
        url: `${BASE_URL}/users/showtickets/${id}`,
        headers: authHeader()
      });
}

const cancelUserTicket = (id, ticketId)=>{
    return axios({
        method: 'delete',
        url: `${BASE_URL}/users/cancelticket/${id}/${ticketId}`,
        headers: authHeader()
      });
}

export default {getAllUsers, getUserById, editUser, deleteUserById, getUserTickets, cancelUserTicket}