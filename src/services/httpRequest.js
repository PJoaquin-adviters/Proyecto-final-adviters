import axios from "axios";

const BASE_URL = "";

const httpRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: localStorage.getItem("token"),
      ContentType: 'Application/json'
    },
});

export default httpRequest;
    
