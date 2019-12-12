import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Header, WeatherCards } from '../components';
import { getFavoritesWeather, setCity } from '../store/actions';
import { createWeatherArr } from '../utils/utils';
import { Typography } from '@material-ui/core';

const style = {
  root: {
    backgroundColor: 'whitesmoke',
    padding: '15px',
    width: '90%',
    margin: '20px auto',
  },
};

const FavoritesPagesComp = props => {
  const {
    getFavoritesWeather,
    favoritesWeather,
    classes,
    setCity,
    history: { push },
  } = props;
  const favorites = JSON.parse(window.localStorage.getItem('cities')) || [];

  useEffect(() => {
    getFavoritesWeather(favorites);
  }, []);

  const weatherArr = Object.keys(favoritesWeather).length
    ? createWeatherArr(favorites, favoritesWeather)
    : [];

  const getWeatherByClick = weatherKey => {
    const chosen = favorites.find(city => city.key === weatherKey);
    setCity({ LocalizedName: chosen.city, Key: chosen.key });
    push('/');
    console.log('getWeatherByClick', chosen);
  };

  return (
    <>
      <Header />
      <Card className={classes.root}>
        {weatherArr.length ? (
          <Grid container justify="center" alignItems="center">
            <WeatherCards
              weatherArr={weatherArr}
              getWeatherByClick={getWeatherByClick}
            />
          </Grid>
        ) : (
          <Typography align="center" variant="subtitle1">
            There's no favorite cities here
          </Typography>
        )}
      </Card>
    </>
  );
};

const mapStateToProps = ({ favoritesWeather }) => ({ favoritesWeather });
const mapDispatchToProps = { getFavoritesWeather, setCity };

export const FavoritesPages = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(style)(FavoritesPagesComp));

FavoritesPagesComp.propTypes = {
  getFavoritesWeather: PropTypes.func.isRequired,
  favoritesWeather: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  push: PropTypes.func,
};

FavoritesPagesComp.defaultProps = {
  push: _ => _,
};
