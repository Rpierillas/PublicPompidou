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
class User extends React.Component {
  /**
   * PropTypes
   * @type {Object}
   */
   adminMake = () => {
     this.props.actions.makeAdmin(this.props.informations._id);
   }
   playerDelete = () => {
     this.props.actions.deletePlayer(this.props.informations._id);
   }

   render() {
     const {
       email, _id, games, admin,
     } = this.props.informations;
     console.log(admin);

     return (
       <div className="user">
         <h1 className="user-email">{email}</h1>
         <p className="user-id">{_id}</p>

         {admin === true ? <p className="user-admin">Cet utilisateur est admin</p> : <p className="user-admin">Simple utilisateur</p>}
         {admin === true ?
           <label className="user-makeAdmin" htmlFor="makeAdmin">
             Enlever le rôle d'administrateur
             <input
               type="checkbox"
               name="makeAdmin"
               className="user-makeAdmin-input"
               placeholder="Passer le joueur   Administrateur"
               onChange={this.adminMake}

             />
           </label>
           :
           <label className="user-makeAdmin" htmlFor="makeAdmin">
             Donner le rôle d'administrateur
             <input
               type="checkbox"
               name="makeAdmin"
               className="user-makeAdmin-input"
               placeholder="Passer le joueur   Administrateur"
               onChange={this.adminMake}

             />
           </label>
         }

         <p className="user-games">Cet utilisateur a joué {games.length} parties</p>

         <div
           className="user-delete"
           name="deletePlayer"
           placeholder="Supprimer le joueur"
           onClick={this.playerDelete}
         >
           SUPPRIMER LE JOUEUR
         </div>

       </div>
     );
   }
}


/*
 * Export default
 */
export default User;
