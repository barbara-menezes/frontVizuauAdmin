import axios from 'axios';

export const listaCupons = () => axios.get(`${process.env.REACT_APP_.ENDPOINT_AUTHENTICATION}/cupons`);

export const removerCupons = (cupomId) =>
  axios.delete(
    `${process.env.REACT_APP_.ENDPOINT_AUTHENTICATION}/cupons/${cupomId}`
  );

export const liberarCupom = (cupomId) =>
  axios.post(
    `${process.env.REACT_APP_.ENDPOINT_AUTHENTICATION}/cupons/${cupomId}/liberar`
);

export const obterCupom = (cupomId) =>
  axios.get(
    `${process.env.REACT_APP_.ENDPOINT_AUTHENTICATION}/cupons/${cupomId}`
  );

export const editarCupom = (cupom) =>
  axios.put(
    `${process.env.REACT_APP_.ENDPOINT_AUTHENTICATION}/cupons/${cupom.id}`,
    {
      cupons: cupom
    }
  );

export const criarCupom = (cupons) =>
  axios.post(`${process.env.REACT_APP_.ENDPOINT_AUTHENTICATION}/cupons`, {
    cupons
  });
