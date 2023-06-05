import styled from 'styled-components';
import Moon from '../../svg/moon';
import Sun from '../../svg/sun';

const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
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

export function ThemeToggler({ currTheme, onToggle }: { currTheme: string, onToggle: () => void }) {
  return (
    <Button onClick={onToggle}>
      {currTheme === 'light' ? <Moon /> : <Sun />}
    </Button>
  );
}
