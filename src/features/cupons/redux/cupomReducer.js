/* eslint-disable indent */
import { SETCUPONS, SETCUPOMEDITAR } from './cupomActions';

const INITIAL_STATE = {
  cupons: [],
  cupomEditar: { valor: 0, validade: '', quantidade: 0 }
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.type, action.payload);
  switch (action.type) {
    case SETCUPONS:
      return { ...state, cupons: action.payload };
    case SETCUPOMEDITAR:
      return { ...state, cupomEditar: action.payload };
    default:
      return state;
  }
};
