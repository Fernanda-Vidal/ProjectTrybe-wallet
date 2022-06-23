import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
          <span data-testid="email-field">Email:</span>
          <span data-testid="total-field">Despesa Total: 0</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
      </div>
    );
  }
}

export default Header;
