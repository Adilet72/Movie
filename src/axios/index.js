
import axios from "axios";

const instance = axios.create({
    baseURL: null,
    params: {
        api_key: null
    }
})

export default instance;