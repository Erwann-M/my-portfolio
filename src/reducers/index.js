/*==================================================================*|
|*-----------------Reducer (contain state)--------------------------*|
|*==================================================================*/

import { GET_DATE, GET_TIME, SET_LOGIN } from "../action";

const initialState = {
  loggedIn: true,
  time: "",
  date: "",
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
    default:
      return state;
  }
};

export default reducer;