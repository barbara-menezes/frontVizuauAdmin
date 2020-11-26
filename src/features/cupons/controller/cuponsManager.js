import * as cupomService from './cupomService';
import { NotificationError } from '../../../shared/components';

export const listaCupons = async () => {
  try {
    const { data } = await cupomService.listaCupons();
    console.log(data);
    return data.cupons;
  } catch (e) {
    console.log(e);
    const { data } = e.response;
    throw new NotificationError(data.error, 'error');
  }
};

export const removerCupons = async (cupomId) => {
  try {
    await cupomService.removerCupons(cupomId);
  } catch (e) {
    const { data } = e.response;
    throw new NotificationError(data.error, 'error');
  }
};

export const liberarCupom = async (cupomId) => {
  try {
    await cupomService.liberarCupom(cupomId);
  } catch (e) {
    const { data } = e.response;
    throw new NotificationError(data.error, 'error');
  }
};


export const editarCupom = async (cupom) => {
  try {
    if (cupom.id) await cupomService.editarCupom(cupom);
    else await cupomService.criarCupom(cupom);
  } catch (e) {
    const { data } = e.response;
    throw new NotificationError(data.error, 'error');
  }
};

export const obterCupom = async (cupomId) => {
  try {
    const { data } = await cupomService.obterCupom(cupomId);
    return data.cupons;
  } catch (e) {
    const { data } = e.response;
    throw new NotificationError(data.error, 'error');
  }
};
