import React from 'react';
import { useTheme } from 'styled-components';
import { TogglerButton } from './Toggler.styles';
import type { ThemeType } from '../../styling/Global';
import SunSvg from '../../../svg/sun';
import MoonSvg from '../../../svg/moon';

const ThemeToggler: React.FC<{
  onToggle: () => void;
}> = (props) => {
  const {
    currTheme,
  } = useTheme();

  const svgSunProps = {
    width: '50px',
    height: '50px',
  };

  const svgMoonProps = {
    width: '40px',
    height: '40px',
  };

  const icon = currTheme === 'light' ? <SunSvg {...svgSunProps} /> : <MoonSvg {...svgMoonProps} />;

  return (
    <TogglerButton onClick={props.onToggle} currTheme={(currTheme as ThemeType)}>
      {icon}
    </TogglerButton>
  );
};
export default ThemeToggler;
