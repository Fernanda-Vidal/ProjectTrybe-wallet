// import { element } from 'prop-types';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addExpenses } from '../actions';
import '../css/wallet.css';

class Forms extends React.Component {
  state = {
    inputValor: 0,
    inputMoeda: '',
    inputMetodo: '',
    inputTag: '',
    inputDescricao: '',
  }

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

  render() {
    const { inputValor, inputMoeda, inputMetodo, inputTag, inputDescricao } = this.state;
    const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const { walletState, walletDispatch } = this.props;
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
                name="inputValor"
                value={ inputValor }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="moeda">
              Moeda
              <select
                id="moeda"
                name="inputMoeda"
                value={ inputMoeda }
                onChange={ this.handleChange }
              >
                {this.generateSelect(walletState)}
              </select>
            </label>
            <label htmlFor="metodo">
              Método de pagamento
              <select
                data-testid="method-input"
                name="inputMetodo"
                value={ inputMetodo }
                onChange={ this.handleChange }
              >
                {this.generateSelect(paymentMethod)}
              </select>
            </label>
            <label htmlFor="tag">
              Tag
              <select
                data-testid="tag-input"
                name="inputTag"
                value={ inputTag }
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
                name="inputDescricao"
                value={ inputDescricao }
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="button"
              onClick={ walletDispatch(this.state) }
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
  walletDispatch: (state) => dispatch(addExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
