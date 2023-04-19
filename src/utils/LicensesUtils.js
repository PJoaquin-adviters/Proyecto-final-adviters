import LicencesService from "../services/LicencesService";

export const newLicense = (data) => {
  const errors = {};

  const inputEstaVacio = (inputValor) => {
    if (inputValor?.length === 0) {
      return true;
    }
    return false;
  };

  const getTotalDiasLicencia = (fechaInicio, fechaFin) => {
    const diferenciaDiasMilisegundos = Math.abs(fechaInicio - fechaFin);
    const totalDiasLicencia = Math.ceil(
      diferenciaDiasMilisegundos / (1000 * 60 * 60 * 24)
    );
    return totalDiasLicencia;
  };

  //tipo de licencias
  if (inputEstaVacio(data.idLicenceType)) {
    errors.idLicenceType = "Debes ingresar un tipo de licencia.";
  }

  //fecha inicio
  if (inputEstaVacio(data.startDate)) {
    errors.startDate = "La fecha debe estar completa.";
  } else if (data.startDate > data.endDate) {
    errors.startDate =
      "La fecha de inicio de licencia debe ser mayor a la de finalización.";
  } else if (new Date(data.startDate) < new Date()) {
    errors.startDate = "La fecha de inicio de licencia no puede haber pasado.";
  }

  //fecha final
  if (inputEstaVacio(data.endDate)) {
    errors.endDate = "La fecha debe estar completa.";
  }

  console.log(errors);
  if (Object.keys(errors).length > 0) throw errors;

  return LicencesService.newLicence(data);
};
