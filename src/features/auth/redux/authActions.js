export const SETUSER = "auth/SETUSER";

export const setUser = (user) => ({
  type: SETUSER,
  payload: user,
});
