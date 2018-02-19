/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import Moment from 'react-moment';

/*
 * Code
 */
const Game = ({
  characterName, _id, date, factionID,
}) => {
  const faction = () => {
    if (factionID === 1) {
      return 'Neo-Luddites';
    }
    else if (factionID === 2) {
      return 'Front de Libération des Synthétiques';
    }
    return 'Pygmalion';
  };
  return (
    <div className="profil">
      <p className="profil-faction">{faction()}</p>
      <Moment format="DD/MM/YYYY" className="profil-date">{date}</Moment>
    </div>
  );
};
/*
 * Export default
 */
export default Game;
