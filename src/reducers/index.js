const initialState = {
  login: false,
  time: new Date().toLocaleString()
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;