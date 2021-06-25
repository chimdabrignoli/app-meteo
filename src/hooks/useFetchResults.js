// Import react
import  {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

export default function useFetchResults (initialurl) {
    const [datas, setDatas]=useState('');  
    const [errors,setErrors]=useState(''); 
    const [url, setUrl]=useState(initialurl);
  
    useEffect(() => {
  
            axios ({
              url,
              method:'get',

            })
            .then((res)=>{
              const data = res.data;
              console.log ( 'data',res.data);
    
              setDatas ({
                city: data.name,
                temperature:Math.round(data.main.temp),
              })
              
            })
            .catch((err) => {
              setErrors(err);
             
              
            });
              
      }, [url]);
      return {datas, errors, setUrl};
}
useFetchResults.propTypes = {
  initialurl: PropTypes.string,
  
};
