import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { getWeather, getFiveDaysWeather } from '../store/actions';
import Typography from '@material-ui/core/Typography';
import { Favorites, WeatherCards } from '../components';
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
    padding: '15px',
    width: '90%',
    margin: '20px auto',
  },
};

const WeatherBlockComp = props => {
  const {
    classes,
    weather,
    getWeather,
    currentCity,
    getFiveDaysWeather,
    fiveDaysWeather,
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
    <Card className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid item sm={8} xs={6}>
          <Typography component="h6" variant="h6">
            {currentCity.LocalizedName}
          </Typography>
          <Typography component="p" variant="subtitle1">
            {weather.Temperature && weather.Temperature.Imperial.Value}
            {weather.Temperature && weather.Temperature.Imperial.Unit}
          </Typography>
        </Grid>

        <Favorites favorite={favorite} favoritesHandler={favoritesHandler} />

        <Grid item xs={12}>
          <Typography component="p" variant="h5" align="center">
            {weather.WeatherText}
          </Typography>
        </Grid>

        <WeatherCards weatherArr={fiveDaysWeather} />
      </Grid>
    </Card>
  );
};

const mapStateToProps = state => ({
  weather: state.weather,
  currentCity: state.currentCity,
  fiveDaysWeather: state.fiveDaysWeather,
});

const mapDispatchToProps = {
  getWeather,
  getFiveDaysWeather,
};

export const WeatherBlock = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(style)(WeatherBlockComp));
