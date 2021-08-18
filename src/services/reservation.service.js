import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const createReservation = (eventId)=>{
    return axios({
        method: 'get',
        url: `${BASE_URL}/bookTicket/${eventId}`
      });
}

export default {createReservation}