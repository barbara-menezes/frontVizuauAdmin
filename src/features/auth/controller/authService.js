import axios from 'axios';

export const login = (email, senha) =>
  axios.post(`${process.env.REACT_APP_.ENDPOINT_AUTHENTICATION}/sessions`, {
    email,
    senha
  });

export const cadastrar = (cadastro) =>
  axios.post(
    `${process.env.REACT_APP_.ENDPOINT_AUTHENTICATION}/usuarios/profissionais`,
    cadastro
  );
