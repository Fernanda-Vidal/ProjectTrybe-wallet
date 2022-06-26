import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions';

class Table extends React.Component {
  handleClick = (id) => {
    const { walletDispatch } = this.props;
    walletDispatch(id);
  }

  render() {
    const { walletState } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        { walletState
          .map(({ description, tag, method, exchangeRates, currency, value, id }) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{Number(value).toFixed(2)}</td>
              <td>{exchangeRates[currency].name}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>
                {
                  Number(value * exchangeRates[currency].ask)
                    .toFixed(2)
                }
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.handleClick(id) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          )) }
      </table>
    );
  }
}

Table.propTypes = {
  walletDispatch: PropTypes.func.isRequired,
  walletState: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  walletState: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  walletDispatch: (id) => dispatch(removeExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
