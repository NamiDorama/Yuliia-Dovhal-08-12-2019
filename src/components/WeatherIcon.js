import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import sprite from '../css_sprites.png';

const style = {
  'bg-1_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -10px -10px`,
  },
  'bg-2_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -105px -10px`,
  },
  'bg-3_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -10px -75px`,
  },
  'bg-4_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -105px -75px`,
  },
  'bg-5_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -200px -10px`,
  },
  'bg-6_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -200px -75px`,
  },
  'bg-7_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -10px -140px`,
  },
  'bg-8_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -105px -140px`,
  },
  'bg-11_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -200px -140px`,
  },
  'bg-12_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -10px -205px`,
  },
  'bg-13_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -105px -205px`,
  },
  'bg-14_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -200px -205px`,
  },
  'bg-15_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -295px -10px`,
  },
  'bg-16_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -295px -75px`,
  },
  'bg-17_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -295px -140px`,
  },
  'bg-18_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -295px -205px`,
  },
  'bg-19_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -10px -270px`,
  },
  'bg-20_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -105px -270px`,
  },
  'bg-21_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -200px -270px`,
  },
  'bg-22_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -295px -270px`,
  },
  'bg-23_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -390px -10px`,
  },
  'bg-24_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -390px -75px`,
  },
  'bg-25_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -390px -140px`,
  },
  'bg-26_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -390px -205px`,
  },
  'bg-29_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -390px -270px`,
  },
  'bg-30_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -10px -335px`,
  },
  'bg-31_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -105px -335px`,
  },
  'bg-32_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -200px -335px`,
  },
  'bg-33_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -295px -335px`,
  },
  'bg-34_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -390px -335px`,
  },
  'bg-35_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -10px -400px`,
  },
  'bg-36_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -105px -400px`,
  },
  'bg-37_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -200px -400px`,
  },
  'bg-38_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -295px -400px`,
  },
  'bg-39_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -390px -400px`,
  },
  'bg-40_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -485px -10px`,
  },
  'bg-41_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -485px -75px`,
  },
  'bg-42_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -485px -140px`,
  },
  'bg-43_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -485px -205px`,
  },
  'bg-44_s': {
    width: '75px',
    height: '45px',
    background: `url(${sprite}) -485px -270px`,
  },
};

const WeatherIconComp = ({ classes, iconNum }) => (
  <Typography component="div" className={classes[`bg-${iconNum}_s`]} />
);

export const WeatherIcon = withStyles(style)(WeatherIconComp);
