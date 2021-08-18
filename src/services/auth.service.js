import axios from "axios";
import jwt_decode from "jwt-decode";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const login = (playload)=>{
    return axios({
        method: 'post',
        url: `${BASE_URL}/login`,
        data: playload
      });
}

const register = (playload)=>{
    return axios({
        method: 'post',
        url: `${BASE_URL}/register`,
        data: playload
      });
}

const forgotPassword = (playload)=>{
    return axios({
        method: 'post',
        url: `${BASE_URL}/forgot-password`,
        data: playload
      });
}

const resetPassword = (playload, token)=>{
    return axios({
        method: 'post',
        url: `${BASE_URL}/reset-password/${token}`,
        data: playload
      })
}
const isExpired=(token)=>{
  const decoded = jwt_decode(token)
  if(!decoded)
    return false
  else {
    const currentDate = Date.now();
    const tokenDate = decoded.exp;
    if(tokenDate < currentDate) return true
    else return false;
  }
}
const isAuthentificated = ()=>{
  const token = localStorage.getItem('token')
  if(token)
    return isExpired(token)
  else return false
}

export default {login, register, forgotPassword, resetPassword, isAuthentificated}