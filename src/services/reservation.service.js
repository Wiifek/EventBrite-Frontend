import axios from "axios";
import authHeader from "./auth_header";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const createReservation = (eventId)=>{
    return axios({
        method: 'get',
        url: `${BASE_URL}/bookTicket/${eventId}`,
        headers: authHeader()
      });
}

export default {createReservation}