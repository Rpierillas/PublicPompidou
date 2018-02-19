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
class TitleBar extends React.Component {
  /**
   * PropTypes
   * @type {Object}
   */
  static propTypes = {
    status: PropTypes.string.isRequired,
    title: PropTypes.string,
    logged: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    title: '',
  };


  /*
   * Render
   */
  render() {
    const { status, title, logged } = this.props;
    const pathname = window.location.pathname.toLowerCase();

    return (
      <div id="title-bar">
        <span id="root-bar" className="bars">
          /root/operations
          {
            (pathname === '/' && '/home') ||
            pathname
          }
          {
            pathname === '/' && logged && `/${status}`
          }
          {
            pathname === '/' && status === 'game' && `/${title}`
          }
        </span>
        <span id="empty-bar" className="bars" />
        <span id="closing-cross">X</span>
      </div>

    );
  }
}


/*
 * PropTypes
 */


/*
 * Export default
 */
export default TitleBar;
