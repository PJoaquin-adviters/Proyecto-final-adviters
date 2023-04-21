import React, { useContext, useEffect, useId, useState } from "react";
import Loading from "../../components/Loading/Loading";
import "./AdministrarUsuariosPage.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import NoUser from "../../assets/img/user-not-found.png";
import UserDataContext from "../../context/UserDataContext";
import { useNavigate } from "react-router-dom";
import UsersService from "../../services/UsersService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AdministrarUsuariosPage = () => {
  const [deleteDialog, setDeleteDialog] = useState({});

  const [userList, setUserList] = useState(null);
  const { dataUser, setAppTitle } = useContext(UserDataContext);
  setAppTitle("ADMINISTRAR USUARIOS");
  const redirect = useNavigate();

  const getData = async () => {
    try {
      const { data } = await UsersService.getUsersBySupervisor(dataUser.idUser);
      setUserList(data);
    } catch (e) {
      console.log(e);
      toast.error("¡Lo sentimos, ocurrió un error :(!");
    }
  };

  const editUser = (userId) => redirect(`/user?function=1&userId=${userId}`);

  const deleteUser = (user, index) => {
    setDeleteDialog({
      open: true,
      userId: user.id,
      username: user.name,
      userLastname: user.last_name,
      index,
    });
  };

  const confirmDeleteUser = async () => {
    const userId = deleteDialog.userId;

    setDeleteDialog({});

    try {
      await UsersService.deleteUser(userId);
      setUserList(userList.filter((item) => item.id != userId));
      toast.success("Usuario eliminado correctamente.");
    } catch (e) {
      console.log(e);
      toast.error("No se pudo eliminar el usuario. Intente nuevamente.");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="admUsuariosContainer">
      <ToastContainer />
      {!userList ? (
        <Loading />
      ) : (
        <div className="admucontainer">
          <div className="admuHeader">
            <h2>Usuarios Habilitados</h2>
            <Button
              variant="contained"
              color="success"
              onClick={() => redirect("/user?function=0")}
            >
              Crear Usuario
            </Button>
          </div>
          <div className="admuBody">
            <div className="admulista">
              {userList.map((usuario, index) => (
                <>
                  <div className="admuItem">
                    <div className="fstart">
                      <img
                        className="simagen"
                        src={usuario.img ? usuario.img : NoUser}
                        alt=""
                      />
                      <h3 className="tittlename">{`${usuario.name} ${usuario.last_name}`}</h3>
                    </div>
                    <h3 className="cargo">{usuario.role}</h3>
                    <div className="admuItemButtons">
                      <button
                        className="buttonedit"
                        onClick={() => editUser(usuario.id)}
                      >
                        <EditIcon sx={{ color: "gray" }} />
                      </button>
                      <button
                        className="buttonDelete"
                        onClick={() => deleteUser(usuario, index)}
                      >
                        <DeleteIcon sx={{ color: "#ff7b7b" }} />
                      </button>
                    </div>
                  </div>
                  {index + 1 != userList.length && (
                    <hr style={{ marginRight: "5px", marginLeft: "5px" }} />
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
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
            {`¿Seguro que desea eliminar a ${deleteDialog.username} ${deleteDialog.userLastname} del sistema?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog({})}>CANCELAR</Button>
          <Button onClick={confirmDeleteUser}>ELIMINAR</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdministrarUsuariosPage;
