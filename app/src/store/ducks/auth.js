/*
 * Types
 */
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const INPUT_CLEAR = 'INPUT_CLEAR';
export const SIGNUP_SUBMIT = 'SIGNUP_SUBMIT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const SIGNIN_SUBMIT = 'SIGNIN_SUBMIT';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';
export const USER_ADMIN = 'USER_ADMIN';

/*
 * Initial state
 */
const initialState = {
  errorMessage: '',
  loginFailure: '',
  admin: '',
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // case 'DO_SOMETHING':
    case INPUT_CHANGE: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }

    case INPUT_CLEAR: {
      return {
        ...state,
        email: '',
        password: '',
        passwordConf: '',
      };
    }

    case SIGNUP_SUBMIT: {
      return {
        ...state,
      };
    }

    case SIGNIN_SUBMIT: {
      return {
        ...state,
        logged: true,
      };
    }
    case LOGIN_SUCCESS: {
      console.log(action);
      return {
        ...state,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        currentUser: '',
      };
    }
    case ERROR_MESSAGE: {
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loginFailure: action.loginFailure,
      };
    }

    case USER_ADMIN: {
      return {
        ...state,
        admin: action.bool,
      };
    }
    default:
      return state;
  }
};


/*
 * Action creators
 */


export const changeInput = ({ name, value }) => ({
  type: INPUT_CHANGE,
  value,
  name,
});

export const clearInput = () => ({
  type: INPUT_CLEAR,
});

export const signUpSubmit = () => ({
  type: SIGNUP_SUBMIT,
});

export const signInSubmit = () => ({
  type: SIGNIN_SUBMIT,
});

export const logout = () => ({
  type: LOGOUT,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});
export const signUpError = errorMessage => ({
  type: ERROR_MESSAGE,
  errorMessage,
});
export const loginError = loginFailure => ({
  type: LOGIN_FAILURE,
  loginFailure,
});

export const isAdmin = bool => ({
  type: USER_ADMIN,
  bool,
});
