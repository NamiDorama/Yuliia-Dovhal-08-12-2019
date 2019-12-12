import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { SearchCityWeather, WeatherBlock } from '../containers';
import { Header } from '../components';
import 'react-toastify/dist/ReactToastify.css';

const MainPageComp = ({ error }) => {
  const notify = message => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

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
      <WeatherBlock />
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
