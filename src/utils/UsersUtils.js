import UsersService from '../services/UsersService';

export const getUsersBySupervisor = (supervisor) => UsersService.getUsers(`supervisor=${supervisor}`)

export const getSupervisors = () => UsersService.getUsers(`role=supervisor`)

export const newUser = (data) => {

    const errors = [];
    
    const formatoFechaEsValido = (fecha) =>{
    
    return /^(?:(?:(?:0?[13578]|1[02])(\/)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(fecha);
    
    }
    
    
    
    
    if (data.name.length > 30) errors.push("El nombre debe contener menos que 30 carácteres");
    
    if (! /^[a-zA-Z]+$/.test(data.name)) errors.push("El nombre solo debe contener letras.");
    
        
    if (data.lastname.length > 30) errors.push("El apellido debe contener menos que 30 carácteres");
    
    if (! /^[a-zA-Z]+$/.test(data.lastname)) errors.push("El apellido solo debe contener letras.");
    
    
    
    
    //password no lo validamos
    
    if (data.dni.trim().length >= 9) errors.push("El dni debe tener 9 números.");
    
    if (! /^[0-9]+$/.test(data.dni)) errors.push("El dni debe contener solo números.");
    
    
    
    
    if (data.cuil.trim().length >= 12) errors.push("El cuil debe tener 12 números.");
    
    if (! /^[0-9]+$/.test(data.cuil)) errors.push("El cuil debe contener solo números.");
    
    
    
    
    if (data.password.trim().length > 0) errors.push("La contraseña no puede estar vacía.");
    
    
    
    
    if (! /^(?=[^@]{3,8}@)([\w.-][a-zA-Z0-9_]@(?=.{4,12}.[^.]$)[\w-][a-zA-Z0-9].[a-zA-Z][a-zA-Z][a-zA-Z])$/.test(data.email)) errors.push("El mail es inválido.");
    
    
    
    
    //telefono
    
    if (! /^[0-9]+$/.test(data.phone)) errors.push("El teléfono debe contener solo números.");
    
    if (data.phone.trim().length <= 16) errors.push("El teléfono no debe contener más que 16 carácteres.");
    
    //11 3627 3232 -> validar espacios y numeros
    
    
    
    
    //calle
    
    if (! /^[a-zA-Z0-9]+$/.test(data.street)) errors.push("La calle debe contener solo números y letras.");
    
    
    
    
    //numero de calle
    
    if (! /^[0-9]+$/.test(data.Street_number)) errors.push("El número de calle debe contener solo números.");
    
    if (data.Street_number.trim().length <= 6) errors.push("El número de calle debe contener 6 o menos números.");
    
    
    
    
    //ciudad
    
    if (! /^[a-zA-Z]+$/.test(data.town)) errors.push("La ciudad debe contener solo letras");
    
    if (! /^[a-zA-Z]+$/.test(data.country)) errors.push("El país debe contener solo letras");
    
    
    
    
    if(! formatoFechaEsValido(data.Birth_date)) errors.push("La fecha de cumpleaños no coincide con el formato correcto (dd/mm/aaaa, por ejemplo: 01/12/2000).");
    
    if(data.Birth_date.trim().length < 0) errors.push("La fecha de cumpleaños no puede estar vacía.");
    
    
    
    
    //role id
    
    if(data.Role_id.length <= 0) errors.push("Debe ingresar un rol para el usuario.");
    
    
    
    
    if(! formatoFechaEsValido(data.Start_working_date)) errors.push("La fecha de ingreso a la empresa no coincide con el formato correcto (dd/mm/aaaa, por ejemplo: 01/12/2000).");
    
    
    
    
    if (data.Vacation_days <0 ) errors.push("Los dias de vacaciones deben ser 0 o un numero mayor.");
    
    if (data.Vacation_days.trim().length >0 ) errors.push("Debe ingresar dias de vacaciones.");
    
    
    
    
    if (data.supervisor === null) errors.push("Debe seleccionar un supervisor para el usuario.");
    
    
    
    
    if(errors.length > 0) throw errors;
    
    //else return UsersService.newUser(data)
    
}
