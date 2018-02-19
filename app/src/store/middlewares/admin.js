/*
 * Npm import
 */
import axios from 'axios';

/*
 * Local import
 */
import { PLAYER_SEARCH, MAKE_ADMIN,
  DELETE_PLAYER, userInformation,
  makeAdmin, deletePlayer } from 'src/store/ducks/admin';
/*
 * Code
 */
const urlFind = '/findUser';
const urlRole = '/role';
const urlDelete = '/delete';
//const urlFind = 'http://localhost:3000/findUser';
//const urlRole = 'http://localhost:3000/role';
//const urlDelete = 'http://localhost:3000/delete';


const createMiddleware = store => next => (action) => {
  // Je vérifie ce qui m'intéresse
  switch (action.type) {
    case PLAYER_SEARCH: {
      const state = store.getState();
      console.log(state);
      axios
        .post(
          urlFind,
          { email: state.admin.email },
          { headers: { authorization: localStorage.mytoken } },
        )
        .then((response) => {
          console.log(response);
          store.dispatch(userInformation(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    }

    case MAKE_ADMIN: {
      const state = store.getState();
      console.log(state);
      axios
        .post(
          urlRole,
          {
            email: state.admin.email,
            admin: state.admin.admin,
          },
          { headers: { authorization: localStorage.mytoken } },
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    }

    case DELETE_PLAYER: {
      const state = store.getState();
      console.log(state);
      axios
        .post(
          urlDelete,
          {
            email: state.admin.email,
          },
          { headers: { authorization: localStorage.mytoken } },
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    }
    default:
  }

  // Go to the next
  next(action);
};


/*
 * Export default
 */
export default createMiddleware;
