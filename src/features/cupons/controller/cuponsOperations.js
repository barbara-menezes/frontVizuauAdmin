import * as cupomManager from './cuponsManager';
import * as cupomActions from '../redux/cupomActions';
import { showLoading } from '../../loading';
import { notify } from '../../notification';

export const listaCupons = () => async (dispatch) => {
  try {
    dispatch(showLoading(true));
    await findAllCupons(dispatch);
  } catch (e) {
    console.log(e);
    dispatch(notify(e));
  } finally {
    dispatch(showLoading(false));
  }
};

export const removerCupons = (cupomId) => async (dispatch) => {
  try {
    dispatch(showLoading(true));
    await cupomManager.removerCupons(cupomId);
    await findAllCupons(dispatch);
    dispatch(
      notify({ message: 'Cupom removido com sucesso', variant: 'success' })
    );
  } catch (e) {
    dispatch(notify(e));
  } finally {
    dispatch(showLoading(false));
  }
};

export const liberarCupom = (cupomId) => async (dispatch) => {
  try {
    dispatch(showLoading(true));
    await cupomManager.liberarCupom(cupomId);
    await findAllCupons(dispatch);
    dispatch(
      notify({ message: 'Cupom liberado com sucesso', variant: 'success' })
    );
  } catch (e) {
    dispatch(notify(e));
  } finally {
    dispatch(showLoading(false));
  }
};

export const obterCupom = (cupomId) => async (dispatch) => {
  try {
    dispatch(showLoading(true));
    console.log("cupomId", cupomId);
    const cupom = await cupomManager.obterCupom(cupomId);
    console.log("cupom", cupom);
    await dispatch(cupomActions.setCupomEditar(cupom));
  } catch (e) {
    dispatch(notify(e));
  } finally {
    dispatch(showLoading(false));
  }
};

export const editarCupom = (cupom, onSuccess) => async (dispatch) => {
  try {
    dispatch(showLoading(true));
    await cupomManager.editarCupom(cupom);
    if (cupom.id)
      dispatch(
        notify({ message: 'Cupom editado com sucesso', variant: 'success' })
      );
    else
      dispatch(
        notify({ message: 'Cupom criado com sucesso', variant: 'success' })
      );
    onSuccess();
  } catch (e) {
    dispatch(notify(e));
  } finally {
    dispatch(showLoading(false));
  }
};

const findAllCupons = async (dispatch) => {
  const cupons = await cupomManager.listaCupons();
  console.log(cupons);
  dispatch(cupomActions.setCupons(cupons));
};
