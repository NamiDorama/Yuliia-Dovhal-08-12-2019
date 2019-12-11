import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';

export const Favorites = ({ favorite, favoritesHandler }) => (
  <Grid item sm={4} xs={6} align="right">
    <IconButton
      color={favorite ? 'secondary' : 'default'}
      onClick={favoritesHandler}
    >
      <FavoriteIcon />
    </IconButton>
    <Typography component="span" variant="subtitle1">
      Favorites
    </Typography>
  </Grid>
);
