const initialState = {
  shows: [],
  show: {},
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SHOWS_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_SHOWS':
      return {
        ...state,
        loading: false,
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
