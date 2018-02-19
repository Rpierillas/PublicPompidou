/*
 * Types
 */
export const MENU_OPEN_CLOSE = 'MENU_OPEN_CLOSE';
export const IN_LOGGING = 'IN_LOGGING';
export const OUT_LOGGING = 'OUT_LOGGING';
export const SIGNIN_UPDATE = 'SIGNIN_UPDATE';

/*
 * Initial state
 */

const initialState = localStorage.mytoken ? {
  loggedIn: true,
  navStatus: false,
} :
  {
    loggedIn: false,
    navStatus: false,
  };


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MENU_OPEN_CLOSE: {
      return {
        ...state,
        navStatus: !state.navStatus,
      };
    }

    case IN_LOGGING: {
      return {
        ...state,
        loggedIn: true,
      };
    }

    case OUT_LOGGING: {
      return {
        ...state,
        loggedIn: false,
      };
    }


    default:
      return state;
  }
};

/*
 * Action creators
 */
export const openCloseMenu = () => ({
  type: MENU_OPEN_CLOSE,
});

export const loggingIn = () => ({
  type: IN_LOGGING,
});

export const loggingOut = () => ({
  type: OUT_LOGGING,
});
