export const SETCUPONS = 'cupom/SETCUPONS';
export const SETCUPOMEDITAR = 'cupom/SETCUPOMEDITAR';

export const setCupons = (cupons) => ({
  type: SETCUPONS,
  payload: cupons
});

export const setCupomEditar = (cupom) => ({
  type: SETCUPOMEDITAR,
  payload: cupom
});
