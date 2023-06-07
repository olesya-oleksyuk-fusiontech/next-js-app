import styled from 'styled-components';

export const TogglerButton = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 1rem 1rem 0;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;
  outline: none;
`;
