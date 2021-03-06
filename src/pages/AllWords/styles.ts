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

export const InputArea = styled.input`
  padding: 10px;
  font-size: 1.4em;
  border-radius: 10px;
  height: 50px;
  border: 2px solid #c3c3c3;
  background-color: rgba(255, 255, 255, 0.1);
  resize: none;
`;

export const ContainerGroupWordLists = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 0;

  .list-words__title {
    margin-bottom: 10px;
    font-size: 1.4em;
    font-weight: 300;

    width: 100%;
  }

  .list-words__warning {
    font-size: 1em;
    font-weight: 500;
  }
`;

interface IContainerWords {
  border_color: string;
}

export const ContainerWords = styled.section<IContainerWords>`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  .list-words__group-words {
    margin-bottom: 10px;
    border-left: solid 4px ${props => props.border_color};
    width: auto;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

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
