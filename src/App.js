import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
      rarity: 'normal',
      check: false,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  // isSubmitBtnValid = (event) => {
  // //   // event.preventDefault();
  //   const { name, description, img, rarity } = this.state;

  // };

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
    } = this.state;

    const test1 = name.length > 0
      && description.length > 0
      && img.length > 0
      && rarity.length > 0;

    const test2 = attr01 >= '0' && attr01 <= '90'
      && attr02 >= '0' && attr02 <= '90'
      && attr03 >= '0' && attr03 <= '90';

    const test3 = parseInt(attr01, 10)
      + parseInt(attr02, 10)
      + parseInt(attr03, 10) <= '210';

    const isSubmitValid = test1 && test2 && test3;

    return (
      <div>
        <h1>Tryunfo</h1>
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
          // hasTrunfo={ }
          isSaveButtonDisabled={ !isSubmitValid }
        // onSaveButtonClick={ }
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
          onInputChange={ this.handleChange }
        // hasTrunfo={ }
        // isSaveButtonDisabled={ }
        // onSaveButtonClick={ }
        />
      </div>
    );
  }
}

export default App;
