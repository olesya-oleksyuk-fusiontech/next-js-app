import styled from 'styled-components';

export const TogglerButton = styled.button.attrs(({ ref }) => ({
  ref,
}))`
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
`;
