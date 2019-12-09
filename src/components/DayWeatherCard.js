import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const style = {
  cardItem: {
    height: '150px',
  },
};
const DayWeatherCardComp = ({ weather, classes }) => (
  <Grid item md={2} sm={4} xs={12}>
    <Card>
      <Typography component="p" align="center" variant="subtitle1">
        Monday
      </Typography>
      <Typography component="p" align="center" variant="subtitle1">
        {weather.Day.IconPhrase}
      </Typography>
      <Typography component="p" align="center" variant="subtitle1">
        {`${weather.Temperature.Minimum.Value}${weather.Temperature.Minimum.Unit} - ${weather.Temperature.Maximum.Value}${weather.Temperature.Maximum.Unit}`}
      </Typography>
    </Card>
  </Grid>
);

export const DayWeatherCard = withStyles(style)(DayWeatherCardComp);
