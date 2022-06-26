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
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
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
      value: 0,
      description: '',
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
            <label htmlFor="value">
              Valor:
              <input
                id="value"
                type="number"
                data-testid="value-input"
                name="value"
                value={ value }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="currency">
              Moeda
              <select
                id="currency"
                name="currency"
                value={ currency }
                onChange={ this.handleChange }
              >
                {this.generateSelect(walletState)}
              </select>
            </label>
            <label htmlFor="method">
              Método de pagamento
              <select
                id="method"
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
                id="tag"
                data-testid="tag-input"
                name="tag"
                value={ tag }
                onChange={ this.handleChange }
              >
                {this.generateSelect(arrayTag)}
              </select>
            </label>
            <label htmlFor="description">
              Descrição
              <input
                id="description"
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
