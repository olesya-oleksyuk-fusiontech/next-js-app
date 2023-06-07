import React from 'react';
import Moon from '../../svg/moon';
import Sun from '../../svg/sun';
import { TogglerButton } from './Toggler.styles';

const ThemeToggler: React.FC<{
  currTheme: string;
  onToggle: () => void;
}> = (props) => {
  return (
    <TogglerButton onClick={props.onToggle}>
      {props.currTheme === 'light' ? <Moon /> : <Sun />}
    </TogglerButton>
  );
};

export default ThemeToggler;
