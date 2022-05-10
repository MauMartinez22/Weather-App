import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {

    const [location, setLocation] = useState({})
    
    
    useEffect(()=>{
          function success(pos) {
              var crd = pos.coords;
              axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=a14d34bf94c8afe1637ff1fb6a1f4506`)
                  .then (res => setLocation(res))
            }
            
            function error(err) {
              console.log("error");
            }
      
            navigator.geolocation.getCurrentPosition(success, error);
            console.log(location)
      },[])
    
      


    return (
        <div className='card'>
            <div className='banner'>
                <button ><i class="fa-solid fa-rotate"></i></button>
                <h3>{location.data.name} {location.data.sys.country}</h3> 
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <hr></hr>

            <div className='content'>
                <h1>{location.data.main?.temp}</h1>
                <h2>{location.data.weather?.[0].description}</h2>
                <h3>{location.data.main?.temp_max} / {location.data.main?.temp_min}</h3>
            </div>

            <hr></hr>

            <div className='sub-banner'>
                <h3>
                   presion {location.data.main?.pressure}
                </h3>
                
                <h3>
                  humedad {location.data.main?.humidity}
                </h3>

                <h3>
                  viento {location.data.wind.speed}
                </h3>


            </div>
        </div>

    );
};


export default Test;










