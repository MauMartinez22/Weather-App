import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';





const Mayo9 = () => {
    
    const[api,SetApi] = useState({})
    
      useEffect(() =>{
        axios.get(`https://restcountries.com/v3.1/name/mau`)
            .then (res =>SetApi (res))
    
      },[])
      console.log(api)
    






    return (
        <div className='card'>
            <h1>{api.data?.[0].name?.common}</h1>
            <img src={api.data?.[0].flags.png}></img>
            <h2>Capital: {api.data?.[0].capital?.[0]}</h2>
        </div>
    );
};


export default Mayo9;