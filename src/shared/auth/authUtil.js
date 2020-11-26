import jwt from "jsonwebtoken";

export const storeUserData = (dados) => {
  const { user, token } = dados;
  console.log(dados);
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("user_id", user.id);
  sessionStorage.setItem("username", user.usuario);
  sessionStorage.setItem("email", user.email);
};

export const validateToken = () => {
  const token = sessionStorage.getItem("token");
  if (!token) return false;
  const { exp } = jwt.decode(token);
  return exp < new Date().getTime();
};

export const logout = (callback) => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user_id");
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("email");
  callback();
};
