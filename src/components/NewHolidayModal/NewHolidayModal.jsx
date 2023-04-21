import { Button, TextField, Box, Modal, Typography } from "@mui/material";
import "../../Pages/CalendarPage/CalendarPage.css";
import { useState } from "react";
import CalendarService from '../../services/CalendarService'
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  width: "100%",
  minHeight: 250,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export default function NewHolidayModal({holidays, setHolidays}) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const saveNewHoliday = async () => {

    setError("");

    const date = document.getElementById("holidayDate").value;
    const descripcion = document.getElementById("holidayDescription").value;

    if (!date || !descripcion) return setError("Complete los campos.");

    try {

      const {data: {id}} = await CalendarService.newHoliday(date, descripcion)
      toast.success("El feriado se guardó correctamente.")
      setHolidays([...holidays, {
        id,
        date,
        descripcion
      }])
      setOpen(false)

    } catch (e) {

      console.log(e);
      const message = e.response.data?.message || "No se pudo guardar el feriado. Intente nuevamente.";
      toast.error(message);

    }
    

  }

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        NUEVO FERIADO
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            CREAR NUEVO FERIADO
          </Typography>
          <div className="modal-input-container">
              <TextField
                id="holidayDate"
                label="Fecha"
                type="date"
              />
              <TextField
                id="holidayDescription"
                label="Motivo"
                type="text"
              />
            </div>
            <p style={{color: 'red'}}>{error}</p>
            <div className="calendar-modal-btn-container">
              <Button variant="contained" color="error" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="contained" color="success" onClick={saveNewHoliday}>
                Confirmar
              </Button>
              </div>
        </Box>
      </Modal>
    </div>
  );
}
