import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { Favorites, WeatherCards, WeatherIcon } from '../components';
import { getWeather, getFiveDaysWeather } from '../store/actions';
import { checkIfCitySaved, createWeatherArr } from '../utils/utils';

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
    getFiveDaysWeather,
    fiveDaysWeather,
  } = props;
  const favorites = JSON.parse(window.localStorage.getItem('cities')) || [];
  const ifCitySaved = checkIfCitySaved(favorites, currentCity.Key);
  const weatherArr = createWeatherArr(fiveDaysWeather);
  const [favorite, setFavorite] = useState(ifCitySaved);

  useEffect(() => {
    if (Object.keys(currentCity).length) {
      getWeather(currentCity);
      getFiveDaysWeather(currentCity.Key);
      return;
    }
    getWeather(defaultCity);
    getFiveDaysWeather(defaultCity.Key);
  }, []);

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
          <Grid item>
            <WeatherIcon iconNum={weather.WeatherIcon} />
          </Grid>
          <Grid item>
            <Typography component="h6" variant="h6">
              {currentCity.LocalizedName}
            </Typography>
            <Typography component="p" variant="subtitle1">
              {weather.Temperature && weather.Temperature.Metric.Value}
              {weather.Temperature && weather.Temperature.Metric.Unit}
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
      </Grid>
    </Card>
  );
};

const mapStateToProps = ({ weather, currentCity, fiveDaysWeather }) => ({
  weather,
  currentCity,
  fiveDaysWeather,
});

const mapDispatchToProps = {
  getWeather,
  getFiveDaysWeather,
};

export const WeatherBlock = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(style)(WeatherBlockComp));
