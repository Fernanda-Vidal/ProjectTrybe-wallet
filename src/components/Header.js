import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import '../css/wallet.css';

class Header extends React.Component {
  render() {
    const { userState } = this.props;
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
            <span data-testid="total-field">Despesa Total: 0</span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  userState: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userState: state.user.email,
});

export default connect(mapStateToProps)(Header);
