/*
 * Npm import
 */
import axios from 'axios';


/*
 * Local import
 */
import { GAME_UPDATE, GAME_SAVE, saveGameId, SAVING_GET, loadGames, GAME_CHECK, noPendingGame, pendingGame, PREVIOUS_GET } from 'src/store/ducks/saving';

import { loadNewGame, loadPreviousGame } from 'src/store/ducks/user';

/*
 * Code
 */

const urlBegin = '/begin';
const urlNewAction = '/save';
const urlLoadSaving = '/profile';
const urlCheck = '/check';
const urlPrevious = '/previous';
//const urlBegin = 'http://localhost:3000/begin';
//const urlNewAction = 'http://localhost:3000/save';
//const urlLoadSaving = 'http://localhost:3000/profile';
//const urlCheck = 'http://localhost:3000/check';
//const urlPrevious = 'http://localhost:3000/previous';


const createMiddleware = store => next => (action) => {
  // Je vérifie ce qui m'intéresse
  switch (action.type) {
    case GAME_SAVE: {
      const state = store.getState();
      axios
        .post(
          urlBegin, {
            factionID: state.user.factionID,
            characterName: state.user.name,
            currentScene: state.user.current,
            gender: state.user.gender,
            determination: state.user.determination,
            finesse: state.user.finesse,
            intellect: state.user.intellect,
            maxHp: state.user.maxHp,
            hp: state.user.hp,
            logo: state.user.logo,
          },
          { headers: { authorization: localStorage.mytoken } },
        )
        .then((response) => {
          console.log(response);
          store.dispatch(saveGameId(response.data.game));
        })
        .catch((res) => {
          console.log(res);
        });
      break;
    }
    case GAME_UPDATE: {
      const state = store.getState();
      axios
        .post(
          urlNewAction,
          {
            currentScene: state.user.current,
            game: state.saving.gameID,
          },
          { headers: { authorization: localStorage.mytoken } },
        )
        .then((response) => {
          console.log(response);
        })
        .catch((res) => {
          console.log(res);
        });
      break;
    }
    case SAVING_GET: {
      const state = store.getState();
      axios
        .get(urlLoadSaving, { headers: { authorization: localStorage.mytoken } })
        .then((response) => {
          console.log(response.data.games);
          store.dispatch(loadGames(response.data.games));
        })
        .catch((res) => {
          console.log(res);
        });
      break;
    }
    case GAME_CHECK: {
      axios
        .get(urlCheck, { headers: { authorization: localStorage.mytoken } })
        .then((response) => {
          console.log(response);
          if (response.data === '') {
            store.dispatch(noPendingGame());
            store.dispatch(loadNewGame());
          }
          store.dispatch(pendingGame(response.data));
        })
        .catch((res) => {
          console.log(res);
        });
      break;
    }
    case PREVIOUS_GET: {
      const state = store.getState();
      axios
        .post(
          urlPrevious,
          { game: state.saving.pendingGameID },
          { headers: { authorization: localStorage.mytoken } },
        )
        .then((response) => {
          store.dispatch(saveGameId(response.data._id));
          store.dispatch(loadPreviousGame(response.data));
        })
        .catch((res) => {
          console.log(res);
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
