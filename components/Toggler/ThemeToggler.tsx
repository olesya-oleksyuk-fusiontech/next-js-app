import React, { createRef } from 'react';
import { useTheme } from 'styled-components';
import SVG from '../SVG';
import { TogglerButton } from './Toggler.styles';
import { svgMoon, svgSun } from '../../public/svg/svg';

const ThemeToggler: React.FC<{
  onToggle: () => void;
}> = (props) => {
  const trigger = createRef<HTMLElement>();
  const { theme } = useTheme();

  return (
    <TogglerButton onClick={props.onToggle} ref={(trigger as React.RefObject<HTMLButtonElement>)}>
      {theme === 'light'
        ? (<SVG
          rawSvg={svgSun}
          height={50}
          width={50}
          alt="sun icon"
          isOnlyLayout={false}
          hoverColor="#000000"
          transition="0.4s"
          defaultColor="#FFFFFF"
          defaultBackgroundColor="#4ad6fe"
          hoverBackgroundColor="#a61414"
          trigger={(trigger as React.RefObject<HTMLImageElement>)}
        />)
        : (<SVG
          rawSvg={svgMoon}
          height={50}
          width={50}
          alt="moon icon"
          isOnlyLayout={false}
          hoverColor="#FFFFFF"
          transition="0.4s"
          defaultColor="#000000"
          defaultBackgroundColor="#a61414"
          hoverBackgroundColor="#a61414"
          trigger={(trigger as React.RefObject<HTMLImageElement>)}
        />)
      }
    </TogglerButton>
  );
};
export default ThemeToggler;
