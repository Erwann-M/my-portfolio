/*==================================================================*|
|*-----------------Reducer (contain state)--------------------------*|
|*==================================================================*/

import { GET_DATE, GET_TIME, SET_LOGIN, TOGGLE_MENU, TOGGLE_PROJECT_EXPLORER, UNSET_LOGIN } from "../action";

const initialState = {
  loggedIn: true,
  time: "",
  date: "",
  menuToggled: false,
  projectExplorerToggled: true,
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
    case UNSET_LOGIN:
      return {
        ...state,
        loggedIn: false,
        menuToggled: false,
      };
      case TOGGLE_PROJECT_EXPLORER:
        return {
          ...state,
          projectExplorerToggled: !state.projectExplorerToggled,
          menuToggled: false,
        };
    default:
      return state;
  }
};

export default reducer;