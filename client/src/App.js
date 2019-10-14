import React from 'react';
import { Router } from 'react-router';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import history from './utils/history';
import ContextProvider from './ContextProvider';
import Header from './Header';
import Main from './Main';
import Menu from './Menu';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
  },
  headerSpacer: theme.mixins.toolbar,
}));

const theme = createMuiTheme({
  palette: {
    primary: { main: '#477d8a' },
    secondary: { main: '#885548' },
    analogous1: { main: '#588b7a' },
    analogous2: { main: '#475c8e' },
    triadic1: { main: '#564a8c' },
    triadic2: { main: '#79286c' },
  },
});



const App = () => {
  const classes = useStyles();
  return (
    <ContextProvider>
      <Router history={history} >
        <div className={classes.root}>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <Header />
            <Menu />
            <main className={classes.content}>
              <div className={classes.headerSpacer} />
              <Main />
            </main>
          </ThemeProvider>
        </div>
      </Router>
    </ContextProvider>
  )
}
export default App;