import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Table extends React.Component {
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
          .map(({ description, tag, method, exchangeRates, currency, value }, i) => (
            <tr key={ i + 1 }>
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
            </tr>
          )) }
      </table>
    );
  }
}

Table.propTypes = {
  walletState: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  walletState: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
