/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import styled from 'styled-components';

interface IPropsContainerWords {
  color: string;
  background_color: string;
}

export const Container = styled.a<IPropsContainerWords>`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;

  border-radius: 40px;
  text-decoration: none;
  background-color: ${props => props.background_color};
  color: ${props => props.color};
  font-weight: bold;
  cursor: pointer;
`;
