import * as authManager from './authManager';
import * as authActions from '../redux/authActions';
import { showLoading } from '../../loading';
import { notify } from '../../notification';
import AuthUtil from '../../../shared/auth';

export const login = (email, senha, onsucess) => async (dispatch) => {
  try {
    dispatch(showLoading(true));
    const { usuario, token } = await authManager.login(email, senha);
    console.log(usuario, token);
    storeUserData({ user: usuario, token }, onsucess, dispatch);
  } catch (e) {
    dispatch(notify(e));
  } finally {
    dispatch(showLoading(false));
  }
};

const montarCadastro = (values) => {
  const {
    email,
    senha,
    usuario,
    estado,
    cidade,
    bairro,
    cep,
    logradouro,
    numero,
    complemento,
    nome,
    atend_domicilio,
    horario_func_inicio,
    horario_func_fim
  } = values;
  const user = { nome, email, senha, usuario, id_tipo_usuario: 2 };
  const endereco = {
    estado,
    cidade,
    bairro,
    cep,
    logradouro,
    numero,
    complemento
  };
  const usuario_profissionais = {
    atend_domicilio,
    horario_func_inicio,
    horario_func_fim
  };
  return { usuario: user, endereco, usuario_profissionais };
};

export const cadastrar = (values, onsucess) => async (dispatch) => {
  try {
    const cadastro = montarCadastro(values);
    dispatch(showLoading(true));
    const { profissionais, token } = await authManager.cadastrar(cadastro);
    storeUserData({ user: profissionais.Usuario, token }, onsucess, dispatch);
  } catch (e) {
    dispatch(notify(e));
  } finally {
    dispatch(showLoading(false));
  }
};

const storeUserData = (data, callback, dispatch) => {
  AuthUtil.storeUserData(data);
  dispatch(authActions.setUser(data));
  callback(data);
};
