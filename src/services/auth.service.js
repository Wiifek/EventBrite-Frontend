import axios from "axios";
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

export default {login, register, forgotPassword, resetPassword}