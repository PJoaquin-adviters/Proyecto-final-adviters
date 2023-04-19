import axios from "axios";

const BASE_URL = "http://172.12.50.59:8080/v1";

const httpRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: localStorage.getItem("Authorization"),
    ContentType: "Application/json",
  },
});

export default httpRequest;
