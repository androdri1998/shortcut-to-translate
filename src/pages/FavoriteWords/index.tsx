/* eslint-disable react/no-array-index-key */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Word from './components/Word';

import { IReducerState } from '../../store/rootReducer';
import colors from '../../utils/colors';

import {
  Container,
  ContainerInputText,
  InputArea,
  ContainerGroupWordLists,
  ContainerWords,
} from './styles';

import { asyncFetchFavoriteWords } from '../../store/actions/words.actions';

const AllWords: React.FC = () => {
  const dispatch = useDispatch();
  const words = useSelector((state: IReducerState) => state.wordsReducer.words);

  const [wordsText, setWordsText] = useState('');

  useEffect(() => {
    dispatch(asyncFetchFavoriteWords({ search: wordsText }));
  }, [dispatch, wordsText]);

  const handleWordsText = useCallback(event => {
    setWordsText(event.target.value);
  }, []);

  return (
    <Container>
      <ContainerInputText>
        <span className="input-text__title">Search words</span>
        <InputArea
          onChange={handleWordsText}
          value={wordsText}
          placeholder="Type your new words here..."
        />
      </ContainerInputText>
      <ContainerGroupWordLists>
        <span className="list-words__title">
          {`You've ${words.length} listed words`}
        </span>
        <ContainerWords border_color={colors.light.home.words.background_color}>
          {words.length > 0 ? (
            words.map((currentWord, index) => (
              <Word
                url={currentWord.url}
                word={currentWord.word}
                wordId={currentWord.id}
                key={`${currentWord.word}-${index}`}
              />
            ))
          ) : (
            <span className="list-words__warning">No words to be listed</span>
          )}
        </ContainerWords>
      </ContainerGroupWordLists>
    </Container>
  );
};

export default AllWords;
