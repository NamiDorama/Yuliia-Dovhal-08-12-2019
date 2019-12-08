import React from 'react';
import { Header } from '../components';
import { SearchCityWeather, WeatherBlock } from '../containers';

export const MainPage = () => {
  return (
    <>
      <Header />
      <SearchCityWeather />
      <WeatherBlock />
    </>
  );
};
