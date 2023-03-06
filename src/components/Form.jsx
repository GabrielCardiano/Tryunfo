import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="input-name">
          Nome
          <input
            id="input-name"
            type="text"
            name="name"
            data-testid="name-input"
          />
        </label>

        <label htmlFor="input-textarea">
          Descrição
          <textarea
            id="input-textarea"
            name="description"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="input-attr01">
          Atributo 01
          <input
            id="input-attr01"
            type="number"
            name="attr01"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="input-attr02">
          Atributo 02
          <input
            id="input-attr02"
            type="number"
            name="attr02"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="input-attr03">
          Atributo 03
          <input
            id="input-attr03"
            type="number"
            name="attr03"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="input-image">
          Imagem
          <input
            id="input-image"
            type="text"
            name="img"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="input-rarity">
          Raridade
          <select
            id="input-rarity"
            name="rarity"
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label
          htmlFor="input-checkbox"
        >
          Super Trybe Trunfo
          <input
            id="input-checkbox"
            type="checkbox"
            name="check"
            data-testid="trunfo-input"
          />
        </label>

        <button
          type="button"
          data-testid="save-button"
          disabled
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
