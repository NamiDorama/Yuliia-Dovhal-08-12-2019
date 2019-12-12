import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { Favorites, WeatherCards, WeatherIcon } from '../components';
import { getWeather, getCityByGeolocation, setMetric } from '../store/actions';
import {
  checkIfCitySaved,
  createWeatherArr,
  getCurrentLocation,
} from '../utils/utils';
import { MetricSwitch } from './index';

const defaultCity = {
  Version: 1,
  Key: '215854',
  Type: 'City',
  Rank: 31,
  LocalizedName: 'Tel Aviv',
  Country: { ID: 'IL', LocalizedName: 'Israel' },
  AdministrativeArea: { ID: 'TA', LocalizedName: 'Tel Aviv' },
};

const style = {
  root: {
    backgroundColor: 'whitesmoke',
    padding: '15px',
    width: '90%',
    margin: '20px auto',
  },
  weatherBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
};

const WeatherBlockComp = props => {
  const {
    classes,
    weather,
    getWeather,
    currentCity,
    fiveDaysWeather,
    getCityByGeolocation,
    metric,
  } = props;
  const favorites = JSON.parse(window.localStorage.getItem('cities')) || [];
  const ifCitySaved = checkIfCitySaved(favorites, currentCity.Key);
  const metricUnit = metric ? 'Metric' : 'Imperial';
  const weatherArr = createWeatherArr(fiveDaysWeather);
  const [favorite, setFavorite] = useState(ifCitySaved);

  const getDefaultCityWeather = () =>
    getWeather({ selectedOption: defaultCity, metric });

  useEffect(() => {
    if (Object.keys(currentCity).length) {
      getWeather({ selectedOption: currentCity, metric });
      return;
    }
    getCurrentLocation(getCityByGeolocation, getDefaultCityWeather);
  }, [metric]);

  useEffect(() => {
    setFavorite(checkIfCitySaved(favorites, currentCity.Key));
  }, [currentCity.Key, favorites]);

  const favoritesHandler = () => {
    setFavorite(!ifCitySaved);
    const updatedCities = ifCitySaved
      ? favorites.filter(el => el.key !== currentCity.Key)
      : [
          ...favorites,
          { city: currentCity.LocalizedName, key: currentCity.Key },
        ];
    window.localStorage.setItem('cities', JSON.stringify(updatedCities));
  };

  return (
    <Card className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid item sm={8} xs={6} className={classes.weatherBlock}>
          {weather.WeatherIcon && (
            <Grid item>
              <WeatherIcon iconNum={weather.WeatherIcon} />
            </Grid>
          )}
          <Grid item>
            <Typography component="h6" variant="h6">
              {currentCity.LocalizedName}
            </Typography>
            <Typography component="p" variant="subtitle1">
              {weather.Temperature && weather.Temperature[metricUnit].Value}
              {weather.Temperature && weather.Temperature[metricUnit].Unit}
            </Typography>
          </Grid>
        </Grid>

        <Favorites favorite={favorite} favoritesHandler={favoritesHandler} />

        <Grid item xs={12}>
          <Typography component="p" variant="h5" align="center">
            {weather.WeatherText}
          </Typography>
        </Grid>

        <WeatherCards weatherArr={weatherArr} />
        <MetricSwitch />
      </Grid>
    </Card>
  );
};

const mapStateToProps = ({
  weather,
  currentCity,
  fiveDaysWeather,
  metric,
}) => ({
  weather,
  currentCity,
  fiveDaysWeather,
  metric,
});

const mapDispatchToProps = { getWeather, getCityByGeolocation };

export const WeatherBlock = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(style)(WeatherBlockComp));

WeatherBlockComp.propTypes = {
  classes: PropTypes.object.isRequired,
  weather: PropTypes.object.isRequired,
  getWeather: PropTypes.func.isRequired,
  currentCity: PropTypes.object.isRequired,
  fiveDaysWeather: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCityByGeolocation: PropTypes.func.isRequired,
  metric: PropTypes.bool.isRequired,
};
