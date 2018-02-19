/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */
import User from 'src/containers/User';
/*
 * Code
 */
class Admin extends React.Component {
  /**
   * PropTypes
   * @type {Object}
   */
    static propTypes = {
      email: PropTypes.string,
      actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    }

    static defaultProps = {
      email: '',
    }


   handleSubmit = (evt) => {
     evt.preventDefault();
     console.log('coucou');
     this.props.actions.searchPlayer();
   }
   handleChange = (evt) => {
     const { value } = evt.target;
     this.props.actions.typePlayer(value);
   }

   render() {
     const { email, informations } = this.props;
     return (
       <div id="admin">
         <p id="admin-info">Bienvenue dans le  panneau d'administration</p>

         <div id="admin-block">
           <span id="admin-text">Recherchez un utilisateur par mail</span>
           <form onSubmit={this.handleSubmit}>
             <input
               type="email"
               id="admin-input"
               placeholder="Recherchez un joueur"
               value={email}
               onChange={this.handleChange}
             />
             {informations ? <User /> : <p id="admin-noresult">Aucun résultat</p>}
           </form>
         </div>
       </div>
     );
   }
}


/*
 * Export default
 */
export default Admin;
