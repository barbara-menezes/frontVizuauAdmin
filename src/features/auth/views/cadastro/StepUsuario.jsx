import React from 'react';
import { TextField, Grid, makeStyles } from '@material-ui/core';
import * as Yup from 'yup';
import Step from './Step';

const useStyles = makeStyles((theme) => ({
  TextField: {
    maxWidth: 300
  }
}));

const campos = [
  { name: 'email', label: 'Email' },
  { name: 'senha', label: 'Senha', type: 'password' },
  { name: 'usuario', label: 'Usuário' }
];

const validations = Yup.object().shape({
  email: Yup.string()
    .email('Precisa ser um email válido')
    .max(255)
    .required('Email é obrigatório'),
  senha: Yup.string().max(255).required('Senha é obrigatório'),
  usuario: Yup.string().max(255).required('O nome do usuário é obrigatório')
});

const getInitialState = (cadastro) => {
  const { email, senha, usuario } = cadastro;
  return { email, senha, usuario };
};

const StepUsuario = (props) => {
  const { nextStep, cadastro } = props;
  const classes = useStyles();
  const initialState = getInitialState(cadastro);
  const stepProps = { nextStep, initialState, validations };
  return (
    <Step
      {...stepProps}
      render={({ touched, errors, handleBlur, handleChange, values }) => (
        <Grid container justify="center">
          {campos.map(({ name, label, type }) => (
            <TextField
              className={classes.TextField}
              error={Boolean(touched[name] && errors[name])}
              fullWidth
              helperText={touched[name] && errors[name]}
              label={label}
              margin="normal"
              type={type}
              name={name}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values[name]}
              variant="outlined"
            />
          ))}
        </Grid>
      )}
    />
  );
};

export default StepUsuario;
