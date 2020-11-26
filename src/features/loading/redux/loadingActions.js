export const SHOW_LOADING = "loading/SHOW_LOADING";

export const showLoading = (loading) => {
  return {
    type: SHOW_LOADING,
    payload: loading,
  };
};
