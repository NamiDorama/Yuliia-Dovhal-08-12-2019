import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAutocomplete, getWeather } from '../store/actions';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
  root: {
    margin: '20px 0',
  },
  icon: {
    color: 'grey',
    marginRight: '5px',
  },
  margin: {
    margin: '10px 0 10px 10px',
  },
  width: {
    width: '300px',
  },
};

const SearchFieldComp = props => {
  const { classes, options, getAutocomplete, getWeather, metric } = props;
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState({});

  const handleSearch = ({ target: { value } }) => {
    setSelectedOption({});
    setInputValue(value);
  };

  useEffect(() => {
    if (inputValue) {
      getAutocomplete(inputValue);
    }
  }, [inputValue]);

  const getOptions = option => (
    <Grid container alignItems="center">
      <Grid item>
        <LocationOnIcon className={classes.icon} />
      </Grid>
      <Grid item xs>
        <Typography color="textSecondary">{option.LocalizedName}</Typography>
      </Grid>
    </Grid>
  );

  const getOptionLabel = option => option.LocalizedName;

  const selectOptionHandler = ({}, option) => {
    setInputValue(option.LocalizedName);
    setSelectedOption(option);
  };

  const renderInput = params => (
    <TextField
      {...params}
      label="Search city"
      variant="outlined"
      onChange={handleSearch}
      className={classes.width}
    />
  );

  const searchWeatherHandler = () => {
    getWeather({ selectedOption, metric });
    setInputValue('');
    setSelectedOption({});
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Autocomplete
        id="autocomplete-search"
        options={options}
        disableClearable
        freeSolo
        getOptionLabel={getOptionLabel}
        renderInput={renderInput}
        renderOption={getOptions}
        inputValue={inputValue}
        onChange={selectOptionHandler}
      />
      <Button
        variant="contained"
        size="small"
        color="primary"
        className={classes.margin}
        onClick={searchWeatherHandler}
        disabled={!Object.keys(selectedOption).length}
      >
        Get weather
      </Button>
    </Grid>
  );
};

const mapStateToProps = ({ options, metric }) => ({ options, metric });

const mapDispatchToProps = { getAutocomplete, getWeather };

export const SearchCityWeather = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(SearchFieldComp));

SearchFieldComp.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  getAutocomplete: PropTypes.func.isRequired,
  getWeather: PropTypes.func.isRequired,
  metric: PropTypes.bool.isRequired,
};
