/*
 * Npm import
 */
import axios from 'axios';
import jwtDecode from 'jwt-decode';

/*
 * Local import
 */
import { SIGNUP_SUBMIT, SIGNIN_SUBMIT, LOGOUT, LOGIN_SUCCESS, signUpError, loginSuccess, loginError, isAdmin } from 'src/store/ducks/auth';
import { changeStatus } from 'src/store/ducks/user';
/*
 * Code
 */

const urlSignUp = '/signup';
const urlSignIn = '/signin';
const url = '/admin';
//const urlSignUp = 'http://localhost:3000/signup';
//const urlSignIn = 'http://127.0.0.1:3000/signin';
//const url = 'http://localhost:3000/admin';


const createMiddleware = store => next => (action) => {
  // Je vérifie ce qui m'intéresse
  switch (action.type) {
    case SIGNUP_SUBMIT: {
      const state = store.getState();
      axios
        .post(urlSignUp, {
          password: state.auth.password,
          passwordConf: state.auth.passwordConf,
          email: state.auth.email,
          admin: false,
        })
        .then((response) => {
          localStorage.setItem('mytoken', response.data.token);
          store.dispatch(loginSuccess());
        })
        .catch((err) => {
          const error = err.response.status;
          if (error === 400) {
            const errorMessage = 'Il y a des erreurs dans le formulaire, Humain. Retentez à nouveau ( Verifiez vos mots de passes et / ou la validité de votre adresse e-mail)...';
            store.dispatch(signUpError(errorMessage));
          }
          if (error === 422) {
            const errorMessage = 'Cet utilisateur existe déja dans notre base de données';
            store.dispatch(signUpError(errorMessage));
          }
        });
      break;
    }

    case SIGNIN_SUBMIT: {
      const state = store.getState();
      axios
        .post(urlSignIn, {
          email: state.auth.email,
          password: state.auth.password,
        })
        .then((response) => {
          localStorage.setItem('mytoken', response.data.token);
          store.dispatch(loginSuccess());
        })
        .catch((err) => {
          const error = err.response.status;
          if (error === 400) {
            const loginFailure = 'Cet utilisateur est inexistant ou il y a une erreur dans votre saisie';
            store.dispatch(loginError(loginFailure));
          }
          if (error === 401) {
            const loginFailure = 'Mot de passe ou  e-mail incorrect';
            store.dispatch(loginError(loginFailure));
          }
        });
      break;
    }

    case LOGIN_SUCCESS: {
      axios({
        method: 'GET',
        url,
        headers: { authorization: localStorage.mytoken },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(isAdmin(response.data));
        })
        .catch((res) => {
          console.log(res);
        });
      break;
    }

    case LOGOUT: {
      store.dispatch(changeStatus());
      localStorage.removeItem('mytoken');

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
