import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const style = {
  margin: {
    margin: '20px 0',
  },
};

const NotFoundComp = ({ classes }) => (
  <Grid container justify="center" alignItems="center" direction="column">
    <Typography variant="h5" className={classes.margin}>
      Sorry, this page is not found
    </Typography>
    <Button href="/" variant="outlined" className={classes.margin}>
      Go to home page
    </Button>
  </Grid>
);

export const NotFound = withStyles(style)(NotFoundComp);

NotFoundComp.propTypes = {
  classes: PropTypes.object.isRequired,
};
