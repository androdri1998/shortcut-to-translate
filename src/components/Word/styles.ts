/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import styled from 'styled-components';

interface IPropsContainer {
  background_color: string;
}

export const Container = styled.div<IPropsContainer>`
  display: flex;
  margin-right: 10px;
  margin-bottom: 10px;

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

export const ExcludeButton = styled.button<IPropsExcludeButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;

  background-color: transparent;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  border: none;

  &:hover {
    transition: 0.6s;
    background-color: ${props => props.background_color_hover};
  }
`;
