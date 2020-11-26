import React from "react";
import { FormControl, InputLabel, InputBase, withStyles } from "@material-ui/core";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#E7FFE5",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    color: "#AD68B7",
    fontWeight: "bold",
    padding: 10,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const BootstrapLabel = withStyles((theme) => ({
  root: {
    color: "#AD68B7",
    fontWeight: "bold",
    fontSize: 18,
    "&:focus": {
      color: "#AD68B7",
    },
  },
}))(InputLabel);

const Input = (props) => {
  const { label, id } = props;
  return (
    <FormControl>
      <BootstrapLabel shrink htmlFor={id}>
        {label}
      </BootstrapLabel>
      <BootstrapInput {...props} />
    </FormControl>
  );
};

export default Input;
