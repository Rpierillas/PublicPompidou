/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */


/*
 * Code
 */
class Action extends React.Component {
  /**
   * PropTypes
   * @type {Object}
   */
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    targetSuccess: PropTypes.number.isRequired,
    targetFailure: PropTypes.number,
    stat: PropTypes.string,
    text: PropTypes.string,
  }

  static defaultProps = {
    targetFailure: null,
    stat: '',
    text: '',
  }


  /**
   * Handlers
   */
  handleClick = () => {
    const { targetSuccess, targetFailure, stat } = this.props;
    const action = { targetSuccess, targetFailure, stat };
    this.props.actions.selectAction(action);
    this.props.actions.updateGame();
    this.props.actions.loadCurrentPage();
  }
  parseStat = (stat) => {
    switch (stat) {
      case 'determination':
        return 'ᨒ';
      case 'finesse':
        return '༄';
      case 'intellect':
        return '༓';
      default:
        return '';
    }
  }
  render() {
    const { text, stat } = this.props;
    console.log(this.props);
    return (
      <div className="action">
        <button
          className="action-text"
          onClick={this.handleClick}
        >
          {this.parseStat(stat)} {text}
        </button>
      </div>
    );
  }
}


/*
 * Export default
 */
export default Action;
