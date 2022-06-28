import {
  EDIT, RECEIVED_COIN, REMOVE, REQUEST_COIN, SAVE_EXPENSES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: null, // valor numérico que armazena o id da despesa que esta sendo editada
  exchangeRates: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_COIN:
    return {
      ...state,
    };
  case RECEIVED_COIN:
    return {
      ...state,
      currencies: Object.keys(action.coin).filter((coin) => coin !== 'USDT'),
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case REMOVE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  case EDIT:
    return {
      ...state,
      editor: true,
      idToEdit: action.id,
      exchangeRates: action.exchangeRates,
    };
  default:
    return state;
  }
};

export default wallet;
