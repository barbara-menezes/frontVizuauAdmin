import React from "react";
import { Grid, makeStyles, Button } from "@material-ui/core";
import AuthUtil from "../../../shared/auth";
import { useHistory } from "react-router-dom";

const styles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    height: "100%",
  },
  containerLogin: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 10,
    border: 1,
    borderColor: "gray",
  },
  containerSingleInput: {
    padding: "15px 0px",
  },
  containerInputs: {
    marginTop: 20,
  },
  containerInputUsuario: {
    marginRight: 20,
  },
  containerButtons: {
    margin: "20px 0px",
  },
  button: {
    backgroundColor: "#AD68B7",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    width: 200,
    "&:hover": {
      backgroundColor: "#AD68B7",
      color: "white",
    },
  },
}));

const Cadastro = (props) => {
  const classes = styles();
  const history = useHistory();

  return (
    <Grid
      id="container-login"
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <Grid item className={classes.containerLogin}>
        <Grid item container justify="center">
          <img src={`${process.env.PUBLIC_URL}/logoVizuau.png`} alt="logo vizuau" />
        </Grid>
        <Grid item container diretion="column" className={classes.containerInputs}>
          <Grid>
            <Button
              className={classes.button}
              onClick={() => AuthUtil.logout(() => history.push("/login"))}
            >
              Logout Admin
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cadastro;
