import React, { useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  makeStyles,
  Grid,
  Stepper,
  Step,
  StepLabel
} from '@material-ui/core';
import { Page } from '../../../../shared/components';
import StepUsuario from './StepUsuario';
import StepEmpresa from './StepEmpresa';
import StepEndereco from './StepEndereco';

const steps = ['Usuário', 'Empresa', 'Endereço'];

const initialState = {
  email: '',
  senha: '',
  usuario: '',
  estado: '',
  cidade: '',
  bairro: '',
  cep: '',
  logradouro: '',
  numero: '',
  complemento: '',
  nome: '',
  atend_domicilio: false,
  horario_func_inicio: '',
  horario_func_fim: ''
};

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
  }
}));

const CadastroView = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [step, setStep] = useState(0);
  const [cadastro, setCadastro] = useState(initialState);

  const { cadastrar } = props;

  const nextStep = (values) => {
    const cadastroAtualizado = atualizarCadastro(values);
    if (step === 2)
      cadastrar(cadastroAtualizado, () => {
        history.push('/servicos');
      });
    else changeStep(1);
  };
  const previousStep = (values) => {
    atualizarCadastro(values);
    changeStep(-1);
  };

  const atualizarCadastro = (dados) => {
    const cadastroAtualizado = { ...cadastro, ...dados };
    setCadastro(cadastroAtualizado);
    return cadastroAtualizado;
  };

  const changeStep = (increment) => setStep(step + increment);

  const stepProps = { nextStep, previousStep, cadastro };

  return (
    <Page className={classes.root} title="Cadastro">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm" className={classes.cadastroContainer}>
          <Stepper activeStep={step}>
            {steps.map((label) => (
              <Step>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {step === 0 && <StepUsuario {...stepProps} />}
          {step === 1 && <StepEmpresa {...stepProps} />}
          {step === 2 && <StepEndereco {...stepProps} />}
          {step === 0 && (
            <Grid container justify="center">
              <Typography color="textSecondary" variant="body1">
                Já tem uma conta?{' '}
                <Link component={RouterLink} to="/login" variant="h6">
                  Entre aqui
                </Link>
              </Typography>
            </Grid>
          )}
        </Container>
      </Box>
    </Page>
  );
};

export default CadastroView;
