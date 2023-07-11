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

  &:hover {
    background: ${({ theme }) => theme.colors.toggle.hover};
  }

  ${({ currTheme }) => {
    if (currTheme === 'light') {
      return css`
        &:hover {
          svg {
            filter: ${({ theme }) => theme.svgFilters.black};
          }
        }
      `;
    }
    return css`
      svg {
        filter: ${({ theme }) => theme.svgFilters.black};
      }

      &:hover {
        svg {
          filter: ${({ theme }) => theme.svgFilters.white};
        }
      }
    `;
  }}

`;
