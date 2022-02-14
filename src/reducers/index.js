import { GET_TIME } from "../action";

const initialState = {
  login: false,
  time: "",
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_TIME:
      return {
        ...state,
        time: new Date().toLocaleTimeString(),
      }
    default:
      return state;
  }
};

export default reducer;