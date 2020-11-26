import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Grid,
  makeStyles,
  Container
} from '@material-ui/core';
import { Check, Clear, Add, DateRange } from '@material-ui/icons';
import PerfectScrollbar from 'react-perfect-scrollbar';
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
  header: {
    padding: '30px 50px 201px',
    backgroundImage:'url(cabecalho.png)',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
  },
  headerTitle: {
    fontWeight: 'bold',
    color: '#2D0C57'
  },
  titleColuna: {
    color: '#6F12E7',
    fontWeight: 'bold'
  },
  accept:{
    color: '#0BCE83'
  },
  reject: {
    color: '#f44336'
  }
}));

const ListagemCupom = (props) => {
  const { cupons, listaCupons, removerCupom, liberarCupom } = props;
  console.log(props);
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    listaCupons();
  }, cupons.length);

  return (
    <Page className={classes.root} title="Editar Cupom">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Card>
            <Grid
              container
              justify="space-between"
              alignItems="center"
              className={classes.header}
            >
              <Typography className={classes.headerTitle}>
              </Typography>
              <Button color="secondary" className={classes.button} endIcon={<Add />} variant="contained" onClick={() => history.push("/cupons/edit")}>
                Cupom
              </Button>
            </Grid>
            <Divider />
            <PerfectScrollbar>
              <Box>
                <Table>
                  <TableHead>
                    <TableRow>
                    <TableCell
                        className={classes.titleColuna}
                        style={{ textAlign: 'left' }}
                      >
                        Código
                      </TableCell>
                      <TableCell
                        className={classes.titleColuna}
                        style={{ textAlign: 'center' }}
                      >
                        Valor
                      </TableCell>
                      <TableCell
                        className={classes.titleColuna}
                        style={{ width: 200, textAlign: 'center' }}
                      >
                        Validade
                      </TableCell>
                      <TableCell
                        className={classes.titleColuna}
                        style={{ width: 200, textAlign: 'center' }}
                      >
                        Status
                      </TableCell>
                      <TableCell
                        className={classes.titleColuna}
                        style={{ width: 200, textAlign: 'center' }}
                      >
                        Quantidade
                      </TableCell>
                      <TableCell
                        className={classes.titleColuna}
                        style={{ width: 200, textAlign: 'center' }}
                      >
                        Ações
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cupons.map((cupom) => (
                      <TableRow hover key={cupom.codigo}>
                        <TableCell style={{ textAlign: 'left' }}>
                          {"CP" + cupom.id}
                        </TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                          {cupom.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                          {Date(cupom.validade)}
                        </TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                          {cupom.status}
                        </TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                          {cupom.quantidade}
                        </TableCell>
                        <TableCell style={{ textAlign: 'center' }}>
                          <IconButton
                          className={classes.accept}
                            color="primary"
                            component="span"
                            onClick={() =>
                              liberarCupom(cupom.id, listaCupons)
                            }
                          >
                            <Check />
                          </IconButton>
                          <IconButton
                          className={classes.reject}
                            color="primary"
                            component="span"
                            onClick={() =>
                              removerCupom(cupom.id, listaCupons)
                            }
                          >
                            <Clear />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </PerfectScrollbar>
          </Card>
        </Container>
      </Box>
    </Page>
  );
};

export default ListagemCupom;
