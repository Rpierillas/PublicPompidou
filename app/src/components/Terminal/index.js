/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';


/*
 * Local import
 */
import TitleBar from 'src/containers/TitleBar';
import Start from 'src/components/Start';
import Login from 'src/containers/Login';
import Register from 'src/containers/Register';
import Factions from 'src/containers/Factions';
import Character from 'src/containers/Character';
import Scene from 'src/containers/Scene';
import Restart from 'src/containers/Restart';
import Logout from 'src/containers/Logout';
import Profil from 'src/containers/Profil';
import Resume from 'src/containers/Resume';
import Admin from 'src/containers/Admin';
import GameOver from 'src/containers/GameOver';


/*
 * Code
 */
class Terminal extends React.Component {
  static propTypes = {
    status: PropTypes.string.isRequired,
    unfinished: PropTypes.bool.isRequired,
    logged: PropTypes.bool.isRequired,
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  };

  componentWillMount() {
    if (this.props.logged === true) {
      this.props.actions.unfinishedGameCheck();
      this.props.actions.loginSuccess();
    }
  }

  render() {
    const {
      status, unfinished, logged, hp, admin,
    } = this.props;
    return (
      <div id="terminal">
        <TitleBar />
        <Switch>
          {/* if the user is logged and has an unfinished game */}
          {(status === 'check' && localStorage.mytoken) &&
            <Route exact path="/" component={Resume} />
          }
          {/* if the user is logged, load factions */}
          {(status === 'factions' && localStorage.mytoken) &&
            <Route exact path="/" component={Factions} />
          }} */
          {/* if the user is not logged, load start page */}
          {localStorage.mytoken === undefined &&
            <Route exact path="/" component={Start} />
          }
          {/* if the user is logged, load characters */}
          {(status === 'character' && localStorage.mytoken) &&
            <Route exact path="/" component={Character} />
          }
          {(status === 'game' && localStorage.mytoken && hp <= 0) &&
            <Route exact path="/" component={GameOver} />
          }
          {(status === 'game' && localStorage.mytoken) &&
            <Route exact path="/" component={Scene} />
          }
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          {localStorage.mytoken &&
            <Route path="/Profil" component={Profil} />
          }
          {localStorage.mytoken && admin === true &&
            <Route path="/Admin" component={Admin} />
          }
          {localStorage.mytoken &&
            <Route path="/Restart" component={Restart} />
          }

          <Route path="/Logout" component={Logout} />

        </Switch>
      </div>
    );
  }
}


/*
 * Export default
 */
export default withRouter(Terminal);
