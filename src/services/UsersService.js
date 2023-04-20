import httpRequest from "./httpRequest";

//GET USERS LIST
const getUsers = (queryParams) =>
  httpRequest.get(`/users?${queryParams}`);

//CREATE NEW USER
const newUser = (data) => httpRequest.post("/users/new", data);

//UPDATE USER DATA
const updateUser = (userId, data) => httpRequest.put(`/users/${userId}`, data);

//DELETE USER
const deleteUser = (id) => httpRequest.delete(`/usuario`, {data: {id}});

//GET USER ROLES
const getUserRoles = () => httpRequest.get("/users/roles");

const getUserById = (id) => httpRequest.get(`/usuario/${id}`);

const getUsersBySupervisor = (id) => httpRequest.get(`/usuario/supervisor/${id}`)



const methods = {
  getUsers,
  newUser,
  updateUser,
  deleteUser,
  getUserRoles,
  getUserById,
  getUsersBySupervisor
};

export default methods;
