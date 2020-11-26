import React from "react";
import { Typography } from "@material-ui/core";
import Dica from "../dica/Dica";

const Label = (props) => {
  const { variant, children, textoTooltip, ...outros } = props;
  const typography = (
    <Typography variant={variant} {...outros}>
      {children}
    </Typography>
  );
  return textoTooltip ? (
    <Dica title={textoTooltip} placement="top-end">
      {typography}
    </Dica>
  ) : (
    typography
  );
};

export default Label;
