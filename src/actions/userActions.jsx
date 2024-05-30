// import axios from "axios";
// import {
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,
//   REGISTER_USER_SUCCESS,
//   REGISTER_USER_FAIL,
//   REGISTER_USER_REQUEST,
//   LOAD_USER_FAIL,
//   LOAD_USER_REQUEST,
//   LOAD_USER_SUCCESS,
//   UPDATE_PROFILE_FAIL,
//   UPDATE_PROFILE_REQUEST,
//   UPDATE_PROFILE_SUCCESS,
//   // UPDATE_PROFILE_RESET,
//   UPDATE_PASSWORD_FAIL,
//   UPDATE_PASSWORD_REQUEST,
//   // UPDATE_PASSWORD_RESET,
//   UPDATE_PASSWORD_SUCCESS,
//   FORGOT_PASSWORD_FAIL,
//   FORGOT_PASSWORD_REQUEST,
//   FORGOT_PASSWORD_SUCCESS,
//   NEW_PASSWORD_FAIL,
//   NEW_PASSWORD_REQUEST,
//   NEW_PASSWORD_SUCCESS,
//   LOGOUT_FAIL,
//   LOGOUT_SUCCESS,
//   CLEAR_ERRORS,
// } from "../constants/userConstant";

// // action for login
// export const login = (email, password) => async (dispatch) => {
//   try {
//     dispatch({ type: LOGIN_REQUEST });

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const { data } = await axios.post(
//       "${server}api/v1/users/login",
//       { email, password },
//       config
//     );
//     dispatch({ type: LOGIN_SUCCESS, payload: data.user });
//   } catch (error) {
//     dispatch({ type: LOGIN_FAIL, payload: "Login Failed" });
//   }
// };

// //register user actions

// export const register = (userData) => async (dispatch) => {
//   try {
//     dispatch({ type: REGISTER_USER_REQUEST });
//     const config = {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     };
//     const { data } = await axios.post("${server}api/v1/users/signup", userData, config);
//     dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
//     return data.data.user;
//   } catch (error) {
//     dispatch({
//       type: REGISTER_USER_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// //load user action

// export const loadUser = () => async (dispatch) => {
//   try {
//     dispatch({ type: LOAD_USER_REQUEST });
//     const { data } = await axios.get("${server}api/v1/users/me");
//     dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
//   } catch (error) {
//     dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
//   }
// };

// //update profile actions
// export const updateProfile = (userData) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_PROFILE_REQUEST });
//     const config = {
//       headers: { "Content-Type": "multipart/form-data" },
//     };
//     const { data } = await axios.put(
//       "${server}api/v1/users/me/update",
//       userData,
//       config
//     );
//     dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_PROFILE_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// //update password action

// export const updatePassword = (passwords) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_PASSWORD_REQUEST });
//     const config = {
//       headers: { "Content-Type": "application/json" },
//     };
//     const { data } = await axios.put(
//       "${server}api/v1/users/password/update",
//       passwords,
//       config
//     );
//     dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_PASSWORD_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// //forgot password action

// export const forgotPassword = (email) => async (dispatch) => {
//   try {
//     dispatch({ type: FORGOT_PASSWORD_REQUEST });
//     const config = {
//       headers: { "Content-Type": "application/json" },
//     };
//     const { data } = await axios.post(
//       "${server}api/v1/users/forgetPassword",
//       email,
//       config
//     );
//     dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.success });
//   } catch (error) {
//     dispatch({
//       type: FORGOT_PASSWORD_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// // reset password action

// export const resetPassword = (token, passwords) => async (dispatch) => {
//   try {
//     dispatch({ type: NEW_PASSWORD_REQUEST });
//     const config = {
//       headers: { "Content-Type": "application/json" },
//     };
//     const { data } = await axios.patch(
//       `${server}api/v1/users/resetPassword/${token}`,
//       passwords,
//       config
//     );
//     dispatch({ type: NEW_PASSWORD_SUCCESS, payload: data.success });
//   } catch (error) {
//     dispatch({
//       type: NEW_PASSWORD_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// //logout actions

// export const logout = () => async (dispatch) => {
//   try {
//     await axios.get("${server}api/v1/users/logout");
//     dispatch({ type: LOGOUT_SUCCESS });
//   } catch (error) {
//     dispatch({
//       type: LOGOUT_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// //clear errors
// export const clearErrors = () => async (dispatch) => {
//   dispatch({ type: CLEAR_ERRORS });
// };



import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_RESET,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_RESET,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  NEW_PASSWORD_REQUEST,
  NEW_PASSWORD_SUCCESS,
  NEW_PASSWORD_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstant";

import {server} from "../main"

// // action for login
// export const login = (email, password) => async (dispatch) => {
//   try {
//     dispatch({ type: LOGIN_REQUEST, });

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const { data } = await axios.post(
//       "${server}api/v1/users/login",
//       { email, password },
//       config
//     );
//     console.log(data)
//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: data.user,
//     });
//   } catch (error) {
//     if (error.response) {
//       dispatch({
//         type: LOGIN_FAIL,
//         payload: error.response.data.message,
//       });
//     } else if (error.request) {
//       // The request was made but no response was received
//       // This can happen if the server is down or there's a network issue
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log('Error', error.message);
//     }
//   }
// };


// //register user actions

// export const register = (userData) => async (dispatch) => {
//   try {
//     dispatch({ type: REGISTER_USER_REQUEST, });
//     const config = {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     };
//     const { data } = await axios.post("${server}api/v1/users/signup", userData, config);
//     dispatch({
//       type: REGISTER_USER_SUCCESS,
//       payload: data.user,
//     });
//     return data.data.user;
//   } catch (error) {
//     if (error.response) {
//       dispatch({
//         type: REGISTER_USER_FAIL,
//         payload: error.response.data.message,
//       });
//     } else if (error.request) {
//       console.log(error.request);
//     } else {
//       console.log('Error', error.message);
//       dispatch({
//         type: REGISTER_USER_FAIL,
//         payload: 'An unexpected error occurred'
//       });
//     }
//   }
// };

//load user action

// export const loadUser = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: LOAD_USER_REQUEST,
//     });

//     const { data } = await axios.get("${server}api/v1/users/me");
//     console.log("Load user data",data)

//     dispatch({
//       type: LOAD_USER_SUCCESS,
//       payload: data.user,
//     });
//   } catch (error) {
//     if (error.response) {
//       dispatch({
//         type: LOAD_USER_FAIL,
//         payload: error.response.data.message,
//       });
//     } else if (error.request) {
//       // The request was made but no response was received
//       // This can happen if the server is down or there's a network issue
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log('Error', error.message);
//     }
//   }
// };

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};



// Action for login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${server}api/v1/users/login`,
      { email, password },
      config
    );

    // Store token in localStorage
    localStorage.setItem("token", data.token);
    setAuthToken(data.token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.message,
      });
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
  }
};

