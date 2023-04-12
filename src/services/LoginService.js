import httpRequest from "./httpRequest";

//LOGIN
export const auth = (username, password) => httpRequest.post('/auth', {username, password})