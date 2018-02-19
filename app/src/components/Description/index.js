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
class Description extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    image: PropTypes.string,
    imageText: PropTypes.string,
    maxHp: PropTypes.number,
    hp: PropTypes.number,
  };

  static defaultProps = {
    text: '',
    image: '',
    imageText: '',
    maxHp: null,
    hp: null,
  };


  displayHp = () => {
    const { maxHp, hp } = this.props; // pas encore utilisé
    // const randomNumber = Math.floor(Math.random()*textArray.length);
    const diff = Math.abs(maxHp - hp);
    const lightWound = ['Vos égratignures picotent un peu. Vous rajusterez votre gilet pare-balle quand vous aurez un moment.', 'Vos contusions vous gênent dans vos mouvements.', 'L\'adrénaline vous empêche de ressentir la douleur. Mais vous savez que vous regretterez vos aventures de la journée en vous réveillant demain.'];
    const mediumWound = ['Vous serrez les dents alors qu\'une de vos blessures frotte contre vos vêtements.', 'Vous laissez échapper un bref grognement alors que vous vous appuyez par erreur sur un de vos membres meurtris', 'Vous manquez de trébucher et retrouvez l\'équilibre de justesse.'];
    const heavyWound = ['Votre vision se brouille pendant quelques instants', 'Vous laissez une traînée de sang derrière vous', 'Votre respiration se fait sifflante', 'Vous grognez alors que votre côte cassée vous fait souffrir.', 'Vous sentez approcher la fin du voyage.'];
    console.log(diff);
    if (diff >= maxHp) {
      return 'Vous n\'êtes pas sensé voir ça';
    }
    if (diff > maxHp * 0.8) {
      return heavyWound[Math.floor(Math.random() * heavyWound.length)];
    }
    if (diff > maxHp * 0.4) {
      return mediumWound[Math.floor(Math.random() * mediumWound.length)];
    }
    if (diff > maxHp * 0.2) {
      return lightWound[Math.floor(Math.random() * lightWound.length)];
    }
    return '';
  }
  render() {
    const {
      text,
      image,
      imageText,
      maxHp,
      hp,
    } = this.props;
    const style = {
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
    };
    return (
      <div id="description">
        <div id="description-leftBlock" style={style}>
          <p id="description-imageText">{imageText}</p>
          <pre id="description-text">{text}
            <p id="description-hp">{this.displayHp()}</p>
          </pre>
        </div>
        <div id="description-rightBlock">
          <div id="description-picture" style={style} />
          <p id="description-pictureName">{imageText}</p>
        </div>
      </div>
    );
  }
}


/*
 * Export default
 */
export default Description;
