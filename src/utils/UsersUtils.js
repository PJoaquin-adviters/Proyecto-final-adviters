import UsersService from "../services/UsersService";

export const newUser = (data) => {

    !data.name && (data.name = "")
    !data.lastname && (data.lastname = "")
    !data.password && (data.password = "")
    !data.rePassword && (data.rePassword = "")
    !data.mail && (data.mail = "")
    !data.phone && (data.phone = "")
    !data.floor && (data.floor = "")
    !data.apartment && (data.apartment = "")
    !data.street && (data.street = "")
    !data.street_number && (data.street_number = "")
    !data.postal_code && (data.postal_code = "")
    !data.tower && (data.tower = "")
    !data.town && (data.town = "")
    !data.state && (data.state = "")
    !data.country && (data.country = "")
    !data.Profile_picture && (data.Profile_picture = "")
    !data.role_id && (data.role_id = "")
    !data.birth_date && (data.birth_date = "")
    !data.start_working_date && (data.start_working_date = "")
    !data.dni && (data.dni = "")
    !data.vacation_days && (data.vacation_days = "")
    !data.study_days && (data.study_days = "")
    !data.supervisor && (data.supervisor = "")
    if (document.getElementById("switchRole").checked) data.role_id = 0;
    else data.role_id = 1;
  
  console.log(data);
  const errors = {
    
  };
  // const formatoFechaEsValido = (fecha) =>{
  // return /^(?:(?:(?:0?[13578]|1[02])(\/)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(fecha);
  // }

  const campoEstaVacio = (input) => {
    if (data[input].trim().length === 0) {
      return true;
    }
    return false;
  };

  const campoContieneNroDecimalONegativo = (input) => {
    // if (data[input] < 0) {
    //   return true;
    // } else if (data[input] != Math.floor(data[input])) {
    //   return true;
    // }
    return false;
  };

  if (campoEstaVacio("study_days")) errors.study_days = "No puede estar vacío."

  //nombre
  if (campoEstaVacio("name")) {
    errors.name = "El nombre no puede estar vacío.";
  } else if (data.name.length > 30 || data.name.length <= 1) {
    errors.name = "El nombre debe contener de 2 a 30 carácteres.";
  } else if (!/^[a-zA-Z]+$/.test(data.name))
    errors.name = "El nombre solo debe contener letras.";

  //apellido
  if (campoEstaVacio("lastname")) {
    errors.lastname = "El apellido no puede estar vacío.";
  } else if (data.lastname.length > 30 || data.lastname.length <= 1) {
    errors.lastname = "El apellido debe contener de 2 a 30 carácteres.";
  } else if (!/^[a-zA-Z]+$/.test(data.lastname)) {
    errors.lastname = "El apellido solo debe contener letras.";
  }

  //contraseña
  if (campoEstaVacio("password")) {
    errors.password = "Debe ingresar una contraseña.";
  }

  //repetición contraseña
  if (data.rePassword !== data.password)
    errors.rePassword = "Las contraseñas deben ser iguales entre sí.";

  //dni
  if (data.dni.trim().length !== 8) {
    errors.dni = "El dni debe tener 9 números.";
  } else if (campoContieneNroDecimalONegativo("dni")) {
    errors.dni = "Debe ingresar un número entero positivo.";
  }

  //email
  if (campoEstaVacio("mail")) {
    errors.mail = "Debes ingresar un email.";
  } 
  //else if (
  //   !/^(?=[^@]{3,8}@)([\w.-][a-zA-Z0-9_]@(?=.{4,12}.[^.]$)[\w-][a-zA-Z0-9].[a-zA-Z][a-zA-Z][a-zA-Z])$/.test(
  //     data.mail
  //   )
  // ) {
  //   errors.mail = "El mail es inválido.";
  // }

  //telefono
  if (data.phone.length < 10 || data.phone.length > 16) {
    errors.phone =
      "El teléfono debe contener de 10 a 16 carácteres, por ejemplo '1123452334'.";
  } else if (campoContieneNroDecimalONegativo("phone")) {
    errors.phone = "Debe ingresar un número entero positivo.";
  }

  //fecha nacimiento
  if (data.birth_date.length === 0) {
    errors.birth_date = "La fecha de nacimiento no puede estar vacía.";
  } else if (new Date(data.birth_date) > new Date()) {
    errors.birth_date =
      "La fecha de nacimiento no puede ser mayor a la actual.";
  }

  //dia ingreso a empresa
  if (data.start_working_date.length === 0) {
    errors.start_working_date = "La fecha de ingreso no puede estar vacía.";
  }

  //días de vacaciones
  if (data.vacation_days === null) {
    errors.vacation_days = "Debe ingresar días de vacaciones.";
  } else if (campoContieneNroDecimalONegativo("Vacation_days")) {
    errors.vacation_days =
      "Los dias de vacaciones deben ser un número entero y positivo.";
  }

  if (data.study_days === null) {
    errors.study_days = "Debe ingresar días de estudio.";
  } else if (campoContieneNroDecimalONegativo("study_days")) {
    errors.study_days =
      "Los dias de vacaciones deben ser un número entero y positivo.";
  }

  //supervisor
  if (data.supervisor === null)
    errors.supervisor = "Debe seleccionar un supervisor para el usuario.";

  if (Object.keys(errors).length > 0) {
    errors.isAnValidationError = true;
    throw errors
  }
  else return UsersService.newUser(data);
};
