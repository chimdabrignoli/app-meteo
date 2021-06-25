// React
import React, {useState, useEffect} from 'react';

// Components
import Form from './components/Form';
import Weather from './components/Weather';

import useFetchResults from './hooks/useFetchResults'

// Css's file
import './App.scss';

//mettre la clé de l'API dans .env (process.env.NODE_ENV)
const APIkey = '98b7465353d383f3d0f3bc4a284a48ae';
const APIUrl ='https://api.openweathermap.org';

const App  = () => {
  // state
  const [city, setCity]=useState('');
  
  // Hooks custom
  const {datas, errors, setUrl} =useFetchResults();  
  
  //functions
  useEffect(()=>{
    const cityName = datas.city;
    const temperature = datas.temperature;
    if(!cityName){
      return document.title=` Meteo du ${date()}`

    } else {
      return document.title = ` Meteo de ${cityName} ${temperature}°C`;
    }
  },[datas])

  // change className for background
  const classToApply = () => {
    if (!datas.temperature) {
      return 'App'
    } else {
      if(Math.round(datas.temperature) >= 15) {
        return 'App App-hot'
      }
      else return 'App App-cold'
    }
  }
  // function for the current date
  const date=()=> {
    const date = new Date();
    const month= date.toLocaleString('default', { month: 'long' })
    const today = date.getDate() + ' ' + month + ' ' + date.getFullYear()
    return today;
  } 

  return (
    <div className={classToApply()}>
      <header className='App-header'>
          <h1 className='App-header-title'> 
            Météo du {date()}
          </h1>
            <Form
              city={city}
              setCity={setCity}
              onSubmitForm={(city)=>{
                setUrl(`${APIUrl}/data/2.5/weather?q=${city},fr&appid=${APIkey}&units=metric`);
                setCity('');
              }
              }
            />
        
             <Weather
             
             city={datas.city}
             temperature={datas.temperature}
           />
            
           
           
      </header>
    </div>
  );
}

export default App;
