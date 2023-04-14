import UsersService from '../services/UsersService';

export const getUsersBySupervisor = (supervisor) => UsersService.getUsers(`supervisor=${supervisor}`)

export const getSupervisors = () => UsersService.getUsers(`role=supervisor`)

export const newUser = (data) => {

    const errors = {};

    //este chequeo de formato es al pedo
    const formatoFechaEsValido = (fecha) =>{   
    return /^(?:(?:(?:0?[13578]|1[02])(\/)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(fecha);
    }
       
    
    if(data.name.trim().length === 0){errors.name = "El nombre no puede estar vacío.";}
    else if (data.name.length > 30){errors.name = "El nombre debe contener menos que 30 carácteres.";} 
    else if (! /^[a-zA-Z]+$/.test(data.name)) errors.name = "El nombre solo debe contener letras.";
    
    if(data.lastname.trim().length === 0){errors.lastname = "El apellido no puede estar vacío.";}
    else if (data.lastname.length > 30){errors.lastname = "El apellido debe contener menos que 30 carácteres";}
    else if (! /^[a-zA-Z]+$/.test(data.lastname)){errors.lastname = "El apellido solo debe contener letras.";}
    
    if (data.rePassword !== data.password) errors.rePassword = "Las contraseñas deben ser iguales entre sí."
    
    if (data.dni.trim().length === 0){errors.dni = "El campo debe estar completo.";}    
    else if (data.dni.trim().length >= 9){errors.dni = "El dni debe tener 9 números.";}
    else if (! /^[0-9]+$/.test(data.dni)){errors.dni = "El dni debe contener solo números."};
    
    
    if (data.cuil.trim().length === 0){errors.cuil = "El campo debe estar completo.";}        
    else if (data.cuil.trim().length >= 12){errors.cuil= "El cuil debe tener 12 números.";}    
    else if (! /^[0-9]+$/.test(data.cuil)){errors.cuil= "El cuil debe contener solo números.";}
        

    if (data.password.trim().length === 0) errors.password = "El campo debe estar completo.";
    
    
    if (data.mail.trim().length === 0){errors.mail = "Debes ingresar un mail."}
    else if (! /^(?=[^@]{3,8}@)([\w.-][a-zA-Z0-9_]@(?=.{4,12}.[^.]$)[\w-][a-zA-Z0-9].[a-zA-Z][a-zA-Z][a-zA-Z])$/.test(data.email)){errors.email = "El mail es inválido.";} 
    
    //telefono
    
    if (data.phone.length === 0){errors.phone ="El campo debe estar completo.";}
    else if (data.phone.trim().length <= 16){errors.phone = "El teléfono no debe contener más que 16 carácteres.";}
    /////////11 3627 3232 -> validar espacios y numeros
    
    //calle
    if (data.street.length === 0){errors.street ="El campo debe estar completo.";}    
    else if (! /^[a-zA-Z0-9]+$/.test(data.street)){errors.street = "La calle debe contener solo números y letras.";} 
    
    
    //numero de calle
    if (data.Street_number === 0){errors.Street_number ="El campo debe estar completo.";}    
    else if (data.Street_number.trim().length <= 6){errors.Street_number = "El número de calle debe contener 6 o menos números.";} 

    //ciudad    
    if (data.town === 0){errors.town ="El campo debe estar completo."}
    else if (! /^[a-zA-Z]+$/.test(data.town)) errors.town ="La ciudad debe contener solo letras";


    if (data.country === 0){errors.country ="El campo debe estar completo."}
    else if (! /^[a-zA-Z]+$/.test(data.country)){errors.country ="El país debe contener solo letras"};
    
    
    if(data.Birth_date.length === 0){errors.Birth_date = "La fecha de cumpleaños no puede estar vacía."};  
    
    //role id
    if(data.Role_id.length === 0){errors.Role_id = "Debe ingresar un rol para el usuario."};
    

    if(data.Start_working_date.length === 0){errors.Birth_date = "La fecha de cumpleaños no puede estar vacía."};  
      
    
    if (data.Vacation_days <0 ) errors.Vacation_days ="Los dias de vacaciones deben ser 0 o un numero mayor.";
    else if (data.Vacation_days === 0 ) errors.Vacation_days= "Debe ingresar dias de vacaciones.";
    
    
    if (data.supervisor === null) errors.supervisor ="Debe seleccionar un supervisor para el usuario.";
    
    
    
    
    if( Object.keys(errors).length > 0) throw errors;
    
    //else return UsersService.newUser(data)
    
}
