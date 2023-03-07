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
          // isSaveButtonDisabled={ }
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
