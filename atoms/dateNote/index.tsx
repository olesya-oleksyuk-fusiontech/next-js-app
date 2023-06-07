import React from 'react';
import { format, parseISO } from 'date-fns';
import styled from 'styled-components';

const Time = styled.time`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.font.size.sm};
`;

function DateNote({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return <Time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</Time>;
}

export default DateNote;
