/*
 * Types
 */
export const PAGE_LOAD = 'PAGE_LOAD';
export const SCENE_RECEIVE = 'SCENE_RECEIVE';
export const PAGE_RELOAD = 'PAGE_RELOAD';
export const FACTIONS_LOAD = 'FACTIONS_LOAD';
export const FACTIONS_RECEIVE = 'FACTIONS_RECEIVE';

/*
 * Initial state
 */
const initialState = {
  factions: [],
  actions: [],
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // case 'DO_SOMETHING':
    case PAGE_LOAD: {
      return {
        ...state,
      };
    }

    case SCENE_RECEIVE: {
      const { title, actions } = action.data;
      return {
        ...state,
        actions,
        text: action.data.description,
        image: action.data.image,
        imageText: action.data.imageDescription,
        title,
      };
    }

    case PAGE_RELOAD: {
      return {
        ...state,
        currentPageID: action.newPageID,
      };
    }

    case FACTIONS_LOAD: {
      return {
        ...state,
      };
    }

    case FACTIONS_RECEIVE: {
      return {
        ...state,
        factions: action.data,
        loaded: true,
      };
    }

    default:
      return state;
  }
};


/*
 * Action creators
 */
export const loadCurrentPage = () => ({
  type: 'PAGE_LOAD',
});

export const receiveScene = data => ({
  type: 'SCENE_RECEIVE',
  data,
});

export const loadNewPage = newPageID => ({
  type: 'PAGE_RELOAD',
  newPageID,
});

export const loadFactions = () => ({
  type: 'FACTIONS_LOAD',
});

export const receiveFactions = data => ({
  type: 'FACTIONS_RECEIVE',
  data,
});
