import { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css"
import env from "react-dotenv";
 

const Weather =  () => {
    const [weatherData, setWeatherData] = useState({});
    const key = env.KEY_CLIMA;
    useEffect(() => {

     async function fetchData(){
        try {
            const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=BsAs&APPIID=${key}`);
            console.log(data)
            setWeatherData(data)
            
        } catch (error) {
            console.log(error)
        }
     }

     fetchData()
        
        

    }, [])


    return(
        // componente aparte, f
        <div id="contenedor-clima">
            <h3>{weatherData.name}</h3>
            <p>{(weatherData.main?.temp - 273.15).toFixed(1)}</p>
            <img src={`http://openweathermap.org/img/w/${weatherData.weather[0]?.icon}.png`} alt="wicon" />
            <p>{ weatherData.weather[0]?.description}</p>
        </div> 
    )
    
}

export default Weather;

