import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import imgC from "../resorces/celsius.png"
import imgF from "../resorces/fahrenheit.png"


const WeatherApp = () => {
    const [location, setLocation] = useState({})
    const [isCelcius, setIsCelcius] = useState(true)
    const [tempCel, setTempCel] = useState(0)
    
    
    console.log(tempCel)
    
    
    


    
    useEffect(()=>{
    
        const success = (pos) => {
            var crd = pos.coords;
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=a14d34bf94c8afe1637ff1fb6a1f4506`)
            .then (res => {
                setLocation(res)
                setTempCel( Math.floor(res.data?.main?.temp) -273)
                console.log(res.data?.main?.temp)
            })
          }
          function error(err) {
              alert("Weather App Necesita acceso a tu ubicacion para continuar (DOXEO)")
            ;
          }
          navigator.geolocation.getCurrentPosition(success, error);

          
        },[])
        
        const unitChanger = () =>{
            if(isCelcius){
                setTempCel( Math.round((tempCel*1.8)+32))
                setIsCelcius(false)
                console.log("false celcius")
                
            }else{
                setTempCel(Math.round((tempCel-32)/1.8))
                setIsCelcius(true)
                console.log("true celcius")
            }
        }
        console.log(location)
        console.log(tempCel)
        
            
        

    return (

        
        <div className='card'>
            <div className='banner'>
                <button onClick={unitChanger} > {isCelcius? <img alt='' className='img-button' src={imgC}></img> : <img alt='' className='img-button' src={imgF}></img> } </button>
                <h3 className='title'>{location.data?.name} {location.data?.sys.country}</h3> 
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>



            <div className='content'>
                <img alt='' src={`http://openweathermap.org/img/wn/${location.data?.weather?.[0].icon}@2x.png`}></img>
                <h1>{tempCel} {isCelcius? "C°" : "F°"}</h1>
                <h2 className='contenth2'>{location.data?.weather?.[0].description} tes</h2>
                <h3 className='contenth'>{tempCel}{isCelcius? "C°" : "F°"} max  /  {tempCel}{isCelcius? "C°" : "F°"} min</h3>
            </div>

         

            <div className='sub-banner'>
                <div className='content-2'>
                    <h3 className='unid'>{location.data?.main?.pressure}MB</h3>
                    <h3>Presion</h3>
                </div>
                <div className='content-2'>
                    <h3 className='unid'>{location.data?.main?.humidity}%</h3>
                    <h3>Humedad</h3>
                </div>
                <div className='content-2'>
                    <h3 className='unid'> { Math.floor(location.data?.wind.speed)}MPH</h3>
                    <h3>Viento</h3>
                </div>


            </div>
        </div>
)}


export default WeatherApp;