const initialState = {
  shows: [],
  show: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SHOWS':
      return {
        ...state,
        shows: action.shows,
      };
    case 'VIEW_SHOW':
      return {
        ...state,
        show: action.show,
      };
    default:
      return state;
  }
};
