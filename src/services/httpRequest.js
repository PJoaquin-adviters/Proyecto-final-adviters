import axios from "axios";

const BASE_URL = "http://192.168.0.186:8080/v1";

const httpRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: localStorage.getItem("Authorization"),
    ContentType: "Application/json",
  },
});

export default httpRequest;
