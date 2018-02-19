/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';


/*
 * Local import
 */


/*
 * Code
 */
class GameOver extends React.Component {
  /**
  * PropTypes
  * @type {Object}
  */
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  };


  /**
   * Handler
   */
  handleClick = () => {
    this.props.actions.restartChar();
  }


  /**
   * Render
   */
  render() {
    return (
      <div id="gameOver">
        <p id="gameOver-text">Vous vous sentez défaillir. Votre arme tombe au sol et vous la rejoignez aussitôt, pris de vertige, la vision emplie de petits points noirs. Une odeur de sang et de chrome vous accompagnera jusqu'à votre dernier souffle.
          Alors que la douleur s'estompe lentement et que vous sentez la chaleur quitter votre corps, une unique certitude vous vient à l'esprit : Il n'y a pas de lumière au bout du tunnel.
          Personne ne se souviendra de vous.
        </p>
        <div id="gameOver-yesNo">
          <NavLink className="confirm" onClick={this.handleClick} exact to="/">Fermer les yeux.</NavLink>
        </div>
      </div>
    );
  }
}


/*
 * Export default
 */
export default withRouter(GameOver);
