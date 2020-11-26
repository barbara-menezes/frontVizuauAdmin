import React, { useEffect } from 'react';
import { Formik } from 'formik';
import {
  Button,
  makeStyles,
  Box,
  Container,
  Typography,
  TextField
} from '@material-ui/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { Page } from '../../../shared/components';

const useStyles = makeStyles((theme) => ({
  containerButton: {
    paddingTop: 20,
    paddingBottom: 20
  },
  button: {
    color: 'white'
  },
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  editarContainer: {
    backgroundColor: 'white',
    padding: 50,
    borderRadius: 20,
    maxWidth: 500
  },
  header: {
    padding: '10px 30px',
    backgroundColor: theme.palette.background.dark
  },
  headerTitle: {
    fontWeight: 'bold',
    color: '#2D0C57'
  }
}));

const validations = Yup.object().shape({
  valor: Yup.number().positive().required('Valor do desconto dos cupons é obrigatório'),
  validade: Yup.string().max(50).required('A validade dos cupons é obrigatória'),
  quantidade: Yup.number().positive().required('Valor da quantidade de cupons é obrigatório')
});

const obterCupomId = (history) => {
  const pathname = history.location.pathname;
  return parseInt(pathname.substr(pathname.lastIndexOf('/') + 1));
};

const Step = (props) => {
  const { obterCupom, cupom, editarCupom } = props;
  const history = useHistory();
  const submit = (values) =>
    editarCupom(values, () => {
      history.push('/cupons');
    });

  const classes = useStyles();
  const idCupom = obterCupomId(history);
  console.log(idCupom)
  useEffect(() => {
    if (idCupom) obterCupom(idCupom);
  }, [idCupom]);

  return (
    <Page className={classes.root} title="Editar Cupom">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm" className={classes.editarContainer}>
          <Formik
            initialValues={cupom}
            validationSchema={validations}
            onSubmit={submit}
            enableReinitialize
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
                <form onSubmit={handleSubmit}>
                  <Box mb={3} className={classes.header}>
                    <Typography className={classes.headerTitle}>
                      {idCupom ? 'Editar Cupom' : 'Criar Cupom'}
                    </Typography>
                  </Box>
                  <TextField
                    error={Boolean(touched.valor && errors.valor)}
                    fullWidth
                    helperText={touched.valor && errors.valor}
                    label="Valor do cupom"
                    margin="normal"
                    name="valor"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.valor}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(touched.valor && errors.valor)}
                    fullWidth
                    helperText={touched.valor && errors.valor}
                    label="Validade do cupom"
                    margin="normal"
                    name="validade"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.validade}
                    variant="outlined"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    error={Boolean(touched.valor && errors.valor)}
                    fullWidth
                    helperText={touched.valor && errors.valor}
                    label="Quantidade de cupons"
                    margin="normal"
                    name="quantidade"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.quantidade}
                    variant="outlined"
                  />
                  <Box my={2}>
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Salvar
                  </Button>
                  </Box>
                </form>
              )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default Step;
