import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import { setMetric } from '../store/actions';

const MetricSwitchComp = ({ metric, setMetric }) => {
  const switchMetric = ({ target }) => {
    setMetric(target.checked);
  };

  return (
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>Fahrenheit</Grid>
        <Grid item>
          <Switch checked={metric} color="default" onChange={switchMetric} />
        </Grid>
        <Grid item>Celsius</Grid>
      </Grid>
    </Typography>
  );
};

const mapStateToProps = ({ metric }) => ({ metric });
const mapDispatchToProps = { setMetric };

export const MetricSwitch = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MetricSwitchComp);

MetricSwitchComp.propTypes = {
  metric: PropTypes.bool.isRequired,
  setMetric: PropTypes.func.isRequired,
};
