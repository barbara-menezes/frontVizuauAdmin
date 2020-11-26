import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './shared/theme';
import Routes from './Routes';
import { Loading } from './features/loading';
import { Notification } from './features/notification';
import GlobalStyles from './shared/components/GlobalStyles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Loading />
      <Notification />
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
