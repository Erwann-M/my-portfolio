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


export const UNSET_LOGIN = "UNSET_LOGIN";

export const unsetLogin = () => ({
  type: UNSET_LOGIN,
});

export const TOGGLE_PROJECT_EXPLORER = "TOGGLE_PROJECT_EXPLORER";

export const toggleProjectExplorer = () => ({
  type: TOGGLE_PROJECT_EXPLORER,
});

export const INCREMENT_ERROR_COUNTER = "INCREMENT_ERROR_COUNTER";

export const incrementErrorCounter = () => ({
  type: INCREMENT_ERROR_COUNTER,
});

export const TOGGLE_CONTACT = "TOGGLE_CONTACT";

export const toggleContact = () => ({
  type: TOGGLE_CONTACT,
});

export const TOGGLE_BURGER_MENU = "TOGGLE_BURGER_MENU";

export const toggleBurgerMenu = () => ({
  type: TOGGLE_BURGER_MENU,
});

export const TOGGLE_ABOUT = "TOGGLE_ABOUT";

export const toggleAbout = () => ({
  type: TOGGLE_ABOUT,
});

//============handle click of cards======================

export const TOGGLE_ABOUT_ME = "TOGGLE_ABOUT_ME";

export const toggleAboutMe = () => ({
  type: TOGGLE_ABOUT_ME,
});

export const TOGGLE_TECH = "TOGGLE_TECH";

export const toggleTech = () => ({
  type: TOGGLE_TECH,
});

export const TOGGLE_STUDY = "TOGGLE_STUDY";

export const toggleStudy = () => ({
  type: TOGGLE_STUDY,
});

export const TOGGLE_WORK = "TOGGLE_WORK";

export const toggleWork = () => ({
  type: TOGGLE_WORK,
});

export const TOGGLE_HOBBY = "TOGGLE_HOBBY";

export const toggleHobby = () => ({
  type: TOGGLE_HOBBY,
});

//========================================================

export const TOGGLE_EXPERIENCES = "TOGGLE_EXPERIENCES";

export const toggleExperiences = () => ({
  type: TOGGLE_EXPERIENCES,
});

export const TOGGLE_MAXIMIZE = "TOGGLE_MAXIMIZE";

export const toggleMaximize = () => ({
  type: TOGGLE_MAXIMIZE,
});

export const TOGGLE_BROWSER = "TOGGLE_BROWSER";

export const toggleBrowser = () => ({
  type: TOGGLE_BROWSER,
});

export const TOGGLE_NAVBAR_ARROW = "TOGGLE_NAVBAR_ARROW";

export const toggleNavbarArrow = () => ({
  type: TOGGLE_NAVBAR_ARROW,
});

export const TOGGLE_DEFENDER = "TOGGLE_DEFENDER";

export const toggleDefender = () => ({
  type: TOGGLE_DEFENDER,
});

export const TOGGLE_NETWORK_INFO = "TOGGLE_NETWORK_INFO";

export const toggleNetworkInfo = () => ({
  type: TOGGLE_NETWORK_INFO,
});

export const CHANGE_LUMINOSITY = "CHANGE_LUMINOSITY";

export const changeLuminosity = (value, opacityValue) => ({
  type: CHANGE_LUMINOSITY,
  value,
  opacityValue,
});

export const CHANGE_SOUND = "CHANGE_SOUND";

export const changeSound = (soundValue) => ({
  type: CHANGE_SOUND,
  soundValue
});

export const TOGGLE_WIFI = "TOGGLE_WIFI";

export const toggleWifi = () => ({
  type: TOGGLE_WIFI,
});

export const TOGGLE_BLUETOOTH = "TOGGLE_BLUETOOTH";

export const toggleBluetooth = () => ({
  type: TOGGLE_BLUETOOTH,
});

export const TOGGLE_FLY_MODE = "TOGGLE_FLY_MODE";

export const toggleFlyMode = () => ({
  type: TOGGLE_FLY_MODE,
});

export const TOGGLE_TRASH = "TOGGLE_TRASH";

export const toggleTrash = () => ({
  type: TOGGLE_TRASH,
});

export const TOGGLE_ERROR = "DISPLAY_ERROR";

export const toggleError = () => ({
  type: TOGGLE_ERROR,
});