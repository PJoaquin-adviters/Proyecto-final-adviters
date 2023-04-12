import { getUsers } from '../services/UsersService';

export const getUsersBySupervisor = (supervisor) => getUsers(`supervisor=${supervisor}`)

export const getSupervisors = () => getUsers(`role=supervisor`)
