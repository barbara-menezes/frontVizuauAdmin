import * as authService from "./authService";
import { NotificationError } from "../../../shared/components";

export const login = async (email, senha) => {
  try {
    const { data } = await authService.login(email, senha);
    return data;
  } catch (e) {
    const { data } = e.response;
    throw new NotificationError(data.error, "error");
  }
};

export const cadastrar = async (cadastro) => {
  try {
    const { data } = await authService.cadastrar(cadastro);
    return data;
  } catch (e) {
    const { data } = e.response;
    throw new NotificationError(data.error, "error");
  }
};
