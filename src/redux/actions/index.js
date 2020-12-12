import axios from 'axios'

const url = `http://api.tvmaze.com/`
export function getShows() {
  return (dispatch) => {
    axios.get(`${url}shows`, { mode: 'cors' })
      .then((res) => {
        let shows = res.data
        dispatch({ type: 'GET_SHOWS', shows })
        console.log('triggered')
      }).catch((err) => {
        console.log(err)
      })
  }
}

export function getShow(id) {
  return (dispatch) => {
    axios.get(`http://api.tvmaze.com/shows/${id}`, { mode: 'cors' })
      .then((res) => {
        let show = res.data
        dispatch({ type: 'VIEW_SHOW', show })
      }).catch((err) => console.log(err))
  }
}

export const changeFilter = network => ({
  type: 'CHANGE_FILTER',
  network,
});
