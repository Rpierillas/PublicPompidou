/*
 * Types
 */
export const FACTION_SELECT = 'FACTION_SELECT';
export const DESCRIPTION_SHOW = 'DESCRIPTION_SHOW';
export const CHARACTER_GO = 'CHARACTER_GO';
export const NAME_TYPING = 'NAME_TYPING';
export const GENDER_CHANGE = 'GENDER_CHANGE';
export const CHARACTER_SELECT = 'CHARACTER_SELECT';
export const ACTION_SELECT = 'ACTION_SELECT';
export const IMPROVE_STAT = 'IMPROVE_STAT';
export const RESET_CHAR = 'RESET_CHAR';
export const CALCULATE_HP = 'CALCULATE_HP';
export const WOUND_PLAYER = 'WOUND_PLAYER';
export const NEWGAME_LOAD = 'NEWGAME_LOAD';
export const PREVIOUS_LOAD = 'PREVIOUS_LOAD';
export const STATUS_CHANGE = 'STATUS_CHANGE';

/*
 * Initial state
 */
const initialState = {
  status: 'check',
  factionSelected: {
    1: false,
    2: false,
    3: false,
  },
  factionDescription: '',
  inputName: '',
  gender: '',
  name: '',
  current: 1,
  determination: 50,
  finesse: 50,
  intellect: 50,
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    // case 'DO_SOMETHING':
    case RESET_CHAR: {
      return {
        ...initialState,
        status: 'factions',
      };
    }

    case FACTION_SELECT: {
      return {
        ...state,
        factionID: action.id,
        factionSelected: {
          ...initialState.factionSelected,
          [action.id]: true,
        },
        [action.bonusStat]: state[action.bonusStat] + 25,
        current: action.startingScene,
        logo: action.logo,
      };
    }

    case CHARACTER_GO: {
      return {
        ...state,
        status: 'character',
      };
    }

    case IMPROVE_STAT: {
      return {
        ...state,
        chosenStat: action.chosenStat,
      };
    }

    case DESCRIPTION_SHOW: {
      return {
        ...state,
        factionDescription: `${action.description}`,
      };
    }

    case NAME_TYPING: {
      return {
        ...state,
        inputName: action.value,
      };
    }

    case GENDER_CHANGE: {
      return {
        ...state,
        gender: action.value,
      };
    }

    case CHARACTER_SELECT: {
      return {
        ...state,
        status: 'game',
        name: state.inputName,
        [state.chosenStat]: state[state.chosenStat] + 5,
      };
    }

    case ACTION_SELECT: {
      return {
        ...state,
        current: action.targetId,
      };
    }

    case CALCULATE_HP: {
      return {
        ...state,
        maxHp: Math.floor(state.determination / 10),
        hp: Math.floor(state.determination / 10),
      };
    }
    case WOUND_PLAYER: {
      return {
        ...state,
        hp: state.hp - 1,
      };
    }

    case NEWGAME_LOAD: {
      return {
        ...state,
        status: 'factions',
      };
    }
    case PREVIOUS_LOAD: {
      return {
        ...state,
        status: 'game',
        gender: action.data.gender,
        name: action.data.characterName,
        current: action.data.currentScene,
        determination: action.data.determination,
        finesse: action.data.finesse,
        intellect: action.data.intellect,
        factionID: action.data.factionID,
        logo: action.data.logo,
        maxHp: action.data.maxHp,
        hp: action.data.hp,
      };
    }

    case STATUS_CHANGE: {
      return {
        ...state,
        status: 'check',
      };
    }
    default:
      return state;
  }
};


/*
 * Action creators
 */
export const selectFaction = (id, bonusStat, startingScene, logo) => ({
  type: FACTION_SELECT,
  id,
  bonusStat,
  startingScene,
  logo,
});

export const goCharacter = () => ({
  type: CHARACTER_GO,
});

export const restartChar = () => ({
  type: RESET_CHAR,
});

export const showDescription = description => ({
  type: DESCRIPTION_SHOW,
  description,
});

export const improveStat = chosenStat => ({
  type: IMPROVE_STAT,
  chosenStat,
});

export const nameTyping = value => ({
  type: NAME_TYPING,
  value,
});

export const changeGender = value => ({
  type: GENDER_CHANGE,
  value,
});

export const selectCharacter = () => ({
  type: CHARACTER_SELECT,
});

export const selectAction = action => ({
  type: ACTION_SELECT,
  ...action,
});

export const calculateHp = () => ({
  type: CALCULATE_HP,
});
export const loadNewGame = () => ({
  type: NEWGAME_LOAD,
});
export const loadPreviousGame = data => ({
  type: PREVIOUS_LOAD,
  data,
});
export const changeStatus = () => ({
  type: STATUS_CHANGE,
});
