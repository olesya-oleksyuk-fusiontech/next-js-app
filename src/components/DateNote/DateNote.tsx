import React from 'react';
import { format, parseISO } from 'date-fns';
import { Time } from './DateNote.styles';

const DateNote: React.FC<{ dateString: string }> = (props) => {
  const date = parseISO(props.dateString);
  return <Time dateTime={props.dateString}>{format(date, 'LLLL d, yyyy')}</Time>;
};

export default DateNote;
