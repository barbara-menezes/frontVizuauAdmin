import React from "react";
import { Tooltip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize: theme.typography.body1.fontSize,
    padding: 10,
    maxWidth: 150,
  },
}));

const Dica = (props) => {
  const classes = useStyles();
  return <Tooltip arrow classes={classes} {...props} />;
};

export default Dica;
