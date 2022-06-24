import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { thunkCoin } from '../actions';
import Forms from '../components/Forms';
import Header from '../components/Header';
import Table from '../components/Table';
import '../css/wallet.css';

class Wallet extends React.Component {
  componentDidMount() {
    const { importedThunk } = this.props;
    importedThunk();
  }

  render() {
    return (
      <div className="container-wallet">
        <Header />
        <Forms />
        <Table />
      </div>
    );
  }
}

Wallet.propTypes = {
  importedThunk: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  importedThunk: (coin) => dispatch(thunkCoin(coin)),
});

export default connect(null, mapDispatchToProps)(Wallet);
