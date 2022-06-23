import React from 'react';
import InputSelect from './Select';
import '../css/wallet.css';

class Forms extends React.Component {
  render() {
    return (
      <div>
        <div>
          <form className="forms-wallet">
            <label htmlFor="valor">
              Valor:
              <input data-testid="value-input" type="number" />
            </label>
            <InputSelect
              data-testid="method-input"
              nome="Metodo"
              label="Metodo de pagamento"
            />
            <InputSelect nome="Moeda" label="Moeda" />
            <InputSelect data-testid="tag-input" nome="Tag" label="Tag" />
            <label htmlFor="descricao">
              <input data-testid="description-input" type="text" />
            </label>
            <button type="button">Adicionar despesa</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Forms;
