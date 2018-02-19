/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */
import Description from 'src/containers/Description';
import ActionList from 'src/containers/ActionList';


/*
 * Code
 */
class Scene extends React.Component {
  /**
   * PropTypes
   * @type {Object}
   */
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  }


  /*
   * ComponentWillMount
   */
  componentWillMount() {
    this.props.actions.loadCurrentPage();
    console.log('Will Mount');
  }

  componentWillUnmount() {
    console.log('Will Unmount');
  }


  /*
   * Render
   */
  render() {
    return (
      <div id="scene">
        <Description />
        <ActionList />
      </div>
    );
  }
}


/*
 * Export default
 */
export default Scene;
