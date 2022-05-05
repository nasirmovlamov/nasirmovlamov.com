import axios from "axios";
import {config, staticDataUrls} from "../config";

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  GET_DATA: 'GET_DATA'
};

export const parseJwt = (jwttoken) => {
  var base64Url = jwttoken.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

export const login = (data) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOGIN,
      data: data
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('persist:billy-root');
    localStorage.removeItem('token');
    localStorage.removeItem('permissions');
    dispatch({
      type: actionTypes.LOGOUT
    });
  };
};

export const getData = (key, id, patch) => {
  return async (dispatch, getState) => {
    if (getState().staticData[key].length === 0 || id) {
      let url = config.apiURL + staticDataUrls[key] + (id ? id : '') + (patch ? patch : '');
      await axios.get(url).then(res => {
        dispatch({
          type: actionTypes.GET_DATA,
          data: res.data.data ? res.data.data : res.data,
          key: key,
          id: id
        });
      });
    };
  };
};