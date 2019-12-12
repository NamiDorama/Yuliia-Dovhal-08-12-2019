import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { WeatherIcon } from './WeatherIcon';

const style = {
  cardItem: {
    height: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clickable: {
    cursor: 'pointer',
  },
};

const DayWeatherCardComp = ({
  weather: { header, body, footer, iconNum },
  classes,
  weatherKey,
  getWeatherByClick,
}) => {
  const weatherClickHandler = () => {
    getWeatherByClick(weatherKey);
  };

  return (
    <Grid
      item
      md={2}
      sm={4}
      xs={12}
      onClick={getWeatherByClick ? weatherClickHandler : null}
      className={getWeatherByClick ? classes.clickable : ''}
    >
      <Card className={classes.cardItem}>
        {iconNum && <WeatherIcon iconNum={iconNum} />}
        <Typography component="p" align="center" variant="body2">
          {header}
        </Typography>
        <Typography
          component="p"
          align="center"
          variant="subtitle2"
          color="primary"
        >
          {body}
        </Typography>
        <Typography component="p" align="center">
          {footer}
        </Typography>
      </Card>
    </Grid>
  );
};

export const DayWeatherCard = withStyles(style)(DayWeatherCardComp);

DayWeatherCardComp.propTypes = {
  classes: PropTypes.object.isRequired,
  header: PropTypes.string,
  body: PropTypes.string,
  footer: PropTypes.string,
  iconNum: PropTypes.oneOf([PropTypes.number, null]),
};

DayWeatherCardComp.defaultProps = {
  header: '',
  body: '',
  footer: '',
  iconNum: null,
};
