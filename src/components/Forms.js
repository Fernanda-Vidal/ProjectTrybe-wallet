// import { element } from 'prop-types';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { thunkExpenses } from '../actions';
import '../css/wallet.css';

class Forms extends React.Component {
  state = {
    id: 0,
    value: 0,
    currency: '',
    method: '',
    tag: '',
    description: '',
    exchangeRates: '',
  }

  // { id,     exchangeRates }
  generateSelect = (array) => (
    array.map((item, i) => (
      <option name={ item } key={ `${item}-${i}` }>{ item }</option>
    ))
  );

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { walletDispatch } = this.props;
    const saveState = { ...this.state };
    walletDispatch(saveState);

    this.setState((previous) => ({
      id: previous.id + 1,
    }));
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { walletState } = this.props;
    const arrayTag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        <div>
          <form className="forms-wallet">
            <label htmlFor="valor">
              Valor:
              <input
                type="number"
                data-testid="value-input"
                name="value"
                value={ value }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="moeda">
              Moeda
              <select
                id="moeda"
                name="currency"
                value={ currency }
                onChange={ this.handleChange }
              >
                {this.generateSelect(walletState)}
              </select>
            </label>
            <label htmlFor="metodo">
              Método de pagamento
              <select
                data-testid="method-input"
                name="method"
                value={ method }
                onChange={ this.handleChange }
              >
                {this.generateSelect(paymentMethod)}
              </select>
            </label>
            <label htmlFor="tag">
              Tag
              <select
                data-testid="tag-input"
                name="tag"
                value={ tag }
                onChange={ this.handleChange }
              >
                {this.generateSelect(arrayTag)}
              </select>
            </label>
            <label htmlFor="descricao">
              Descrição
              <input
                type="text"
                data-testid="description-input"
                name="description"
                value={ description }
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="button"
              onClick={ this.handleClick }
            >
              Adicionar despesa
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Forms.propTypes = {
  walletDispatch: PropTypes.func.isRequired,
  walletState: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  walletState: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  walletDispatch: (state) => dispatch(thunkExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
