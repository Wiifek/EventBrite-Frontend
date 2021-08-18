import axios from "axios";
const responseInterceptor = axios.interceptors.response.use(
    response=>{
        return response
    },
    error=>{
        if(error.response.status === 401){
            //redirect to sign in & clear token
            localStorage.removeItem('token')
            window.location.replace("http://localhost:3000/#/sign-in")
        }
        if(error.response.status === 404){
            //redirect to 404
            window.location.replace("http://localhost:3000/#/404")
        }
        if(error.response.status === 500){
            //redirect to 500
            window.location.replace("http://localhost:3000/#/500")
        }
        return Promise.reject(error)
    }
)

export default responseInterceptor;