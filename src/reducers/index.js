/*==================================================================*|
|*-----------------Reducer (contain state)--------------------------*|
|*==================================================================*/

import { Navigate } from "react-router";
import {GET_DATE, GET_TIME, INCREMENT_ERROR_COUNTER, SET_LOGIN, TOGGLE_ABOUT, TOGGLE_ABOUT_ME, TOGGLE_BURGER_MENU, TOGGLE_CONTACT, TOGGLE_EXPERIENCES, TOGGLE_HOBBY, TOGGLE_MENU, TOGGLE_PROJECT_EXPLORER, TOGGLE_STUDY, TOGGLE_TECH, TOGGLE_WORK, UNSET_LOGIN, TOGGLE_MAXIMIZE } from "../action";

const initialState = {
  loggedIn: true,
  time: "",
  date: "",

  menuToggled: false,
  projectExplorerToggled: false,
  contactToggled: false,
  burgerMenuToggled: false,
  aboutToggled: true,

  errorCounter: 0,

  aboutMeToggled: false,
  techToggled: false,
  studyToggled: false,
  workToggled: false,
  hobbyToggled: false,

  experiencesToggled: false,
  maximizeToggled: false,
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
          aboutToggled:false,
          maximizeToggled: false,
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
          aboutToggled:false,
          maximizeToggled: false,
        };
      case TOGGLE_BURGER_MENU:
        return {
          ...state,
          burgerMenuToggled: !state.burgerMenuToggled,
        };
      case TOGGLE_ABOUT:
        return {
          ...state,
          aboutToggled: !state.aboutToggled,
          menuToggled: false,
          projectExplorerToggled: false,
          contactToggled: false,
          maximizeToggled: false,

          aboutMeToggled: false,
          techToggled: false,
          studyToggled: false,
          workToggled: false,
          hobbyToggled: false,
        };
      case TOGGLE_ABOUT_ME:
        return {
          ...state,
          aboutMeToggled: !state.aboutMeToggled,
        };
      case TOGGLE_TECH:
        return {
          ...state,
          techToggled: !state.techToggled,
        };
      case TOGGLE_STUDY:
        return {
          ...state,
          studyToggled: !state.studyToggled,
        };
      case TOGGLE_WORK:
        return {
          ...state,
          workToggled: !state.workToggled,
        };
      case TOGGLE_HOBBY:
        return {
          ...state,
          hobbyToggled: !state.hobbyToggled,
        };
      case TOGGLE_EXPERIENCES:
        return {
          ...state,
          experiencesToggled: !state.experiencesToggled,
        };
      case TOGGLE_MAXIMIZE:
        return {
          ...state,
          maximizeToggled: !state.maximizeToggled,
        }
    default:
      return state;
  }
};

export default reducer;