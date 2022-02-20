/*==================================================================*|
|*-----------------Reducer (contain state)--------------------------*|
|*==================================================================*/

import { GET_DATE, GET_TIME, SAVE_WEATHER_INFO, SET_LOGIN, TOGGLE_MENU } from "../action";

const initialState = {
  loggedIn: true,
  time: "",
  date: "",
  menuToggled: false,
  weatherInfo: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_TIME:
      return {
        ...state,
        time: new Date().toLocaleTimeString(),
      };
    case GET_DATE:
      return {
        ...state,
        date: new Date().toLocaleDateString(),
      };
    case SET_LOGIN:
      return {
        ...state,
        loggedIn: true,
      };
    case TOGGLE_MENU:
      return {
        ...state,
        menuToggled: !state.menuToggled,
      };
    case SAVE_WEATHER_INFO:
      return {
        ...state,
        weatherInfo: action.weatherInfo,
      }
    default:
      return state;
  }
};

export default reducer;