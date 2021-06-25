import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import loupe from '../../loupe.svg';

const Form = ({onSubmitForm, city, setCity}) => {
  const myInput = useRef();
  useEffect(() => {
    myInput.current.focus();
  }, []);

  return (
    <div className='form'>
        <form
            onSubmit={((evt)=>{
                evt.preventDefault();
                onSubmitForm(city)
            })}>
            <div className='form-input'>
            <input
                ref={myInput}
                className='form-input-text'
                placeholder='Veuillez saisir une ville'
                type='text'
                name='city'
                value={city}
                onChange={((event)=>{
                    const value = event.target.value;
                    setCity(value);
                })}
            />
            <button
              className='form-input-button'
              type='submit'
            >
              <img src={loupe} alt='search'/>
            </button>  
            
            </div>
        </form>
    </div>
  )
}

export default Form;

Form.propTypes = {
  city: PropTypes.string.isRequired,
  onSubmitForm:PropTypes.func.isRequired,
  setCity:PropTypes.func.isRequired,
};