// Register user actions
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const { data } = await axios.post(`${server}api/v1/users/signup`, userData, config);

    // Store token in localStorage
    localStorage.setItem('token', data.token);
    setAuthToken(data.token);

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data.user,
    });

    return data.user;
  } catch (error) {
    if (error.response) {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: error.response.data.message,
      });
    } else if (error.request) {
      console.error(error.request);
    } else {
      console.error('Error', error.message);
      dispatch({
        type: REGISTER_USER_FAIL,
        payload: 'An unexpected error occurred',
      });
    }
  }
};


export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
    }

    const { data } = await axios.get(`${server}api/v1/users/me`);

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: LOAD_USER_FAIL,
        payload: error.response.data.message,
      });
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
  }
};


//update profile actions
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST, });
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const { data } = await axios.put(
      `${server}api/v1/users/me/update`,
      userData,
      config
    );
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

//update password action

export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST, });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.put(
     `${server}api/v1/users/password/update`,
      passwords,
      config
    );
    dispatch({
      type: UPDATE_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

//forgot password action

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST, });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.post(
      `${server}api/v1/users/forgetPassword`,
      email,
      config
    );
    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// reset password action

export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PASSWORD_REQUEST, });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.patch(
      `${server}api/v1/users/resetPassword/${token}`,
      passwords,
      config
    );
    dispatch({
      type: NEW_PASSWORD_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Logout actions

export const logout = () => async (dispatch) => {
  try {
    await axios.get(`${server}api/v1/users/logout`);

    localStorage.removeItem("token");
    setAuthToken(null);

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response.data.message,
    });
  }
};
//clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS, });
};