import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { getWeather, getFiveDaysWeather } from '../store/actions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Card from '@material-ui/core/Card';

const defaultCity = {
  Version: 1,
  Key: '226396',
  Type: 'City',
  Rank: 10,
  LocalizedName: 'Tokyo',
  Country: { ID: 'JP', LocalizedName: 'Japan' },
  AdministrativeArea: { ID: '13', LocalizedName: 'Tokyo' },
};

const style = {
  root: {
    padding: '20px',
  },
};

const WeatherBlockComp = props => {
  const {
    classes,
    weather,
    getWeather,
    currentCity,
    getFiveDaysWeather,
  } = props;
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    getWeather(defaultCity);
    getFiveDaysWeather(defaultCity.Key);
  }, []);

  const favoritesHandler = () => {
    // TODO: write to localstorage
    setFavorite(!favorite);
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={9}>
        <Typography component="h6" variant="h6">
          {currentCity.LocalizedName}
        </Typography>
        <Typography component="p" variant="subtitle1">
          {weather.Temperature && weather.Temperature.Metric.Value}
          {weather.Temperature && weather.Temperature.Metric.Unit}
        </Typography>
      </Grid>

      <Grid item xs={3}>
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

      <Grid item xs={12}>
        <Typography component="p" variant="h5" align="center">
          {weather.WeatherText}
        </Typography>
      </Grid>

      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item xs={2}>
          <Card>xs</Card>
        </Grid>
        <Grid item xs={2}>
          <Card>xs</Card>
        </Grid>
        <Grid item xs={2}>
          <Card>xs</Card>
        </Grid>
        <Grid item xs={2}>
          <Card>xs</Card>
        </Grid>
        <Grid item xs={2}>
          <Card>xs</Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  weather: state.weather,
  currentCity: state.currentCity,
});

const mapDispatchToProps = {
  getWeather,
  getFiveDaysWeather,
};

export const WeatherBlock = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(style)(WeatherBlockComp));
