/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import styled from 'styled-components';

interface IPropsContainer {
  background_color: string;
}

export const Container = styled.div<IPropsContainer>`
  display: flex;
  align-items: center;
  margin: 5px;
  padding-right: 5px;

  border-radius: 40px;
  text-decoration: none;
  background-color: ${props => props.background_color};
  font-weight: bold;
  cursor: pointer;
`;

interface IPropsContainerLink {
  color: string;
}

export const ContainerLink = styled.a<IPropsContainerLink>`
  padding: 10px;
  padding-right: 5px;

  color: ${props => props.color};
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
`;

interface IPropsExcludeButton {
  background_color_hover: string;
}
