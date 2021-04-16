import React, { useMemo } from 'react';

import colors from '../../utils/colors';
import { Container } from './styles';

interface IDateIndicator {
  date: string;
  length: number;
}
const DateIndicator: React.FC<IDateIndicator> = ({ date, length }) => {
  const year = useMemo(() => {
    const currentYear = date.split('-')[0];
    return currentYear;
  }, [date]);

  const month = useMemo(() => {
    const nameOfMonths = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    // eslint-disable-next-line radix
    const currentMonth: number = parseInt(date.split('-')[1]);
    return nameOfMonths[currentMonth - 1];
  }, [date]);

  const day = useMemo(() => {
    const currentDay = date.split('-')[2];
    return currentDay;
  }, [date]);

  return (
    <Container color={colors.light.home.words.background_color}>
      <span className="date-indicator__day">{day}</span>
      <span className="date-indicator__month">{month}</span>
      <span className="date-indicator__describe">of</span>
      <span className="date-indicator__year">{year}</span>
      <span className="date-indicator__describe">
        {` - ${length} words listed at day`}
      </span>
    </Container>
  );
};

export default DateIndicator;
