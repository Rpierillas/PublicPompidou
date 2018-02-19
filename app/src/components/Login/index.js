/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';


/*
 * Local import
 */
import Field from 'src/containers/Field';


/*
 * Code
 */
class Login extends React.Component {
  /**
   * PropTypes
   * @type {Object}
   */
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    loginFailure: PropTypes.string.isRequired,
  }


  /**
   * State
   * @type {Object}
   */
  state = {
    logged: !!localStorage.mytoken,
  }


  /*
   * Handler
   */
  handleSubmit = (evt) => {
    this.props.actions.signInSubmit();
    evt.preventDefault();
    window.setTimeout(() => {
      console.log('SetTimout 500');
      if (localStorage.mytoken) {
        this.props.actions.loggingIn();
        this.props.actions.clearInput();
        this.setState({
          logged: true,
        });
      }
    }, 750);
  }


  /*
   * Render
   */
  render() {
    const { data, loginFailure } = this.props;
    const { logged } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {!logged &&
          <div id="login">
            <h1 id="login-title">Bienvenue visiteur.</h1>
            <p id="login-text">Veuillez vous connecter afin de poursuivre l'aventure</p>
            <p id="login-responsability">(Nous déclinons toutes responsabilités quand à l'usage frauduleux de vos données  personnelles par des I.A malveillantes.)</p>
            {data.map(field => <Field key={field.name} {...field} />)}
            <p id="login-error">{loginFailure}</p>
            <div className="login">
              <button id="login-button-validate">Valider</button>
            </div>
            <p id="login-register">Si vous ne faîtes partie d'aucune faction, veuillez vous enregistrer</p>
            <NavLink exact to="/Register">
              <div id="login-button">ENREGISTREMENT</div>
            </NavLink>
          </div>
        }
        {logged &&
          <div id="login">
            <h1 id="login-title">Vous êtes connecté.</h1>
            <p id="login-register">Plongez-vous dans l'aventure.</p>
            <NavLink exact to="/">
              <div id="login-button">POMPIDOU</div>
            </NavLink>
          </div>
        }
      </form>
    );
  }
}


/*
 * Export default
 */
export default withRouter(Login);
