import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import '../css/CardList.css';

class Cardlist extends React.Component {
  render() {
    const { cardArray, onDeleteClick } = this.props;

    return (
      <section id="cardList-section">
        <h2>Todas as Cartas</h2>
        <section>
          {
            cardArray.map((card, index) => (
              <div id="card-button-div" key={ index }>
                <div id="saved-card">
                  <Card
                    key={ index }
                    cardName={ card.name }
                    cardDescription={ card.description }
                    cardAttr1={ card.attr01 }
                    cardAttr2={ card.attr02 }
                    cardAttr3={ card.attr03 }
                    cardImage={ card.img }
                    cardRare={ card.rarity }
                    cardTrunfo={ card.hasTrunfo }
                  />
                </div>
                <button
                  key={ index }
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => onDeleteClick(card.name) }
                >
                  Excluir
                </button>
              </div>
            ))
          }
        </section>
      </section>
    );
  }
}

Cardlist.propTypes = {
  cardArray: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string.isRequired,
      cardDescription: PropTypes.string.isRequired,
      cardAttr1: PropTypes.string.isRequired,
      cardAttr2: PropTypes.string.isRequired,
      cardAttr3: PropTypes.string.isRequired,
      cardImage: PropTypes.string.isRequired,
      cardRare: PropTypes.string.isRequired,
      cardTrunfo: PropTypes.bool.isRequired,
      hasTrunfo: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default Cardlist;
