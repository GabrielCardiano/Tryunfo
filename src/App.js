import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './css/App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      attr01: '',
      attr02: '',
      attr03: '',
      img: '',
      rarity: '',
      check: false,
      card: [],
      hasTrunfo: false,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSaveBtn = (event) => {
    event.preventDefault();

    const {
      name,
      description,
      attr01,
      attr02,
      attr03,
      img,
      rarity,
      check,
    } = this.state;

    const addCard = {
      name,
      description,
      attr01,
      attr02,
      attr03,
      img,
      rarity,
      check,
    };
    // console.log(addCard);

    this.setState((settedState) => ({
      card: [addCard, ...settedState.card],
      name: '',
      description: '',
      attr01: '0',
      attr02: '0',
      attr03: '0',
      img: '',
      rarity: '',
      check: false,
      hasTrunfo: [addCard, ...settedState.card]
        .some((superTrunfo) => superTrunfo.check === true),
    }));
  };

  render() {
    const {
      name,
      description,
      attr01,
      attr02,
      attr03,
      img,
      rarity,
      check,
      hasTrunfo,
    } = this.state;

    const test1 = name.length > 0
      && description.length > 0
      && img.length > 0;

    const test2 = attr01 >= '0' && attr01 <= '90'
      && attr02 >= '0' && attr02 <= '90'
      && attr03 >= '0' && attr03 <= '90';

    const test3 = parseInt(attr01, 10)
      + parseInt(attr02, 10)
      + parseInt(attr03, 10) <= '210';

    const isSubmitValid = test1 && test2 && test3;

    const { card: cardList } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <main>
          <Form
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attr01 }
            cardAttr2={ attr02 }
            cardAttr3={ attr03 }
            cardImage={ img }
            cardRare={ rarity }
            cardTrunfo={ check }
            onInputChange={ this.handleChange }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ !isSubmitValid }
            onSaveButtonClick={ this.handleSaveBtn }
          />
          <Card
            cardName={ name }
            cardDescription={ description }
            cardAttr1={ attr01 }
            cardAttr2={ attr02 }
            cardAttr3={ attr03 }
            cardImage={ img }
            cardRare={ rarity }
            cardTrunfo={ check }
            // onInputChange={ this.handleChange }
            // hasTrunfo={ }
            // isSaveButtonDisabled={ !isSubmitValid }
            // onSaveButtonClick={ this.handleSaveBtn }
          />
        </main>
        <section id="cardList-section">
          <h3>Todas as Cartas</h3>
          {
            cardList.map((card) => (
              <Card
                key={ card.name }
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
        </section>
      </div>
    );
  }
}

export default App;
