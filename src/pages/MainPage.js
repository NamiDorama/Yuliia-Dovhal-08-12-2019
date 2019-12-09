import React, { useEffect } from 'react';
import { Header } from '../components';
import { SearchCityWeather, WeatherBlock } from '../containers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';

const MainPageComp = ({ error }) => {
  const notify = (message) => {
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
