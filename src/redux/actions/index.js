import axios from 'axios';

const url = 'http://api.tvmaze.com/';
export function getShows() {
  return dispatch => {
    axios.get(`${url}shows?page1`, { mode: 'cors' })
      .then(res => {
        const shows = res.data;
        dispatch({ type: 'GET_SHOWS', shows });
      });
  };
}

export function getShow(id) {
  return dispatch => {
    axios.get(`http://api.tvmaze.com/shows/${id}`, { mode: 'cors' })
      .then(res => {
        const show = res.data;
        dispatch({ type: 'VIEW_SHOW', show });
      });
  };
}

export const changeFilter = network => ({
  type: 'CHANGE_FILTER',
  network,
});
