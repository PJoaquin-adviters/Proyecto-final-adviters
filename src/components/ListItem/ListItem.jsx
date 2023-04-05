import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import jordi from "../../assets/img/jordi2.jpg";
import rosa from "../../assets/img/rosa.png";

const ListItem = ({ data, displayIconos }) => {
  return (
    <div className="flex-container">
      <div className="flexPrincipalItem">
        <h1 className="titulo2">{data.userName}</h1>

        <span className="vacaciones">
          {data.startDate} {data.endDate}
        </span>
        <span>
          <img className="rosa" src={rosa} alt="" />
          <p className="vacas">{data.type}</p>
        </span>
        <img className="jordi" src={jordi} alt="imagenDeJordi" />
        <div className="flex-icons">
          {displayIconos && (
            <>
              <button className="icon">
                <CheckCircleIcon
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "30px",
                  }}
                  color="success"
                />
              </button>
              <button className="icon2 ">
                <CancelIcon
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "30px",
                  }}
                  color="error"
                />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
