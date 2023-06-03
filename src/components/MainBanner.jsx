import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { getData } from '../services/api/weatherApi';
import '../styles/sass/styles.css';
import { dataEnglish, dataSpanish } from '../utils/constants';
import axios from 'axios';
import Heading from './atoms/Heading';

const MainBanner = () => {

    //  Constants
    const today = new Date();
    const hours = today.getHours();

    //  Local states
    const [isNight, setIsNight] = useState(false);
    const [response, setResponse] = useState({});

    //  Global states
    const dark = useSelector(state => state.theme);
    const english = useSelector(state => state.lang);

    // List
    const dataItems = [
      { 
        content: english ? dataEnglish.temp : dataSpanish.temp,
        temp: response?.main?.temp
      },
      { 
        content: english ? dataEnglish.feelsLike : dataSpanish.feelsLike,
        temp: response?.main?.feels_like
      },
      { 
        content: english ? dataEnglish.clouds : dataSpanish.clouds,
        temp: response?.clouds?.all
      }
    ];

    useEffect(() => {
        if ((hours >= 18 && hours <= 24) || (hours <= 0 && hours < 6)) {
            setIsNight(true);
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
      const fetchData = async () => {
        const api_key = '0b79dea464b8f769b18696de8de31770';
        const base_url = `https://api.openweathermap.org/data/2.5/weather?q=Bogota&lang=es&appid=${ api_key }&units=metric`;
        
        const response = await axios.get(base_url);
        setResponse(response.data);
      }

      fetchData();
      // eslint-disable-next-line
    }, [])

    return (
    <>
        <section className={dark && isNight ? "main-banner bg-night shadow-light" : dark && !isNight ? "main-banner bg-day shadow-light" : !dark && isNight ? "main-banner shadow-dark bg-night" : "main-banner shadow-dark bg-day"}>
            <div className="fade"></div>
            <Heading
              type='h2'
              className='title'
            >
              <i className="fas fa-map-marker-alt fa-2x m-05"></i>
              <span className="city">{english ? dataEnglish.bog : dataSpanish.bog }</span>
              <img 
                src={`https://openweathermap.org/img/w/${ response?.weather && response?.weather[0]?.icon }.png`} 
                alt="weather"
                className="" 
              />
            </Heading>
            <div className="data">
              {dataItems.map((item, index) => (
                <div className="data-item" key={index}>
                  <Heading 
                    type='h3' 
                    className="h5"
                  >
                    { item.content }
                  </Heading>
                  <span className="temp">{item.temp}{index !== 2 ? '℃' : '%'}</span>
                </div>
              ))}
            </div>
        </section>           
    </>
    )
}

export default MainBanner;
