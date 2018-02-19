/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


/*
 * Local import
 */


/*
 * Code
 */
class Faction extends React.Component {
  /**
   * PropTypes
   * @type {Object}
   */
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    id: PropTypes.number.isRequired,
    bonusStat: PropTypes.string.isRequired,
    startingScene: PropTypes.number.isRequired,
    logo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  }


  /**
   * Handlers
   */
  handleClick = () => {
    const {
      id,
      bonusStat,
      startingScene,
      logo,
      description,
      name,
    } = this.props;
    const { actions } = this.props;
    actions.restartChar();
    actions.selectFaction(id, bonusStat, startingScene, logo);
    actions.showDescription(`${name}
      ${description}
    `);
  }


  render() {
    const {
      id,
      name,
      logo,
      selected,
    } = this.props;
    return (
      <div
        id={id}
        className={classNames(
          'faction',
          {
            'faction--selected': selected,
          },
        )}
        onClick={this.handleClick}
      >
        <div className="faction-name">{name}</div>
        <img className="faction-logo" src={logo} alt={name} />
      </div>
    );
  }
}
/*
 * Export default
 */
export default Faction;
