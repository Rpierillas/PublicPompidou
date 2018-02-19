/*
 * Npm import
 */


/*
 * Local import
 */


/*
 * Code
 */
const createMiddleware = store => next => (action) => {
  // Je vérifie ce qui m'intéresse
  switch (action.type) {
    case 'ACTION_SELECT': {
      // Ici, on aiguille le joueur en fonction d'un jet de dé VS la stat associée à l'action.
      const state = store.getState().user;
      if (action.stat) {
        const diceRoll = Math.floor(Math.random() * 100) + 1;
        const actionStat = action.stat;
        const playerStat = state[actionStat];
        console.log('Lancé de dé:', diceRoll);
        console.log('Stat du joueur', playerStat);
        action.targetId = (diceRoll < playerStat ? action.targetSuccess : action.targetFailure);
      }
      action.targetId = action.targetSuccess;
      break;
    }
    case 'SCENE_RECEIVE': {
      // Ici on blesse le joueur si la valeur de wound est égale à "true"
      // dans la scène qui va arriver.
      const state = store.getState().user;
      if (typeof action.data.wound !== 'undefined' && action.data.wound) {
        state.hp -= 1;
      }
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
