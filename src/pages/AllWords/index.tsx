/* eslint-disable react/no-array-index-key */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Word from '../../components/Word';

import { IReducerState } from '../../store/rootReducer';

import {
  Container,
  ContainerInputText,
  InputArea,
  ContainerWords,
} from './styles';

import { asyncFetchAllWords } from '../../store/actions/words.actions';

const AllWords: React.FC = () => {
  const dispatch = useDispatch();
  const words = useSelector((state: IReducerState) => state.wordsReducer.words);

  const [wordsText, setWordsText] = useState('');

  useEffect(() => {
    dispatch(asyncFetchAllWords({ search: wordsText }));
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
      <ContainerWords>
        <span className="list-words__title">
          {`You've ${words.length} listed words`}
        </span>
        {words.length > 0 ? (
          words.map((currentWord, index) => (
            <Word
              url={currentWord.url}
              word={currentWord.word}
              key={`${currentWord.word}-${index}`}
            />
          ))
        ) : (
          <span className="list-words__warning">No words to be listed</span>
        )}
      </ContainerWords>
    </Container>
  );
};

export default AllWords;
