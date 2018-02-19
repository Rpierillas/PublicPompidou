/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */
import Skillbar from 'src/containers/Skillbar';
/*
 * Code
 */
class Character extends React.Component {
  /**
   * PropTypes
   * @type {Object}
   */
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    chosenStat: PropTypes.string,
    determination: PropTypes.number.isRequired,
    finesse: PropTypes.number.isRequired,
    intellect: PropTypes.number.isRequired,
  }

  static defaultProps = {
    chosenStat: '',
  }


  /**
   * Handlers
   * @type {Function}
   */
  getBack = (evt) => {
    evt.preventDefault();
    this.props.actions.restartChar();
  }

  handleChange = (evt) => {
    const { value } = evt.target;
    this.props.actions.nameTyping(value);
  }

  handleGenderChange = (evt) => {
    const { value } = evt.target;
    this.props.actions.changeGender(value);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, gender, chosenStat } = this.props;
    if (name !== '' &&
    gender !== '' &&
    chosenStat !== '') {
      this.props.actions.selectCharacter();
      this.props.actions.calculateHp();
      this.props.actions.saveGame();
    }
  }

  render() {
    const {
      name, gender, determination, finesse, intellect,
    } = this.props;

    return (
      <div>
        <form
          id="character"
          onSubmit={this.handleSubmit}
        >
          <h1 className="character-creation-title">
            <p>Dispositif biométrique hors-ligne. <span>[Guru Meditation : #302.00ff6b]</span>
            </p>
          Veuillez entrer manuellement vos informations personelles.
          </h1>
          <div id="gender-selection-menu">
            <label htmlFor="genderChoice1" className={(gender === 'male' ? 'checked' : '')}>
              <input
                type="radio"
                id="genderChoice1"
                name="gender"
                value="male"
                onClick={this.handleGenderChange}
              />
              <span>♂</span>
            </label>
            <div>Renseignez votre genre.</div>
            <label htmlFor="genderChoice2" className={(gender === 'female' ? 'checked' : '')}>
              <input
                type="radio"
                id="genderChoice2"
                name="gender"
                value="female"
                onClick={this.handleGenderChange}
              />
              <span>♀</span>
            </label>
          </div>

          <input
            id="inputcharacter"
            type="text"
            placeholder="Entrez un nom de code valide"
            onChange={this.handleChange}
            value={name}
          />
          <h1 className="character-creation-title">
            Veuillez ajuster les résultats de vos tests d'aptitude.
            <p>
              Toute surévaluation frauduleuse entraînera des répercussions sévères.
            </p>
          </h1>
          <Skillbar
            stat={determination}
            statName="Détermination"
            statIcon="ᨒ"
            forHTML="statChoice1"
            value="determination"
          />
          <Skillbar
            stat={finesse}
            statName="Finesse"
            statIcon="༄"
            forHTML="statChoice2"
            value="finesse"
          />
          <Skillbar
            stat={intellect}
            statName="Intellect"
            statIcon="༓"
            forHTML="statChoice3"
            value="intellect"
          />
          <div id="character-buttons">
            <button onClick={this.getBack} className="previous-next"> ⫷ Revenir en arrière </button>
            <input className="previous-next" type="submit" value="Commencer la mission ⫸" />
          </div>
        </form>
      </div>
    );
  }
}
/*
 * Export default
 */
export default Character;
