import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import * as Yup from 'yup';
import Step from './Step';

const campos = [
  { name: 'estado', label: 'estado' },
  { name: 'cidade', label: 'Cidade' },
  { name: 'cep', label: 'CEP', type: 'number' },
  { name: 'bairro', label: 'Bairro' },
  { name: 'logradouro', label: 'Logradouro' },
  { name: 'numero', label: 'Número', type: 'number' },
  { name: 'complemento', label: 'Complemento' }
];

const validations = Yup.object().shape({
  estado: Yup.string().max(255).required('Estado é obrigatório'),
  cidade: Yup.string().max(255).required('Cidade é obrigatório'),
  bairro: Yup.string().max(255).required('Bairro é obrigatório'),
  cep: Yup.number().integer().required('CEP é obrigatório'),
  logradouro: Yup.string().max(255).required('Logradouro é obrigatório'),
  numero: Yup.number().integer().required('Número é obrigatório'),
  complemento: Yup.string().max(255).required('Complemento é obrigatório')
});

const getInitialState = (cadastro) => {
  const {
    estado,
    cidade,
    bairro,
    cep,
    logradouro,
    numero,
    complemento
  } = cadastro;
  return { estado, cidade, bairro, cep, logradouro, numero, complemento };
};

const StepEndereco = (props) => {
  const { nextStep, previousStep, cadastro } = props;
  const initialState = getInitialState(cadastro);
  const stepProps = {
    nextStep,
    previousStep,
    initialState,
    validations,
    lastStep: true
  };

  return (
    <Step
      {...stepProps}
      render={({ touched, errors, handleBlur, handleChange, values }) => (
        <Grid container justify="space-between">
          {campos.map(({ name, label, type }) => (
            <Grid key={name} item>
              <TextField
                error={Boolean(touched[name] && errors[name])}
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
            </Grid>
          ))}
        </Grid>
      )}
    />
  );
};

export default StepEndereco;
