import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import '../css/wallet.css';

class Header extends React.Component {
  render() {
    const { userState, walletState } = this.props;
    console.log(walletState);
    const expense = walletState.reduce((acc, curr) => {
      const { currency, exchangeRates, value } = curr;
      const { ask } = exchangeRates[currency];
      acc += (Number(value) * ask);
      return acc;
    }, 0).toFixed(2);

    return (
      <div className="container-header">
        <header>
          <div className="container-h1">
            <h1>TrybeWallet</h1>
          </div>
          <div className="container-span">
            <span data-testid="email-field">
              Email:
              {userState}
            </span>
            <span>Despesa Total:</span>
            <span
              data-testid="total-field"
            >
              {expense}
            </span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  userState: PropTypes.string.isRequired,
  walletState: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  userState: state.user.email,
  walletState: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
