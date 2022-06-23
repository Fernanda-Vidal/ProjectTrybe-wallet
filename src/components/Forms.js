import React from 'react';
import InputSelect from './Select';

class Forms extends React.Component {
  render() {
    return (
      <div>
        <div>
          <form>
            <label htmlFor="valor">
              Valor:
              <input type="number" />
            </label>
            <InputSelect nome="Método de pagamento:" />
            <InputSelect nome="Tag:" />
            <InputSelect />
            <label htmlFor="descricao">
              <input type="text" />
            </label>
            <button type="button">Adicionar despesa</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Forms;
