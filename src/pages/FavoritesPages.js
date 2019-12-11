import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Header, WeatherCards } from '../components';
import { getFavoritesWeather } from '../store/actions';
import { createWeatherArr } from '../utils/utils';

const style = {
  root: {
    padding: '15px',
    width: '90%',
    margin: '20px auto',
  },
};

const FavoritesPagesComp = props => {
  const { getFavoritesWeather, favoritesWeather, classes } = props;
  const favorites = JSON.parse(window.localStorage.getItem('cities')) || [];

  useEffect(() => {
    getFavoritesWeather(favorites);
  }, []);

  const weatherArr = Object.keys(favoritesWeather).length
    ? createWeatherArr(favorites, favoritesWeather)
    : [];

  return (
    <>
      <Header />
      <Card className={classes.root}>
        <Grid container justify="center" alignItems="center">
          <WeatherCards weatherArr={weatherArr} />
        </Grid>
      </Card>
    </>
  );
};

const mapStateToProps = ({ favoritesWeather }) => ({ favoritesWeather });
const mapDispatchToProps = { getFavoritesWeather };

export const FavoritesPages = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(style)(FavoritesPagesComp));
