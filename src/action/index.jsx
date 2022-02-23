/*==================================================================*|
|*---------------------------ACTIONS--------------------------------*|
|*==================================================================*/

export const GET_TIME = "GET_TIME";

export const getTime = () => ({
  type: GET_TIME,
});


export const SET_LOGIN = "SET_LOGIN";

export const setLogin = () => ({
  type: SET_LOGIN,
});


export const GET_DATE = "GET_DATE";

export const getDate = () => ({
  type: GET_DATE,  
});


export const TOGGLE_MENU = "TOGGLE_MENU";

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});


export const GET_WEATHER_INFO = "GET_WEATHER_INFO";

export const getWeatherInfo = () => ({
  type: GET_WEATHER_INFO,
});


export const SAVE_WEATHER_INFO = "SAVE_WEATHER_INFO";

export const saveWeatherInfo = (weatherInfo) => ({
  type: SAVE_WEATHER_INFO,
  weatherInfo,
});


export const UNSET_LOGIN = "UNSET_LOGIN";

export const unsetLogin = () => ({
  type: UNSET_LOGIN,
});