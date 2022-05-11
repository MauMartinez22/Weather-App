import './App.css';
import WeatherApp from './components/WeatherApp.js';
import Mayo9 from './components/Mayo9.js'
import { useState } from 'react';




function App() {


    const[showMayo9, setShowMayo9 ] = useState(false)
    const[loading, setLoading] = useState(true)
  return (
    
    <div >
    <WeatherApp/>
      

    </div>
  );
}

export default App;
