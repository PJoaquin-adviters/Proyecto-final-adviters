import React, { useContext, useEffect, useState } from "react";
import HolidayCalendar from "../../components/HolidayCalendar/HolidayCalendar";
import Typography from "@mui/material/Typography";
import HolidayList from "../../components/HolidayList/HolidayList";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./CalendarPage.css";
import NewHolidayModal from "../../components/NewHolidayModal/NewHolidayModal";
import Loading from "../../components/Loading/Loading";
import UserDataContext from "../../context/UserDataContext";
import CalendarService from "../../services/CalendarService";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CalendarPage = () => {
  const [deleteDialog, setDeleteDialog] = useState({});
  const [holidays, setHolidays] = useState(null);
  const { dataUser, setAppTitle } = useContext(UserDataContext);
  setAppTitle("CALENDARIO")

  useEffect(() => {
    getHolidays();
  }, []);

  const getHolidays = async () => {
    try {
      const { data } = await CalendarService.getHolidays();
      setHolidays(data);
    } catch (e) {
      console.log(e);
      toast.error("¡Lo sentimos, ocurrió un error :(!")
    }
  };

  const deleteHoliday = (holiday) => {
    setDeleteDialog({
      open: true,
      holidayId: holiday.id,
      descripcion: holiday.descripcion,
    });
  }

  const confirmDeleteHoliday = async () => {
    const holidayId = deleteDialog.holidayId;

    setDeleteDialog({});

    try {
      await CalendarService.deleteHoliday(holidayId);
      setHolidays(holidays.filter(item => item.id != holidayId))
      toast.success("Feriado eliminado correctamente.");
    } catch (e) {
      console.log(e);
      const message = e.response.data?.message || "No se pudo eliminar el feriado. Intente nuevamente.";
      toast.error(message);
    }
  };

  return (
    <>
      {!holidays ? (
        <Loading />
      ) : (
        <section className="calendar-page">
          <div className="calendar-page-section-container">
            <Typography variant="h3" color="initial">
              Calendario
            </Typography>
            <HolidayCalendar holidays={holidays} />
          </div>
          <div className="calendar-page-section-container list-calendar">
            <div className="calendar-section-title-container">
              <Typography variant="h3" color="initial">
                Feriados
              </Typography>
              {dataUser.idRol == 0 && (
                      <NewHolidayModal holidays={holidays} setHolidays={setHolidays}/>
              )}
            </div>
            <HolidayList>
              {holidays.map((holiday, index) => (
                <ListItem key={`holiday-${index}`} divider={true}>
                  <ListItemText
                    primary={
                      <div className="feriadoListItemConDelete">

                        <Typography
                          sx={{width: '100%'}}
                          component="span"
                          variant="h5"
                          color="text.primary"
                        >
                          {holiday.date} - {holiday.descripcion}
                        </Typography>

                        {dataUser.idRol == 0 && (
                <>
                      <button
                          className="buttonDelete"
                          onClick={() => deleteHoliday(holiday)}
                          >
                        <DeleteIcon sx={{ color: "#ff7b7b" }} />
                      </button>
                </>
              )}
                        
                        </div>
                    }
                  />
                </ListItem>
              ))}
            </HolidayList>
          </div>
        </section>
      )}
      <Dialog
        open={deleteDialog.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setDeleteDialog({})}
      >
        <DialogTitle>CONFIRMAR ELIMINACIÓN</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {`¿Seguro que desea eliminar el feriado "${deleteDialog.descripcion}" del sistema?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog({})}>CANCELAR</Button>
          <Button onClick={confirmDeleteHoliday}>ELIMINAR</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CalendarPage;
