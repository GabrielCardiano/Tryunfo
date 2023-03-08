import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Cardlist extends React.Component {
  render() {
    const { cardArray } = this.props;

    return (
      <section id="cardList-section">
        <h2>Todas as Cartas</h2>
        <div>
          {
            cardArray.map((card, index) => (
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
            ))
          }
        </div>
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
};

export default Cardlist;
