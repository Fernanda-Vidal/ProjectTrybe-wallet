import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addEmailState } from '../actions';

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
    if (this.isValidEmail(email) === true && senha.length >= min) {
      this.setState({ isDisable: false });
    } else {
      this.setState({ isDisable: true });
    }
  };

  handleClick = () => {
    const { history, firstDispatch } = this.props;
    const { email } = this.state;
    firstDispatch(email);
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
  firstDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  firstDispatch: (email) => dispatch(addEmailState(email)),
});

export default connect(null, mapDispatchToProps)(Login);
