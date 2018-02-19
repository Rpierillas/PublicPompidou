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
class Logout extends React.Component {
    /**
     * PropTypes
     * @type {Object}
     */
    static propTypes = {
      actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    }


    componentWillMount() {
      this.props.actions.logout();
    }
    render() {
      return (
        <div id="logout">
          <h1 id="logout-title">Vous êtes bien déconnecté</h1>
          <p id="logout-text">Vous pouvez maintenant éteindre votre machine.</p>
          <div id="restart-yesNo">
            <NavLink className="confirm" exact to="/">MENU PRINCIPAL</NavLink>
          </div>
        </div>
      );
    }
}

/*
 * Export default
 */
export default withRouter(Logout);
