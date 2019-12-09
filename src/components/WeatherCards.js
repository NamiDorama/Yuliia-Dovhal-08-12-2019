import React from 'react';
import Grid from '@material-ui/core/Grid';
import { DayWeatherCard } from './DayWeatherCard';

export const WeatherCards = ({ weatherArr }) => (
  <Grid
    container
    justify="center"
    alignItems="flex-start"
    spacing={2}
    style={{ margin: '40px 0' }}
  >
    {weatherArr.length
      ? weatherArr.map(weather => (
          <DayWeatherCard weather={weather} key={weather.EpochDate} />
        ))
      : null}
  </Grid>
);
