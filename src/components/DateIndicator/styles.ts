/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import styled from 'styled-components';

interface IPropsContainer {
  color: string;
}

export const Container = styled.div<IPropsContainer>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 5px;
  font-size: 1.4em;
  font-weight: 300;

  span {
    margin-right: 5px;
  }

  .date-indicator__day {
    margin-right: 5px;

    font-size: 1.6em;
    font-weight: bold;
    color: ${props => props.color};
    border-radius: 50px;
  }
`;
