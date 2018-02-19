/*
 * Types
 */
export const PLAYER_SEARCH = 'PLAYER_SEARCH';
export const MAKE_ADMIN = 'MAKE_ADMIN';
export const DELETE_PLAYER = 'DELETE_PLAYER';
export const PLAYER_TYPE = 'PLAYER_TYPE';
export const INFORMATION_DISPATCH = 'INFORMATION_DISPATCH';
/*
 * Initial state
 */
const initialState = {
  email: '',
  admin: false,
  selectedUser: '',
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // case 'DO_SOMETHING':
    //
    case PLAYER_TYPE: {
      return {
        ...state,
        email: action.value,
      };
    }
    case PLAYER_SEARCH: {
      return {
        ...state,
        email: state.email,
      };
    }

    case MAKE_ADMIN: {
      console.log(action.id);
      return {
        ...state,
        selectedUser: action.id,
        admin: !state.admin,
      };
    }

    case DELETE_PLAYER: {
      return {
        ...state,
      };
    }

    case INFORMATION_DISPATCH: {
      return {
        ...state,
        info: action.informations,
      };
    }

    default:
      return state;
  }
};


/*
 * Action creators
 */

export const typePlayer = value => ({
  type: PLAYER_TYPE,
  value,
});
export const searchPlayer = () => ({
  type: PLAYER_SEARCH,
});

export const makeAdmin = id => ({
  type: MAKE_ADMIN,
  id,
});

export const deletePlayer = () => ({
  type: DELETE_PLAYER,
});

export const userInformation = informations => ({
  type: INFORMATION_DISPATCH,
  informations,
});
