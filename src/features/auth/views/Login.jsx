import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from '../../../shared/components/page/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  loginBox: {
    backgroundColor: 'white',
    padding: 50,
    borderRadius: 20,
    maxWidth: 500
  },
  logo:{
    width:412,
    height:205,
    borderRadius:30 
  },
  subTitle:{
    marginTop:10,
    color:'#546e7a',
    fontSize:'1rem'
  }
}));

const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { login } = props;

  return (
    <Page className={classes.root} title="Login">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm" className={classes.loginBox}>
          <Formik
            initialValues={{
              email: '',
              senha: ''
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('precisa ser um email válido')
                .max(255)
                .required('Email é obrigatório'),
              senha: Yup.string().max(255).required('Senha é obrigatória')
            })}
            onSubmit={({ email, senha }) => {
              login(email, senha, () => {
                history.push('/cupons');
              });
            }}
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
                <Box mb={3}>
                  <img src="logo.png" className={classes.logo} alt="logo vizuau"></img>
                  <Typography
                    className={classes.subTitle}
                    gutterBottom
                    variant="body2"
                    align="center"
                  >
                    Entre na plataforma do Administrador
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.senha && errors.senha)}
                  fullWidth
                  helperText={touched.senha && errors.senha}
                  label="Senha"
                  margin="normal"
                  name="senha"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.senha}
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
                    Entrar
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

export default Login;
