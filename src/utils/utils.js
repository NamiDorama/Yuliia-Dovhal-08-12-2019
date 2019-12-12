const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const getWeekDay = date => days[new Date(date).getDay()];

export const checkIfCitySaved = (favorites, cityKey) =>
  !!favorites.filter(el => el.key === cityKey).length;

export const createWeatherArr = (weatherArr, favourites = false) => {
  if (favourites) {
    return weatherArr.map(saved => {
      const weather = favourites[saved.key];
      return weather
        ? {
            key: saved.key,
            header: saved.city,
            body: `${weather.Temperature.Metric.Value}${weather.Temperature.Metric.Unit}`,
            footer: weather.WeatherText,
            iconNum: weather.WeatherIcon,
          }
        : {};
    });
  }
  return weatherArr.map(weather => ({
    key: weather.EpochDate,
    header: getWeekDay(weather.Date),
    body: weather.Day.IconPhrase,
    footer: `${weather.Temperature.Minimum.Value}${weather.Temperature.Minimum.Unit} / ${weather.Temperature.Maximum.Value}${weather.Temperature.Maximum.Unit}`,
  }));
};

export const getCurrentLocation = (
  getCityByGeolocation,
  getDefaultCityWeather,
) => {
  const location = window.navigator && window.navigator.geolocation;
  if (location) {
    location.getCurrentPosition(
      position => {
        getCityByGeolocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        getDefaultCityWeather();
      },
    );
  }
};
