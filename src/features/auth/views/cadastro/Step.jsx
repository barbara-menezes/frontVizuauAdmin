import React from 'react';
import { Grid } from '@material-ui/core';
import { Formik } from 'formik';
import { Button, makeStyles } from '@material-ui/core';
import { ArrowForward, CheckCircle, ArrowBack } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  containerButton: {
    paddingTop: 20,
    paddingBottom: 20
  },
  button: {
    color: 'white'
  }
}));

const Step = (props) => {
  const {
    previousStep,
    nextStep,
    lastStep,
    initialState,
    validations,
    render
  } = props;
  const classes = useStyles();
  return (
    <Formik
      initialValues={initialState}
      validationSchema={validations}
      onSubmit={nextStep}
    >
      {(payload) => (
        <form onSubmit={payload.handleSubmit}>
          {render(payload)}
          <Grid
            container
            justify={previousStep ? 'space-between' : 'flex-end'}
            className={classes.containerButton}
          >
            {previousStep && (
              <Button
                color="secondary"
                variant="contained"
                className={classes.button}
                onClick={() => previousStep(payload.values)}
                startIcon={<ArrowBack />}
              >
                Anterior
              </Button>
            )}
            <Button
              color="secondary"
              variant="contained"
              type="submit"
              className={classes.button}
              endIcon={lastStep ? <CheckCircle /> : <ArrowForward />}
            >
              {lastStep ? 'Finalizar' : 'Próximo'}
            </Button>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default Step;
