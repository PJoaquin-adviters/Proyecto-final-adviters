import UsersService from '../services/UsersService';

export const getUsersBySupervisor = (supervisor) => UsersService.getUsers(`supervisor=${supervisor}`)

export const getSupervisors = () => UsersService.getUsers(`role=supervisor`)

export const newUser = (data) => {
    console.log(data)
    const errors = {};
    // const formatoFechaEsValido = (fecha) =>{   
    // return /^(?:(?:(?:0?[13578]|1[02])(\/)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(fecha);
    // }
    const campoEstaVacio = (input) => {
        if(data[input].trim().length === 0){
            return true;
        }
        return false;
    };
    const campoContieneNroDecimalONegativo = (input) => {
        if(data[input] < 0){
            return true;
        }else if (data[input] === Math.floor(data[input])){
            //cuando ingreso 20.5 en días de vacaciones hace algo raro y lo redondea a 18?
            return true;
        }
        return false;
    }
    
    if(campoEstaVacio("name")){errors.name = "El nombre no puede estar vacío.";}
    else if (data.name.length > 30){errors.name = "El nombre debe contener menos que 30 carácteres.";} 
    else if (! /^[a-zA-Z]+$/.test(data.name)) errors.name = "El nombre solo debe contener letras.";
    
    if(campoEstaVacio("lastname")){errors.lastname = "El apellido no puede estar vacío.";}
    else if (data.lastname.length > 30){errors.lastname = "El apellido debe contener menos que 30 carácteres";}
    else if (! /^[a-zA-Z]+$/.test(data.lastname)){errors.lastname = "El apellido solo debe contener letras.";}
    
    if(campoEstaVacio("password")){errors.password = "Debe ingresar una contraseña."}
    if (data.rePassword !== data.password) errors.rePassword = "Las contraseñas deben ser iguales entre sí."
    
    //cambio el lenght por comparacion con nro porque es un type number
    if (campoContieneNroDecimalONegativo("dni")){errors.dni = "Debe ingresar un número entero positivo.";}    
    else if (data.dni.trim().length >= 9){errors.dni = "El dni debe tener 9 números.";}
    else if (! /^[0-9]+$/.test(data.dni)){errors.dni = "El dni debe contener solo números."};
    
    
    if (campoContieneNroDecimalONegativo("cuil")){errors.cuil = "Debe ingresar un número entero positivo.";}    
    else if (data.cuil.trim().length >= 12){errors.cuil= "El cuil debe tener 12 números.";}    
    else if (! /^[0-9]+$/.test(data.cuil)){errors.cuil= "El cuil debe contener solo números.";}
            
    
    if (campoEstaVacio("mail")){errors.mail = "Debes ingresar un email."}
    else if (! /^(?=[^@]{3,8}@)([\w.-][a-zA-Z0-9_]@(?=.{4,12}.[^.]$)[\w-][a-zA-Z0-9].[a-zA-Z][a-zA-Z][a-zA-Z])$/.test(data.email)){errors.email = "El mail es inválido.";} 
    
    //telefono
    if (campoContieneNroDecimalONegativo("phone")){errors.phone = "Debe ingresar un número entero positivo.";}
    else if (data.phone.length === 0) {errors.phone = "Debe ingresar un número de teléfono.";}
    else if (data.phone.length <= 16){errors.phone = "El teléfono debe contener 16 carácteres.";}
    /////////11 3627 3232 -> validar espacios y numeros
    
    //calle
    if (campoEstaVacio("street")){errors.street ="El campo debe estar completo.";}    
    else if (! /^[a-zA-Z0-9]+$/.test(data.street)){errors.street = "La calle debe contener solo números y letras.";} 
    
    //numero de calle
    if (campoContieneNroDecimalONegativo("Street_number")){errors.Street_number ="El campo debe estar completo.";}    
    else if (data.Street_number.trim().length <= 6){errors.Street_number = "El número de calle debe contener de 0 a 6 números.";} 

    //ciudad    
    if (campoEstaVacio("town")){errors.town ="El campo debe estar completo."}
    else if (! /^[a-zA-Z]+$/.test(data.town)) errors.town ="La ciudad debe contener solo letras";

    if (campoEstaVacio("state")){errors.state ="El campo debe estar completo."}
    else if (! /^[a-zA-Z0-9]+$/.test(data.state)) errors.state ="La localidad debe contener solo letras y números";

    if (campoEstaVacio("country")){errors.country ="El campo debe estar completo."}
    else if (! /^[a-zA-Z]+$/.test(data.country)){errors.country ="El país debe contener solo letras"};
    
    
    if(data.Birth_date.length === 0){
        console.log(data.Birth_date)
        errors.Birth_date = "La fecha de nacimiento no puede estar vacía."}
    else if (data.Birth_date > new Date()){
        console.log(data.Birth_date)
        errors.Birth_date = "La fecha de nacimiento no puede ser mayor a la actual."};  
    
    if (campoEstaVacio("Postal_code")){errors.Postal_code ="El campo debe estar completo."}
    else if (! /^[a-zA-Z]{1}[0-9]{4}$/.test(data.Postal_code)){errors.Postal_code ="El código postal debe contener 1 letra y 4 números."};
   

    if(data.Start_working_date.length === 0){errors.Start_working_date = "La fecha de ingreso no puede estar vacía."};  
    
    if (data.Vacation_days === null){errors.Vacation_days = "Debe ingresar días de vacaciones."}
    else if (campoContieneNroDecimalONegativo("Vacation_days")) {errors.Vacation_days ="Los dias de vacaciones deben ser 0 o un numero mayor.";}
    
    
    if (data.supervisor === null) errors.supervisor ="Debe seleccionar un supervisor para el usuario.";
       
    
    if( Object.keys(errors).length > 0) throw errors;    
    // else return UsersService.newUser(data);
    
}
