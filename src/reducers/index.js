/*==================================================================*|
|*-----------------Reducer (contain state)--------------------------*|
|*==================================================================*/

import { Navigate } from "react-router";
import {GET_DATE, GET_TIME, INCREMENT_ERROR_COUNTER, SET_LOGIN, TOGGLE_BURGER_MENU, TOGGLE_CONTACT, TOGGLE_MENU, TOGGLE_PROJECT_EXPLORER, UNSET_LOGIN } from "../action";

const initialState = {
  loggedIn: false,
  time: "",
  date: "",
  menuToggled: false,
  projectExplorerToggled: false,
  contactToggled: false,
  errorCounter: 0,
  burgerMenuToggled: false,
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
          contactToggled: false,
        };
      case INCREMENT_ERROR_COUNTER:
        return {
          ...state,
          errorCounter: state.errorCounter < 100 ? state.errorCounter += 1 : <Navigate to="/" />,
        };
      case TOGGLE_CONTACT:
        return {
          ...state,
          contactToggled: !state.contactToggled,
          menuToggled: false,
          projectExplorerToggled: false,
        };
      case TOGGLE_BURGER_MENU:
        return {
          ...state,
          burgerMenuToggled: !state.burgerMenuToggled,
        };
    default:
      return state;
  }
};

export default reducer;