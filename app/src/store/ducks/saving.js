/*
 * Types
 */
export const GAME_SAVE = 'GAME_SAVE';
export const GAME_UPDATE = 'GAME_UPDATE';
export const GAMEID_SAVE = 'GAMEID_SAVE';
export const SAVING_GET = 'SAVING_GET';
export const GAMES_LOAD = 'GAMES_LOAD';
export const GAME_CHECK = 'GAME_CHECK';
export const NOGAME_PENDING = 'NOGAME_PENDING';
export const GAME_PENDING = 'GAME_PENDING';
export const PREVIOUS_GET = 'PREVIOUS_GET';
/*
 * Initial state
 */
const initialState = {
  gameID: '',
  games: [],
  unfinished: false,
  pendingGameID: '',
};

/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GAME_SAVE: {
      return {
        ...state,
        navStatus: !state.navStatus,
      };
    }
    case GAME_UPDATE: {
      return {
        ...state,
      };
    }
    case GAMEID_SAVE: {
      return {
        ...state,
        gameID: action.id,
      };
    }
    case SAVING_GET: {
      return {
        ...state,
      };
    }
    case GAMES_LOAD: {
      return {
        ...state,
        games: action.games,
      };
    }
    case GAME_CHECK: {
      return {
        ...state,
      };
    }
    case NOGAME_PENDING: {
      return {
        ...state,
      };
    }
    case GAME_PENDING: {
      return {
        ...state,
        unfinished: true,
        pendingGameID: action.id,
      };
    }

    case PREVIOUS_GET: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

/*
 * Action creators
 */
export const saveGame = () => ({
  type: GAME_SAVE,
});

export const updateGame = () => ({
  type: GAME_UPDATE,
});

export const saveGameId = id => ({
  type: GAMEID_SAVE,
  id,
});
export const loadSaving = () => ({
  type: SAVING_GET,
});
export const loadGames = games => ({
  type: GAMES_LOAD,
  games,
});
export const unfinishedGameCheck = () => ({
  type: GAME_CHECK,
});
export const noPendingGame = () => ({
  type: NOGAME_PENDING,
});
export const pendingGame = id => ({
  type: GAME_PENDING,
  id,
});
export const loadPrevious = () => ({
  type: PREVIOUS_GET,
});
