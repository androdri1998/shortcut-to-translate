/* eslint-disable react/no-array-index-key */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DateIndicator from '../../components/DateIndicator';
import Word from './components/Word';

import SeparateWordsPerFavoritedAtService from '../../services/SeparateWordsPerFavoritedAtService';

import { IReducerState } from '../../store/rootReducer';
import colors from '../../utils/colors';
import { TWord } from '../../@types';

import {
  Container,
  ContainerInputText,
  InputArea,
  ContainerGroupWordLists,
  ContainerWords,
} from './styles';

import { asyncFetchFavoriteWords } from '../../store/actions/words.actions';

interface IWords {
  [key: string]: TWord[];
}

const AllWords: React.FC = () => {
  const dispatch = useDispatch();
  const wordsRedux = useSelector(
    (state: IReducerState) => state.wordsReducer.words,
  );

  const [words, setWords] = useState<IWords>({});
  const [wordsText, setWordsText] = useState('');

  useEffect(() => {
    dispatch(asyncFetchFavoriteWords({ search: wordsText }));
  }, [dispatch, wordsText]);

  useEffect(() => {
    const separateWordsPerFavoritedAtService = new SeparateWordsPerFavoritedAtService();
    const wordsSeparated = separateWordsPerFavoritedAtService.execute({
      words: wordsRedux,
    });
    setWords(wordsSeparated);
  }, [wordsRedux]);

  const handleWordsText = useCallback(event => {
    setWordsText(event.target.value);
  }, []);

  return (
    <Container>
      <ContainerInputText>
        <span className="input-text__title">Search your favorite words</span>
        <InputArea
          onChange={handleWordsText}
          value={wordsText}
          placeholder="Type your new words here..."
        />
      </ContainerInputText>
      <ContainerGroupWordLists>
        <span className="list-words__title">
          {`You've ${wordsRedux.length} favorite words listed`}
        </span>
        <ContainerWords border_color={colors.light.home.words.background_color}>
          {Object.keys(words).length > 0 ? (
            Object.keys(words).map((currentDate, indexDate) => (
              <div
                className="list-words__group-words"
                key={`${currentDate}-${indexDate}`}
              >
                <DateIndicator date={currentDate} />
                {words[currentDate].map((currentWord, index) => (
                  <Word
                    url={currentWord.url}
                    word={currentWord.word}
                    wordId={currentWord.id}
                    key={`${currentWord.word}-${index}`}
                  />
                ))}
              </div>
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
