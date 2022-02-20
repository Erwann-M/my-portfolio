import axios from "axios";
import { GET_WEATHER_INFO, saveWeatherInfo } from "../action";

const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5"
});

const apiMiddlewareWeather = (store) => (next) => (action) => {
  switch(action.type) {
    case GET_WEATHER_INFO:
      axiosInstance.get('/weather?lat=49.357&lon=2.247&appid=188de08062cfcd2f05064467da11f7dd&units=metric&lang=fr')
        .then((res) => {
          store.dispatch(saveWeatherInfo(res.data))
        })
        .catch((err) => {
          console.log(err);
        })
      next(action);
      break;

    default:
      next(action);
  }
}

export default apiMiddlewareWeather;