/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */
import Action from 'src/containers/Action';


/*
 * Code
 */
const ActionList = ({ actions }) => (
  <div id="action-list">
    {actions.map(action => (
      <Action
        key={action.text}
        {...action}
      />
      ))
    }
  </div>
);


ActionList.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};


/*
 * Export default
 */
export default ActionList;
