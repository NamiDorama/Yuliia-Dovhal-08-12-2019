import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { getAutocomplete } from "../store/actions";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const styles = {
  icon: {
    color: "grey",
    marginRight: "5px"
  }
};

const SearchFieldComp = props => {
  const { classes, options, getAutocomplete } = props;

  const handleSearch = ({ target }) => {
    getAutocomplete(target.value);
  };

  return (
    <Grid container justify="center">
      <Autocomplete
        id="autocomplete-search"
        options={options}
        freeSolo
        renderInput={params => (
          <TextField
            {...params}
            label="Search city"
            margin="normal"
            style={{ width: 300 }}
            variant="outlined"
            onChange={handleSearch}
          />
        )}
        renderOption={option => {
          return (
            <Grid container alignItems="center">
              <Grid item>
                <LocationOnIcon className={classes.icon} />
              </Grid>
              <Grid item xs>
                <Typography color="textSecondary">
                  {option.LocalizedName}
                </Typography>
              </Grid>
            </Grid>
          );
        }}
      />
    </Grid>
  );
};

const mapStateToProps = state => ({
  options: state.options
});

const mapDispatchToProps = {
  getAutocomplete
};

export const SearchField = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SearchFieldComp));
