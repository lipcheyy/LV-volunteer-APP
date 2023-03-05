import axios from "axios";
import router from "./router";
const api = axios.create();
//on request
api.interceptors.request.use(config => {

    if (localStorage.getItem('access_token')) {
        config.headers.authorization= `Bearer ${localStorage.getItem('access_token')}`
    }
    return config
}, error => {
    console.log('siu');
})
//endrequest

//on response
api.interceptors.response.use(config => {


    if (localStorage.getItem('access_token')) {

        config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`
    }
    return config
}, error => {
    if (error.response.data.message === 'Token has expired'){
        return axios.post('/api/auth/refresh',{},
            {
                headers:{
                    'authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            }
        )
            .then(res=>{
                localStorage.setItem('access_token',res.data.access_token)
                //console.log(res);
                error.config.headers.authorization = `Bearer ${res.data.access_token}`
                return api.request(error.config)

            })
    }
    console.log(localStorage.getItem('access_token'));
    console.log(error.response.data.message);
    if(error.response.status) {
        router.push({name: 'fruit.login'})
    }
})
export default api
