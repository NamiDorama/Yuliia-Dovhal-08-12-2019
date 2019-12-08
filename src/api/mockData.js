export const mock = [
  {
    Version: 1,
    Key: '226396',
    Type: 'City',
    Rank: 10,
    LocalizedName: 'Tokyo',
    Country: { ID: 'JP', LocalizedName: 'Japan' },
    AdministrativeArea: { ID: '13', LocalizedName: 'Tokyo' },
  },
  {
    Version: 1,
    Key: '106770',
    Type: 'City',
    Rank: 11,
    LocalizedName: 'Taiyuan',
    Country: { ID: 'CN', LocalizedName: 'China' },
    AdministrativeArea: { ID: 'SX', LocalizedName: 'Shanxi' },
  },
  {
    Version: 1,
    Key: '106780',
    Type: 'City',
    Rank: 11,
    LocalizedName: 'Tianjin',
    Country: { ID: 'CN', LocalizedName: 'China' },
    AdministrativeArea: { ID: 'TJ', LocalizedName: 'Tianjin' },
  },
  {
    Version: 1,
    Key: '58491',
    Type: 'City',
    Rank: 13,
    LocalizedName: 'Tongren',
    Country: { ID: 'CN', LocalizedName: 'China' },
    AdministrativeArea: { ID: 'GZ', LocalizedName: 'Guizhou' },
  },
  {
    Version: 1,
    Key: '102324',
    Type: 'City',
    Rank: 13,
    LocalizedName: 'Tangshan',
    Country: { ID: 'CN', LocalizedName: 'China' },
    AdministrativeArea: { ID: 'HE', LocalizedName: 'Hebei' },
  },
  {
    Version: 1,
    Key: '59573',
    Type: 'City',
    Rank: 13,
    LocalizedName: 'Taizhou',
    Country: { ID: 'CN', LocalizedName: 'China' },
    AdministrativeArea: { ID: 'JS', LocalizedName: 'Jiangsu' },
  },
  {
    Version: 1,
    Key: '60198',
    Type: 'City',
    Rank: 13,
    LocalizedName: 'Tongliao',
    Country: { ID: 'CN', LocalizedName: 'China' },
    AdministrativeArea: { ID: 'NM', LocalizedName: 'Inner Mongolia' },
  },
  {
    Version: 1,
    Key: '106571',
    Type: 'City',
    Rank: 13,
    LocalizedName: "Tai'an",
    Country: { ID: 'CN', LocalizedName: 'China' },
    AdministrativeArea: { ID: 'SD', LocalizedName: 'Shandong' },
  },
  {
    Version: 1,
    Key: '58055',
    Type: 'City',
    Rank: 15,
    LocalizedName: 'Tianshui',
    Country: { ID: 'CN', LocalizedName: 'China' },
    AdministrativeArea: { ID: 'GS', LocalizedName: 'Gansu' },
  },
  {
    Version: 1,
    Key: '2333653',
    Type: 'City',
    Rank: 15,
    LocalizedName: 'Taizhou',
    Country: { ID: 'CN', LocalizedName: 'China' },
    AdministrativeArea: { ID: 'ZJ', LocalizedName: 'Zhejiang' },
  },
];
export const weatherMock = [
  {
    LocalObservationDateTime: '2019-12-09T03:16:00+09:00',
    EpochTime: 1575828960,
    WeatherText: 'Clear',
    WeatherIcon: 33,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
      Metric: { Value: 4.2, Unit: 'C', UnitType: 17 },
      Imperial: { Value: 40.0, Unit: 'F', UnitType: 18 },
    },
    MobileLink:
      'http://m.accuweather.com/en/jp/tokyo/226396/current-weather/226396?lang=en-us',
    Link:
      'http://www.accuweather.com/en/jp/tokyo/226396/current-weather/226396?lang=en-us',
  },
];
export const fiveMock = {
  DailyForecasts: [
    {
      Date: '2019-12-09T07:00:00+09:00',
      EpochDate: 1575842400,
      Temperature: {
        Minimum: { Value: 44.0, Unit: 'F', UnitType: 18 },
        Maximum: { Value: 51.0, Unit: 'F', UnitType: 18 },
      },
      Day: { Icon: 3, IconPhrase: 'Partly sunny', HasPrecipitation: false },
      Night: {
        Icon: 12,
        IconPhrase: 'Showers',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light',
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=1&lang=en-us',
      Link:
        'http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=1&lang=en-us',
    },
    {
      Date: '2019-12-10T07:00:00+09:00',
      EpochDate: 1575928800,
      Temperature: {
        Minimum: { Value: 46.0, Unit: 'F', UnitType: 18 },
        Maximum: { Value: 56.0, Unit: 'F', UnitType: 18 },
      },
      Day: {
        Icon: 18,
        IconPhrase: 'Rain',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light',
      },
      Night: {
        Icon: 12,
        IconPhrase: 'Showers',
        HasPrecipitation: true,
        PrecipitationType: 'Rain',
        PrecipitationIntensity: 'Light',
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=2&lang=en-us',
      Link:
        'http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=2&lang=en-us',
    },
    {
      Date: '2019-12-11T07:00:00+09:00',
      EpochDate: 1576015200,
      Temperature: {
        Minimum: { Value: 46.0, Unit: 'F', UnitType: 18 },
        Maximum: { Value: 59.0, Unit: 'F', UnitType: 18 },
      },
      Day: {
        Icon: 4,
        IconPhrase: 'Intermittent clouds',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 36,
        IconPhrase: 'Intermittent clouds',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=3&lang=en-us',
      Link:
        'http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=3&lang=en-us',
    },
    {
      Date: '2019-12-12T07:00:00+09:00',
      EpochDate: 1576101600,
      Temperature: {
        Minimum: { Value: 40.0, Unit: 'F', UnitType: 18 },
        Maximum: { Value: 61.0, Unit: 'F', UnitType: 18 },
      },
      Day: { Icon: 2, IconPhrase: 'Mostly sunny', HasPrecipitation: false },
      Night: { Icon: 35, IconPhrase: 'Partly cloudy', HasPrecipitation: false },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=4&lang=en-us',
      Link:
        'http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=4&lang=en-us',
    },
    {
      Date: '2019-12-13T07:00:00+09:00',
      EpochDate: 1576188000,
      Temperature: {
        Minimum: { Value: 41.0, Unit: 'F', UnitType: 18 },
        Maximum: { Value: 50.0, Unit: 'F', UnitType: 18 },
      },
      Day: { Icon: 6, IconPhrase: 'Mostly cloudy', HasPrecipitation: false },
      Night: { Icon: 34, IconPhrase: 'Mostly clear', HasPrecipitation: false },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://m.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=5&lang=en-us',
      Link:
        'http://www.accuweather.com/en/jp/tokyo/226396/daily-weather-forecast/226396?day=5&lang=en-us',
    },
  ],
};
