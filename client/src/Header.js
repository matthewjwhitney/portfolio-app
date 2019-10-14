import React, { useContext } from 'react';
import Context from './utils/context';
import { AppBar, Toolbar, makeStyles, Button, Typography } from '@material-ui/core';
import * as Icons from './img/icons'
import AdapterNavLink from './utils/navLinkAdapter';

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1
  },
  iconContainer: {
    width: 36, height: 36, marginRight: theme.spacing()
  },
  title: {
    textTransform: "none"
  },
  loginButton: {
    marginRight: theme.spacing()
  }
}));

const Header = () => {
  const context = useContext(Context)
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar disableGutters>
        <Button size="large" component={AdapterNavLink} to="/" color="inherit">
          <span className={classes.iconContainer}>
            <img src={Icons.Icosahedron} alt="Icosahedron Icon" />
          </span>
          <Typography variant="h6" className={classes.title}>
            Matthew J. Whitney
          </Typography>
        </Button>
        <div className={classes.grow} />
        <Button
          variant="contained"
          color="secondary"
          onClick={!context.authState
            ? () => context.authObj.login()
            : () => context.authObj.logout()
          }
          className={classes.loginButton}
        >
          {!context.authState ? "Login" : "Logout"}
        </Button>
      </Toolbar>
    </AppBar>
  )
};

export default Header;
