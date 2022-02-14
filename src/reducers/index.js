import { GET_TIME, SET_LOGIN } from "../action";

const initialState = {
  loggedIn: false,
  time: "",
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_TIME:
      return {
        ...state,
        time: new Date().toLocaleTimeString(),
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