import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { SearchCityWeather, WeatherBlock } from '../containers';
import { Header } from '../components';
import 'react-toastify/dist/ReactToastify.css';
import { getCurrentLocation } from '../utils/utils';

const MainPageComp = ({ error }) => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  const notify = message => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  useEffect(() => {
    getCurrentLocation(setLocation);
  }, []);

  useEffect(() => {
    if (error) {
      notify(error);
    }
  }, [error]);

  return (
    <>
      <ToastContainer autoClose={5000} />
      <Header />
      <SearchCityWeather />
      <WeatherBlock location={location} />
    </>
  );
};

const mapStateToProps = state => ({
  error: state.error,
});

export const MainPage = connect(mapStateToProps)(MainPageComp);

MainPageComp.propTypes = {
  error: PropTypes.string.isRequired,
};
