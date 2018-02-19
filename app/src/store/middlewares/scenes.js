/*
 * Npm import
 */
import axios from 'axios';

/*
 * Local import
 */
import { PAGE_LOAD, receiveScene, FACTIONS_LOAD, receiveFactions } from 'src/store/ducks/scenes';

/*
 * Code
 */
const urlScene = '/scenes';
const urlFactions = '/factions';
//const urlScene = 'http://localhost:3000/scenes';
//const urlFactions = 'http://localhost:3000/factions';


const createMiddleware = store => next => (action) => {
  // Je vérifie ce qui m'intéresse
  switch (action.type) {
    case PAGE_LOAD: {
      const state = store.getState();
      axios
        .post(
          urlScene,
          { current: state.user.current },
          { headers: { authorization: localStorage.mytoken } },
        )
        .then(({ data }) => {
          store.dispatch(receiveScene(data));
        });
      break;
    }

    case FACTIONS_LOAD: {
      console.log(localStorage.mytoken);

      axios
        .get(urlFactions, { headers: { authorization: localStorage.mytoken } })
        .then((response) => {
          console.log(response);
          store.dispatch(receiveFactions(response.data));
        });
      break;
    }

    default:
      console.log(action);
  }

  // Go to the next
  next(action);
};


/*
 * Export default
 */
export default createMiddleware;
