/*
 * Npm import
 */
import { applyMiddleware, compose, createStore } from 'redux';


/*
 * Local import
 */
import reducer from 'src/store/ducks';
import scenes from './middlewares/scenes';
import action from './middlewares/action';
import authentication from './middlewares/authentication';
import saving from './middlewares/saving';
import admin from './middlewares/admin';


/*
 * Code
 */
// DevTools
let devTools = [];
if (window.devToolsExtension) {
  devTools = [window.devToolsExtension()];
}

// Enhancers
const scenesMiddleware = applyMiddleware(scenes);
const actionMiddleware = applyMiddleware(action);
const authenticationMiddleware = applyMiddleware(authentication);
const savingMiddleware = applyMiddleware(saving);
const adminMiddleware = applyMiddleware(admin);

const enhancers = compose(scenesMiddleware, actionMiddleware, authenticationMiddleware, savingMiddleware, adminMiddleware, ...devTools);

// Store
const store = createStore(reducer, enhancers);


/*
 * Export default
 */
export default store;
