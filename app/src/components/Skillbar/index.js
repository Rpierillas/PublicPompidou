/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local Import
 */


/*
 * Code
 */
class Skillbar extends React.Component {
  /**
   * PropTypes
   * @type {Object}
   */
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    stat: PropTypes.number.isRequired,
    statName: PropTypes.string.isRequired,
    statIcon: PropTypes.string.isRequired,
    forHTML: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    chosenStat: PropTypes.string,
  }

  static defaultProps = {
    chosenStat: '',
  }


  /**
   * Handler
   */
  handleSelect = (evt) => {
    const { value } = evt.target;
    this.props.actions.improveStat(value);
  }


  /*
   * Render
   */
  render() {
    const {
      stat, statName, statIcon, forHTML, value, chosenStat,
    } = this.props;

    return (
      <div className="stat-block">
        <span className="stat-name"> {statName} {statIcon}</span>
        <div id="responsive">
          <div className="stat-bar-exterior">
            <div
              style={
              { width: `${value === chosenStat ? stat + 5 : stat}%` }}
              className="stat-bar-interior"
            >{value === chosenStat ? stat + 5 : stat}/100
            </div>
          </div>
          <label className={value === chosenStat ? 'stat-plus checked2' : 'stat-plus'} htmlFor={forHTML}>
            <input
              type="radio"
              id={forHTML}
              name="statBonus"
              value={value}
              onClick={this.handleSelect}
            />
            <span className="stat-icon">⨹</span>
          </label>
        </div>
      </div>
    );
  }
}


/*
 * Export default
 */
export default Skillbar;
