import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
          <span>Email:</span>
          <span>Despesa Total: BRL</span>
        </header>
        <div>
          <form>
            <label htmlFor="valor">
              Valor:
              <input type="number" />
            </label>
            <label htmlFor="moeda">
              Moeda
              <select>USD</select>
            </label>
            <label htmlFor="metodo">
              Método de pagamento:
              <select>Método</select>
            </label>
            <label htmlFor="tag">
              Tag:
              <select>Tag</select>
            </label>
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

export default Wallet;
