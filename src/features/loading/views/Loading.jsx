import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MiuCircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { Label } from '../../../shared/components';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    display: 'inherit',
    zIndex: 99999,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: '100%',
    height: '100%',
    alignContent: 'center'
  },
  root: {
    position: 'relative'
  },
  bottom: {
    color: theme.palette.grey[200],
    margin: '0%'
  },
  top: {
    color: theme.palette.primary.main,
    position: 'absolute',
    margin: '25% 47%'
  },
  circle: {
    strokeLinecap: 'round',
    margin: '50%'
  },
  labelCarregando: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    margin: '33% 45%'
  },
  labelTexto: {
    color: theme.palette.grey[300]
  },
  item:{
    height: '100%'
  }
}));

const Loading = (props) => {
  const classes = useStyles();
  const { loading } = props;

  return (
    loading.showLoading && (
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
        direction="column"
        className={classes.backdrop}
      >
        <Grid item>
          <Grid item className={classes.root}>
            <Grid item className={classes.item}>
              <MiuCircularProgress
                variant="determinate"
                className={classes.bottom}
                size={0}
                thickness={0}
                value={100}
              />
              <MiuCircularProgress
                size={70}
                thickness={4}
                className={classes.top}
                disableShrink
                variant="indeterminate"
              />
              <Label className={classes.labelCarregando} variant="h4">
                Carregando
              </Label>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  );
};

export default Loading;
