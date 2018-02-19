/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import validateEmail from 'validate-email';


/*
 * Local import
 */


/*
 * Code
 */
class Field extends React.PureComponent {
  /**
   * PropTypes
   * @type {Object}
   */
  static propTypes = {
    type: PropTypes.oneOf(['text', 'password', 'email', 'tel']),
    name: PropTypes.string.isRequired,
    textSpan: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    value: '',
    type: 'text',
  }


  /**
   * Handlers
   * @type {Functions}
   */
  handleChange = (evt) => {
    // Modifier le state de <App />
    const { value } = evt.target;
    this.props.onChange(value);

    // On vérifie l'email
    // if (this.props.type === 'email') {
    //   const error = !validateEmail(value);
    //   this.setState({ error });
    // }
  }


  /*
   * Render
   */
  render() {
    const {
      type,
      name,
      textSpan,
      placeholder,
      value,
    } = this.props;
    return (
      <div className="login">
        <div className="login-block">
          <span className="login-text">{textSpan}</span>
          <input
            type={type}
            name={name}
            className="login-input"
            placeholder={placeholder}
            value={value}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}


/*
 * Export default
 */
export default Field;
