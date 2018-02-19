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
class Resume extends React.Component {
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
  handleClickNo = () => {
    this.props.actions.restartChar();
  }

  handleClickYes = () => {
    this.props.actions.loadPrevious();
  }


  /**
   * Render
   */
  render() {
    return (
      <div id="restart">
        <p id="restart-text">Vous avez une partie en cours.Voulez-vous la reprendre?</p>
        <p id="restart-warning">ATTENTION! Vous ne pourrez plus revenir en arrière!</p>
        <div id="restart-yesNo">
          <NavLink className="confirm" onClick={this.handleClickYes} exact to="/">Oui</NavLink>
          <NavLink className="confirm" onClick={this.handleClickNo} exact to="/">Non</NavLink>
        </div>
      </div>
    );
  }
}


/*
 * Export default
 */
export default withRouter(Resume);
