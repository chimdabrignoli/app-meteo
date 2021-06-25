// Import React
import React from 'react';
import PropTypes from 'prop-types';
// Css's file
import './style.scss';
//Images
import chaud from '../../thermometre.svg';
import froid from '../../du-froid.svg';

const Weather = ({city, temperature}) => {

   const classToApply = temperature? 'meteo meteo-visible' : 'meteo meteo-hidden';
    
    return (
      <article className={classToApply}>
        <div className="meteo-container">
          <div className="meteo-infos">
            <h3 className="meteo-city">{city}</h3>
          </div>
          <p className="meteo-temperature">
            {temperature}°
          </p>
          { temperature && temperature>=15 ?
          (
            <p className='meteo-text'> 
              il fait chaud 
              <img src={chaud} alt='hot'/>
            </p>
          ) :
          (
            <p className='meteo-text'>
              il fait froid 
              <img src={froid} alt='cold'/>
        
            </p>)}
        </div>
      </article>
    )  
}

export default Weather;

Weather.propTypes = {
  city: PropTypes.string,
  temperature: PropTypes.number,
};

