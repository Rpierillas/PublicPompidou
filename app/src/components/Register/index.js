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
class Register extends React.Component {
  /**
   * PropTypes
   * @type {Object}
   */
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    errorMessage: PropTypes.string.isRequired,
  }


  /**
   * State
   * @type {Object}
   */
  state = {
    logged: !!localStorage.mytoken,
  }


  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.actions.signUpSubmit();
    window.setTimeout(() => {
      if (localStorage.mytoken) {
        this.props.actions.loggingIn();
        this.setState({
          logged: true,
        });
        this.props.actions.clearInput();
      }
    }, 750);
  }


  /*
   * Render
   */
  render() {
    const { data, errorMessage } = this.props;
    const { logged } = this.state;
    return (

      <form onSubmit={this.handleSubmit}>
        {!logged &&
          <div id="login">
            <h1 id="login-title">Bienvenue visiteur.</h1>
            <p id="login-text">Veuillez remplir ce questionnaire avant de continuer.</p>
            <p id="login-responsability">(Nous déclinons toutes responsabilités quand à l'usage frauduleux de vos données  personnelles par des I.A malveillantes.)</p>
            {data.map(field => <Field key={field.name} {...field} />)}
            <p id="login-error">{errorMessage}</p>
            <div className="login">
              <button id="login-button-validate">Valider</button>
            </div>
            <p id="login-register">Si vous faîtes déjà partie d'une faction, veuillez vous authentifier</p>
            <NavLink exact to="/Login">
              <button id="login-button">CONNEXION</button>
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
export default withRouter(Register);
