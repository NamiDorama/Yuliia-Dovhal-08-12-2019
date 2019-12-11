import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { DayWeatherCard } from './index';

export const WeatherCards = ({ weatherArr }) => (
  <Grid
    container
    justify="center"
    alignItems="flex-start"
    spacing={2}
    style={{ margin: '40px 0' }}
  >
    {weatherArr.length
      ? weatherArr.map(weather =>
          weather.key ? (
            <DayWeatherCard weather={weather} key={weather.key} />
          ) : null,
        )
      : null}
  </Grid>
);

WeatherCards.propTypes = {
  weatherArr: PropTypes.arrayOf(PropTypes.object).isRequired,
};
