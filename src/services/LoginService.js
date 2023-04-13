import httpRequest from "./httpRequest";

//LOGIN
const auth = (username, password) => httpRequest.post('/auth', {username, password})

const methods = {
    auth
}

export default methods;