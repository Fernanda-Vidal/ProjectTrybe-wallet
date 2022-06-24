// import { element } from 'prop-types';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import '../css/wallet.css';

class Forms extends React.Component {
  generateSelect = (array) => (
    array.map((item, i) => (
      <option name={ item } key={ `${item}-${i}` }>{ item }</option>
    ))
  );

  render() {
    const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { walletState } = this.props;
    const arrayTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        <div>
          <form className="forms-wallet">
            <label htmlFor="valor">
              Valor:
              <input type="number" data-testid="value-input" />
            </label>
            <label htmlFor="moeda">
              Moeda
              <select id="moeda">
                {this.generateSelect(walletState)}
              </select>
            </label>
            <label htmlFor="metodo">
              Método de pagamento
              <select
                data-testid="method-input"
              >
                {this.generateSelect(paymentMethod)}
              </select>
            </label>
            <label htmlFor="tag">
              Tag
              <select
                data-testid="tag-input"
              >
                {this.generateSelect(arrayTag)}
              </select>
            </label>
            <label htmlFor="descricao">
              Descrição
              <input type="text" data-testid="description-input" />
            </label>
            <button type="button">Adicionar despesa</button>
          </form>
        </div>
      </div>
    );
  }
}

Forms.propTypes = {
  walletState: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  walletState: state.wallet.currencies,
});

export default connect(mapStateToProps)(Forms);
