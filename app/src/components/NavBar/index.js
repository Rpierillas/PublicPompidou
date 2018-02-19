/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink, withRouter } from 'react-router-dom';


/*
 * Local import
 */


/*
 * Code
 */
class NavBar extends React.Component {
  /**
   * PropTypes
   * @type {Object}
   */
  static propTypes = {
    status: PropTypes.bool.isRequired,
    logged: PropTypes.bool.isRequired,
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  };


  /**
   * Handler
   */
  handleClickMenu = () => {
    this.props.actions.openCloseMenu();
  }

  handleClick = () => {
    this.props.actions.getRegisterRoute();
    this.props.actions.openCloseMenu();
  }

  handleLogOut = () => {
    this.handleClickMenu();
    this.props.actions.loggingOut();
    this.props.actions.restartChar();
  }

  /*
   * Render
   */
  render() {
    const { status, logged, admin } = this.props;
    return (
      <div id="navbar">
        <div
          id="navbar-menu"
          className={classNames({
            visible: status,
          })}
          onClick={this.handleClickMenu}
        >
          X
        </div>
        <span
          id="navbar-click"
          className={classNames({ invisible: logged })}
        >
          &larr; Connectez-vous!
        </span>
        <span
          id="navbar-noGlow"
          className={classNames({ invisible: !logged })}
        >
          Menu
        </span>
        <ul
          className={classNames(
              'uList',
              { visibleUlist: status },
            )}
        >
          <NavLink className="list" onClick={this.handleClickMenu} exact to="/"> Home </NavLink>
          {!localStorage.mytoken &&
            <NavLink className="list" onClick={this.handleClickMenu} exact to="/Login"> Connexion </NavLink>
          }
          {!localStorage.mytoken &&
            <NavLink className="list" onClick={this.handleClickMenu} exact to="/Register"> Inscription </NavLink>
          }
          {localStorage.mytoken &&
          <NavLink className="list" onClick={this.handleClickMenu} exact to="/Profil"> Profil </NavLink>
          }
          {localStorage.mytoken && admin === true &&
          <NavLink className="list" onClick={this.handleClickMenu} exact to="/Admin"> Administration </NavLink>
          }
          <NavLink className="list" onClick={this.handleClickMenu} exact to="/History"> Historique </NavLink>
          {localStorage.mytoken &&
            <NavLink className="list" onClick={this.handleClickMenu} exact to="/Restart"> Recommencer </NavLink>
          }
          {localStorage.mytoken &&
            <NavLink className="list" onClick={this.handleLogOut} exact to="/Logout"> Logout </NavLink>
          }
        </ul>
      </div>

    );
  }
}
/*
 * Export default
 */
export default withRouter(NavBar);
