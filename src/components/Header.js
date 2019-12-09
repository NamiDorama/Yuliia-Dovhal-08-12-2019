import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const styles = {
  grow: {
    flexGrow: 1,
  },
  active: {
    border: '1px solid grey',
  },
};

const HomeLink = React.forwardRef((props, ref) => (
  <NavLink to="/" exact={true} {...props} ref={ref} />
));
const FavoritesLink = React.forwardRef((props, ref) => (
  <NavLink to="/favorites" {...props} ref={ref} />
));

const HeaderComp = props => {
  const { classes } = props;
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Weather application
        </Typography>
        <Button
          component={HomeLink}
          color="inherit"
          activeClassName={classes.active}
        >
          Home
        </Button>
        <Button
          component={FavoritesLink}
          color="inherit"
          activeClassName={classes.active}
        >
          Favorites
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export const Header = withStyles(styles)(HeaderComp);
