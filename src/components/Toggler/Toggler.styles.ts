import styled, { css } from 'styled-components';
import type { ThemeType } from '../../styling/Global';

type PropsType = {
  currTheme: ThemeType;
};

export const TogglerButton = styled.button<PropsType>`
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid ${({ theme }) => theme.colors.toggle.border};
  background: ${({ theme }) => theme.colors.toggle.background};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.5rem;
  margin: 1rem 1rem 0;
  overflow: hidden;
  padding: 0.5rem;
  width: 8rem;
  height: 4rem;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ currTheme }) => {
    if (currTheme === 'light') {
      return css`
        background: #4ad6fe;

        &:hover {
          background: #a61414;

          svg {
            filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(18%) hue-rotate(293deg) brightness(102%) contrast(105%);
          }
        }

        svg:hover {

        }
      `;
    }
    return css`
      background: #a61414;

      &:hover {
        background: #4ad6fe;

        svg {
          filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(18%) hue-rotate(293deg) brightness(102%) contrast(105%);
        }
      }
    `;
  }}

`;
