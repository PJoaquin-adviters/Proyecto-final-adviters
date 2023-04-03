import "./LoadingPageStyle.css"

const LoadingPage = () => {
    return(
        <div class="contenedor-icono">
        <img src= {require("./img/advitersLogo.png")} alt="icono de la empresa" id="icono-carga"/>
        <img src= {require("./img/advitersLogo2.png")} alt="titulo de la empresa" id="titulo"/>
        </div>
    )
}

export default LoadingPage;
