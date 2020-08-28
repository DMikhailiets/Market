import axios from "axios"

axios.defaults.baseURL = 'http://45.143.93.37:5555/'
axios.defaults.headers = {
    'token': localStorage.token 
}

export default axios