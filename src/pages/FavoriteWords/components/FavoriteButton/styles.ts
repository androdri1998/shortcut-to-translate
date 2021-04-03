/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import styled from 'styled-components';

interface IPropsExcludeButton {
  background_color_hover: string;
}

export const Container = styled.button<IPropsExcludeButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;

  background-color: transparent;
  border-radius: 40px;
  border: none;

  &:hover {
    transition: 0.6s;
    background-color: ${props => props.background_color_hover};
  }
`;
