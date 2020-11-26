import React from 'react';
import {
  Box,
  Container,
  TextField,
  makeStyles,
  Grid,
  Checkbox,
  FormControlLabel
} from '@material-ui/core';
import * as Yup from 'yup';
import Step from './Step';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  cadastroContainer: {
    backgroundColor: 'white',
    padding: 50,
    borderRadius: 20
  },
  timer: {
    width: 200
  },
  containerTimer: {
    paddingTop: 20,
    paddingBottom: 20
  }
}));

const campos = [{ name: 'nome', label: 'nome' }];

const validations = Yup.object().shape({
  nome: Yup.string().max(255).required('Nome é obrigatório')
});

const getInitialState = (cadastro) => {
  const {
    nome,
    atend_domicilio,
    horario_func_inicio,
    horario_func_fim
  } = cadastro;
  return { nome, atend_domicilio, horario_func_inicio, horario_func_fim };
};

const StepEmpresa = (props) => {
  const { nextStep, previousStep, cadastro } = props;
  const initialState = getInitialState(cadastro);
  const stepProps = {
    nextStep,
    previousStep,
    initialState,
    validations
  };
  const classes = useStyles();
  return (
    <Step
      {...stepProps}
      render={({ touched, errors, handleBlur, handleChange, values }) => (
        <Grid container justify="space-between">
          <TextField
            error={Boolean(touched.nome && errors.nome)}
            helperText={touched.nome && errors.nome}
            fullWidth
            label="Nome da Empresa"
            margin="normal"
            name="nome"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.nome}
            variant="outlined"
          />
          <Grid
            container
            justify="space-between"
            className={classes.containerTimer}
          >
            <TextField
              error={Boolean(
                touched.horario_func_inicio && errors.horario_func_inicio
              )}
              helperText={
                touched.horario_func_inicio && errors.horario_func_inicio
              }
              label="Horário de Abertura"
              name="horario_func_inicio"
              value={values.horario_func_inicio}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 300
              }}
              type="time"
              onBlur={handleBlur}
              onChange={handleChange}
              variant="outlined"
              className={classes.timer}
            />
            <TextField
              error={Boolean(
                touched.horario_func_fim && errors.horario_func_fim
              )}
              helperText={touched.horario_func_fim && errors.horario_func_fim}
              label="Horário de Fechar"
              name="horario_func_fim"
              value={values.horario_func_fim}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 300
              }}
              type="time"
              onBlur={handleBlur}
              onChange={handleChange}
              className={classes.timer}
              variant="outlined"
            />
          </Grid>
          <FormControlLabel
            control={
              <Checkbox
                error={Boolean(
                  touched.atend_domicilio && errors.atend_domicilio
                )}
                helperText={touched.atend_domicilio && errors.atend_domicilio}
                name="atend_domicilio"
                checked={values.atend_domicilio}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label="Você faz atendimento a domicílio?"
          />
        </Grid>
      )}
    />
  );
};

export default StepEmpresa;
