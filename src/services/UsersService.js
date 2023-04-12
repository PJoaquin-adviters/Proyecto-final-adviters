import httpRequest from "./httpRequest";

//GET USERS LIST
export const getUsers = (queryParams) => httpRequest.get(`/users?${queryParams}`)

//CREATE NEW USER
export const newUser = (data) => httpRequest.post('/users/new', data)

//UPDATE USER DATA
export const updateUser = (userId, data) => httpRequest.put(`/users/${userId}`, data)

//DELETE USER
export const deleteUser = (userId) => httpRequest.delete(`/users/${userId}`)

//GET USER ROLES
export const getUserRoles = () => httpRequest.get('/users/roles')