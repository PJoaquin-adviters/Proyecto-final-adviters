import httpRequest from "./httpRequest";

//LOGIN
const auth = (username, password) => httpRequest.post('/auth', {username, password})

export default methods = {
    auth
}