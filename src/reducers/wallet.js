import { RECEIVED_COIN, REQUEST_COIN, SAVE_EXPENSES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada

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
      expenses: action.value,
    };
  default:
    return state;
  }
};

export default wallet;
