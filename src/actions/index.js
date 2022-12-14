// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST_COIN = 'REQUEST_COIN';
export const RECEIVED_COIN = 'RECEIVED_COIN';
export const SAVE_EXPENSES = 'ADD_EXPENSES';
export const REMOVE = 'REMOVE';
export const EDIT = 'EDIT';
export const UPDATE = 'UPDATE';

export const addEmailState = (email) => ({ type: SAVE_EMAIL, email });

const requestCoin = () => ({ type: REQUEST_COIN });

const receivedCoin = (coin) => ({ type: RECEIVED_COIN, coin });

export const thunkCoin = () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    dispatch(requestCoin());
    return fetch(url)
      .then((response) => response.json())
      .then((coin) => dispatch(receivedCoin(coin)));
  };
};

const addExpenses = (payload) => ({ type: SAVE_EXPENSES, payload });

export const thunkExpenses = (state) => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  return (dispatch) => fetch(url)
    .then((response) => response.json())
    .then((coin) => dispatch(addExpenses({ ...state, exchangeRates: coin })));
};

export const removeExpense = (id) => ({ type: REMOVE, id });

export const editExpense = (id, exchangeRates) => ({ type: EDIT, id, exchangeRates });

export const updateExpense = (expense) => ({
  type: UPDATE,
  expense,
});
