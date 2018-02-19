/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */
import Faction from 'src/containers/Faction';
/*
 * Code
 */
class Factions extends React.Component {
  /**
   * PropTypes
   * @type {Object}
   */
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    factions: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
  }


  componentWillMount() {
    this.props.actions.loadFactions();
  }

  handleClick = () => {
    if (this.props.description !== '') {
      this.props.actions.goCharacter();
    }
  }
  render() {
    const { factions, description } = this.props;

    return (
      <div id="factions">
        <h1 id="factions-title">Quelle organisation a su s'offrir votre loyauté, Agent?</h1>
        <div id="factions-list">
          {factions.map(faction => (
            <Faction
              key={faction.name}
              {...faction}
            />
          ))
          }
        </div>
        <pre id="factions-description">
          {`${description}`}
        </pre>
        <div id="factions-button">
          <button
            className="previous-next"
            onClick={this.handleClick}
          >
            Continuer ⫸
          </button>
        </div>
      </div>
    );
  }
}


/*
 * Export default
 */
export default Factions;
