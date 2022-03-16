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