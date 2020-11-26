import React, { useState } from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import { Input } from "../../../shared/components";
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
  const { cadastrar } = props;

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [nome, setNome] = useState("");
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
          <Grid className={classes.containerInputUsuario}>
            <Grid className={classes.containerSingleInput}>
              <Input
                id="email"
                value={email}
                label="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid className={classes.containerSingleInput}>
              <Input
                id="senha"
                value={senha}
                type="password"
                label="senha"
                onChange={(e) => setSenha(e.target.value)}
              />
            </Grid>
            <Grid className={classes.containerSingleInput}>
              <Input
                id="usuario"
                value={usuario}
                label="usuario"
                onChange={(e) => setUsuario(e.target.value)}
              />
            </Grid>
            <Grid className={classes.containerSingleInput}>
              <Input
                id="nome"
                value={nome}
                label="nome da empresa"
                onChange={(e) => setNome(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid className={classes.containerInputUsuario}>
            <Grid className={classes.containerSingleInput}>
              <Input
                id="estado"
                value={estado}
                label="estado"
                onChange={(e) => setEstado(e.target.value)}
              />
            </Grid>
            <Grid className={classes.containerSingleInput}>
              <Input
                id="cidade"
                value={cidade}
                label="cidade"
                onChange={(e) => setCidade(e.target.value)}
              />
            </Grid>
            <Grid className={classes.containerSingleInput}>
              <Input
                id="bairro"
                value={bairro}
                label="bairro"
                onChange={(e) => setBairro(e.target.value)}
              />
            </Grid>
            <Grid className={classes.containerSingleInput}>
              <Input id="cep" value={cep} label="cep" onChange={(e) => setCep(e.target.value)} />
            </Grid>
          </Grid>
          <Grid>
            <Grid className={classes.containerSingleInput}>
              <Input
                id="logradouro"
                value={logradouro}
                label="logradouro"
                onChange={(e) => setLogradouro(e.target.value)}
              />
            </Grid>
            <Grid className={classes.containerSingleInput}>
              <Input
                id="numero"
                value={numero}
                label="numero"
                onChange={(e) => setNumero(e.target.value)}
              />
            </Grid>
            <Grid className={classes.containerSingleInput}>
              <Input
                id="complemento"
                value={complemento}
                label="complemento"
                onChange={(e) => setComplemento(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container item justify="center" className={classes.containerButtons}>
          <Button
            className={classes.button}
            onClick={() =>
              cadastrar(
                {
                  usuario: {
                    email,
                    senha,
                    usuario,
                    nome,
                  },
                  endereco: {
                    estado,
                    cidade,
                    bairro,
                    cep,
                    logradouro,
                    numero,
                    complemento,
                  },
                },
                () => {
                  history.push("/home");
                }
              )
            }
          >
            Cadastrar
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cadastro;
