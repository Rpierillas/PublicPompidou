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
class Restart extends React.Component {
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
      <div id="restart">
        <p id="restart-text">Voulez-vous réellement recommencer votre partie?</p>
        <p id="restart-warning">ATTENTION! Vous ne pourrez plus revenir en arrière!</p>
        <div id="restart-yesNo">
          <NavLink className="confirm" onClick={this.handleClick} exact to="/">Oui</NavLink>
          <NavLink className="confirm" exact to="/">Non</NavLink>
        </div>
      </div>
    );
  }
}


/*
 * Export default
 */
export default withRouter(Restart);
