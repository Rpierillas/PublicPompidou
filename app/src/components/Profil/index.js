/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */
import Game from 'src/components/Profil/game';
/*
 * Code
 */
class Profil extends React.Component {
  /**
   * PropTypes
   * @type {Object}
   */
   static propTypes = {
     actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
     games: PropTypes.array.isRequired,
   }

   componentWillMount() {
     this.props.actions.loadSaving();
   }

   render() {
     const { games } = this.props;
     console.log(games);
     return (
       <div id="profil">
         <p id="profil-info">Ceci est votre Profil</p>
         <p id="admin-access"> *** Acceder au panneau d'administration *** </p>
         <div id="profil-description">
           <p>Nom du joueur</p>
         </div>
         <div id="game-list">
           <p> Vos parties jouées</p>
           <div id="profil-games">
             {games.map(game => (
               <Game
                 key={game._id}
                 {...game}
               />
             ))
            }
           </div>
         </div>
       </div>
     );
   }
}


/*
 * Export default
 */
export default Profil;
