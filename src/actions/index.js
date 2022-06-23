// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST_COIN = 'REQUEST_COIN';
export const RECEIVED_COIN = 'RECEIVED_COIN';
export const ERROR = 'ERROR';

export const addEmailState = (email) => ({ type: SAVE_EMAIL, email });

const requestCoin = () => ({
  type: REQUEST_COIN,
});

const receivedCoin = (coin) => ({
  type: RECEIVED_COIN,
  coin,
});

// const errorAPI = (error) => ({
//   type: ERROR,
//   error,
// });

export const thunkCoin = () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    dispatch(requestCoin());
    return fetch(url)
      .then((response) => response.json())
      .then((coin) => dispatch(receivedCoin(coin)));
    //   .catch((error) => dispatch(errorAPI(error)));
  };
};
