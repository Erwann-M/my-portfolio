/*==================================================================*|
|*-----------------Reducer (contain state)--------------------------*|
|*==================================================================*/

import { Navigate } from "react-router";
import {GET_DATE, GET_TIME, INCREMENT_ERROR_COUNTER, SET_LOGIN, TOGGLE_ABOUT, TOGGLE_ABOUT_ME, TOGGLE_BURGER_MENU, TOGGLE_CONTACT, TOGGLE_EXPERIENCES, TOGGLE_HOBBY, TOGGLE_MENU, TOGGLE_PROJECT_EXPLORER, TOGGLE_STUDY, TOGGLE_TECH, TOGGLE_WORK, UNSET_LOGIN, TOGGLE_MAXIMIZE, TOGGLE_BROWSER, TOGGLE_NAVBAR_ARROW, TOGGLE_DEFENDER, TOGGLE_NETWORK_INFO, CHANGE_LUMINOSITY, CHANGE_SOUND, TOGGLE_WIFI, TOGGLE_BLUETOOTH, TOGGLE_FLY_MODE, TOGGLE_TRASH, TOGGLE_ERROR } from "../action";

const initialState = {
  loggedIn: false,
  time: "",
  date: "",

  menuToggled: false,
  projectExplorerToggled: false,
  contactToggled: false,
  burgerMenuToggled: false,
  aboutToggled: false,
  browserToggled: false,
  trashToggled: false,

  errorCounter: 0,
  errorToggled: false,

  aboutMeToggled: false,
  techToggled: false,
  studyToggled: false,
  workToggled: false,
  hobbyToggled: false,

  experiencesToggled: false,
  maximizeToggled: false,

  navbarArrowToggled: false,
  defenderToggled: false,
  networkInfoToggled: false,

  luminosityValue: 5,
  luminosity: 1,

  soundValue: 100,

  wifiToggled: true,
  bluetoothToggled: true,
  flyModeToggled: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_TIME:
      return {
        ...state,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
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
          browserToggled: false,
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
          browserToggled: false,
        };
      case TOGGLE_BURGER_MENU:
        return {
          ...state,
          burgerMenuToggled: !state.burgerMenuToggled,
        };
      case TOGGLE_BROWSER:
        return {
          ...state,
          browserToggled: !state.browserToggled,
          menuToggled: false,
          projectExplorerToggled: false,
          aboutToggled: false,
          maximizeToggled: false,
          contactToggled: false,
        };
      case TOGGLE_ABOUT:
        return {
          ...state,
          aboutToggled: !state.aboutToggled,
          menuToggled: false,
          projectExplorerToggled: false,
          contactToggled: false,
          maximizeToggled: false,
          browserToggled: false,

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
        };
      case TOGGLE_NAVBAR_ARROW:
        return {
          ...state,
          navbarArrowToggled: !state.navbarArrowToggled,
          networkInfoToggled: false,
        };
      case TOGGLE_DEFENDER:
        return {
          ...state,
          defenderToggled: !state.defenderToggled,
          navbarArrowToggled: false,
        };
      case TOGGLE_NETWORK_INFO:
        return {
          ...state,
          networkInfoToggled: !state.networkInfoToggled,
          navbarArrowToggled: false,
        };
      case CHANGE_LUMINOSITY:
        return {
          ...state,
          luminosityValue: action.value,
          luminosity: action.opacityValue,
        };
      case CHANGE_SOUND:
        return {
          ...state,
          soundValue: action.soundValue,
        };
      case TOGGLE_WIFI:
        return {
          ...state,
          wifiToggled: !state.wifiToggled,
        };
      case TOGGLE_BLUETOOTH:
        return {
          ...state,
          bluetoothToggled: !state.bluetoothToggled,
        };
      case TOGGLE_FLY_MODE:
        return {
          ...state,
          flyModeToggled: !state.flyModeToggled,
          wifiToggled: false,
          bluetoothToggled: false,
        };
      case TOGGLE_TRASH:
        return {
          ...state,
          trashToggled: !state.trashToggled,
          menuToggled: false,
          projectExplorerToggled: false,
          aboutToggled: false,
          maximizeToggled: false,
          contactToggled: false,
          browserToggled: false,
        };
      case TOGGLE_ERROR:
        return {
          ...state,
          errorToggled: !state.errorToggled
        };
    default:
      return state;
  }
};

export default reducer;