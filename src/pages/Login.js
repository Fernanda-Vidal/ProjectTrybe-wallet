import PropTypes from 'prop-types';
import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    senha: '',
    isDisable: true,
  }

  // Pesquisa realizada: https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
  isValidEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });

    const min = 5;

    const { senha, email } = this.state;
    if (senha.length >= min && this.isValidEmail(email) === true) {
      this.setState({ isDisable: false });
    }
  };

  handleClick = () => {
    const { history } = this.props;
    history.push('/carteira');
  }

  render() {
    const { email, senha, isDisable } = this.state;
    return (
      <div>
        <div>
          <form>
            <h1>TrybeWallet</h1>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                value={ email }
                name="email"
                placeholder="e-mail"
                data-testid="email-input"
                onChange={ this.handleChange }
              />
            </label>
            <br />
            <label htmlFor="senha">
              Senha:
              <input
                type="password"
                value={ senha }
                name="senha"
                placeholder="senha"
                data-testid="password-input"
                onChange={ this.handleChange }
                required
              />
            </label>
            <br />
            <button
              type="button"
              onClick={ this.handleClick }
              disabled={ isDisable }
            >
              Entrar
            </button>
          </form>
        </div>
      </div>);
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
