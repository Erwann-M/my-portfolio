import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherInfo } from '../../action';
import './styles.scss';

const Weather = () => {

  const {weatherInfo} = useSelector(state => state);

  console.log(weatherInfo);

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getWeatherInfo())
    },[dispatch]
  );

  return(
    <div className="weather">
      <img className='weather__image' src={"http://openweathermap.org/img/w/" + weatherInfo.weather[0].icon + ".png"} alt="" />
      <div className="weather__info">
        <p className="weather__info__location">{weatherInfo.name}</p>
        <p className="weather__info__temp">{weatherInfo.main.temp} °C</p>
        <p className="weather__info__description">{weatherInfo.weather[0].description}</p>
      </div>
    </div>
  )
};

export default Weather;
