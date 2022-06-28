// import { element } from 'prop-types';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { thunkExpenses, updateExpense } from '../actions';
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

  generateSelect = (array) => (
    array.map((item, i) => (
      <option name={ item } key={ `${item}-${i}` }>{item}</option>
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
    const { walletDispatch, editWallet, upDate, exchangeRates } = this.props;
    const saveState = { ...this.state };

    if (!editWallet) {
      walletDispatch(saveState);
      this.setState((previous) => ({
        id: previous.id + 1,
        value: 0,
        description: '',
      }));
    } else {
      const { walletId: id } = this.props;
      upDate({ ...this.state, id, exchangeRates });
    }
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { walletState, editWallet } = this.props;
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
            <button type="button" onClick={ this.handleClick }>
              {
                !editWallet ? 'Adicionar despesa' : 'Editar despesa'
              }
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Forms.propTypes = {
  editWallet: PropTypes.bool.isRequired,
  upDate: PropTypes.func.isRequired,
  walletDispatch: PropTypes.func.isRequired,
  walletId: PropTypes.number.isRequired,
  walletState: PropTypes.func.isRequired,
  exchangeRates: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

const mapStateToProps = (state) => ({
  walletState: state.wallet.currencies,
  editWallet: state.wallet.editor,
  walletId: state.wallet.idToEdit,
  exchangeRates: state.wallet.exchangeRates,
  // expense: state.wallet.expenses.find(({ id }) => id === state.wallet.idToEdit),
});

const mapDispatchToProps = (dispatch) => ({
  walletDispatch: (state) => dispatch(thunkExpenses(state)),
  upDate: (expense) => dispatch(updateExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
