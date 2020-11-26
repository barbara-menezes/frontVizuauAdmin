import { useHistory } from "react-router-dom";

const history = useHistory();

export const goTo = (path) => {
  history.push(path);
};

export const goBack = () => {
  history.goBack();
};
