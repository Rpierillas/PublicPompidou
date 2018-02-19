/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

/*
 * Local import
 */
import NavBar from 'src/containers/NavBar';
import Terminal from 'src/containers/Terminal';


/*
 * Code
 */
const App = ({ logo }) => {
  const style = {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div id="app" style={style}>
      {/* <Decorations> */}
      <Terminal />
      <NavBar />
      {/* </Decorations> */}
    </div>);
};
App.propTypes = {
  logo: PropTypes.string,
};

App.defaultProps = {
  logo: '',
};


/*
 * Export default
 */
export default App;
