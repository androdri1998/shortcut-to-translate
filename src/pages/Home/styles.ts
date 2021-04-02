/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 0 20px;
`;

export const ContainerInputText = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  .input-text__title {
    margin: 10px 0;
    font-size: 1.4em;
    font-weight: 300;
  }

  .input-text__tip {
    font-size: 0.9em;
    margin: 5px 0;
    color: #c3c3c3;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1.4em;
  border-radius: 10px;
  height: 150px;
  border: 2px solid #c3c3c3;
  background-color: rgba(255, 255, 255, 0.1);
  resize: none;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

interface IPropsSendButton {
  color: string;
  background_color: string;
  background_color_hover: string;
}

export const SendButton = styled.button<IPropsSendButton>`
  padding: 10px;
  border: none;
  border-radius: 10px;

  font-size: 1em;
  font-weight: bold;
  color: ${props => props.color};
  background-color: ${props => props.background_color};

  &:hover {
    transition: 0.6s;
    background-color: ${props => props.background_color_hover};
  }
`;

export const ContainerWords = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 0;

  .list-words__title {
    margin-bottom: 20px;
    font-size: 1.4em;
    font-weight: 300;

    width: 100%;
  }

  .list-words__warning {
    font-size: 1em;
    font-weight: 500;
  }
`;
