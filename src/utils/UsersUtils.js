import UsersService from '../services/UsersService';

export const getUsersBySupervisor = (supervisor) => UsersService.getUsers(`supervisor=${supervisor}`)

export const getSupervisors = () => UsersService.getUsers(`role=supervisor`)

export const newUser = (data) => {

    const errors = [];
    if (data.name.length > 30) errors.push("El nombre debe contener menos que 30 carácteres");
    if (! /^[a-zA-Z]+$/.test(data.name)) errors.push("El nombre solo debe contener letras.")

    
    if (data.lastname.length > 30) errors.push("El nombre debe contener menos que 30 carácteres");
    if (! /^[a-zA-Z]+$/.test(data.lastname)) errors.push("El nombre solo debe contener letras.")

    if (errors.length > 0) throw new Error(errors)
    else return UsersService.newUser(data)
}
