import axios from "axios";
import authHeader from "./auth_header";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const getAllTickets = ()=>{
    return axios({
        method: 'get',
        url: `${BASE_URL}/tickets/`,
        headers: authHeader()
      });
}

const deleteTicketById = (id)=>{
    return axios({
        method: 'delete',
        url: `${BASE_URL}/tickets/deleteticket/${id}`,
        headers: authHeader()
      });
}

export default {getAllTickets, deleteTicketById}