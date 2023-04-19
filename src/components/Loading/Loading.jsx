import "./Loading.css";

const Loading = () => {
  return (
    <div className="loadingContainer">
      <img
        src={require("./img/advitersLogo.png")}
        alt="icono de la empresa"
        id="loadingIcon"
      />
      <img
        src={require("./img/advitersLogo2.png")}
        alt="titulo de la empresa"
        id="loadingTitle"
      />
    </div>
  );
};

export default Loading;
