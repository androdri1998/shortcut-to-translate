/* eslint-disable react/no-array-index-key */
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IReducerState } from '../../store/rootReducer';
import colors from '../../utils/colors';

import {
  Container,
  ContainerInputText,
  TextArea,
  ContainerButtons,
  SendButton,
  ContainerWords,
} from './styles';

import { asyncSaveNewWords } from '../../store/actions/words.actions';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const words = useSelector((state: IReducerState) => state.wordsReducer.words);

  const [wordsText, setWordsText] = useState('');

  const handleWordsText = useCallback(event => {
    setWordsText(event.target.value);
  }, []);

  const formatWords = useCallback(() => {
    if (wordsText) {
      dispatch(asyncSaveNewWords({ wordsText }));
    }
  }, [dispatch, wordsText]);

  return (
    <Container>
      <ContainerInputText>
        <span className="input-text__title">Type your new words here...</span>
        <TextArea
          onChange={handleWordsText}
          value={wordsText}
          placeholder="Type your new words here..."
        />
        <span className="input-text__tip">
          Your words will be splited by comma or enter key.
        </span>
        <ContainerButtons>
          <SendButton
            onClick={formatWords}
            color={colors.light.home.input_text.button.color}
            background_color={
              colors.light.home.input_text.button.background_color
            }
            background_color_hover={
              colors.light.home.input_text.button.background_color_hover
            }
          >
            List words
          </SendButton>
        </ContainerButtons>
      </ContainerInputText>
      <ContainerWords
        color={colors.light.home.words.color}
        background_color={colors.light.home.words.background_color}
      >
        <span className="list-words__title">
          {`You've ${words.length} new words`}
        </span>
        {words.length > 0 ? (
          words.map((currentWord, index) => (
            <a
              className="list-words__word"
              key={`${currentWord.word}-${index}`}
              href={currentWord.url}
              target="_blank"
              rel="noreferrer"
            >
              {currentWord.word}
            </a>
          ))
        ) : (
          <span className="list-words__warning">No words to be listed</span>
        )}
      </ContainerWords>
    </Container>
  );
};

export default HomePage;
