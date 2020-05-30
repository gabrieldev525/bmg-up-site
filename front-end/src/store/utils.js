import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3333'

export const requests = {
  get(url, config, type) {
    return dispatch => axios
      .get(url, config)
      .then(response => {
        dispatch({
          type: type,
          payload: response.data
        })
        return response
      })
      .catch(error => {
        throw error
      })
  },

  post(url, data, config, type) {
    return dispatch => axios
      .post(`${url}`, data, config)
      .then(response => {
        dispatch({
          type: type,
          payload: response.data
        })
        return response
      })
      .catch(error => {
        throw error
      })
  },

  put(url, data, type) {
    return dispatch => axios
      .put(url, data)
      .then(response => {
        dispatch({
          type: type,
          payload: response.data
        })
        return response
      })
      .catch(error => {
        throw error
      })
  },

  patch(url, data, type) {
    return dispatch => axios
      .patch(url, data)
      .then(response => {
        dispatch({
          type: type,
          payload: response.data
        })
        return response
      })
      .catch(error => {
        throw error
      })
  },
}

