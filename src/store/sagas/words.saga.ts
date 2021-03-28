/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { takeEvery, put, ForkEffect } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';

import appConfig from '../../config/app';
import wordsActions, { changeListWords } from '../actions/words.actions';

function* asyncFetchRecentWords() {
  yield put({ type: wordsActions.FETCH_RECENT_WORDS });
}

interface IAsyncListWordsDTO {
  type: string;
  payload: {
    wordsText: string;
  };
}

function* asyncListWords({ payload: { wordsText } }: IAsyncListWordsDTO) {
  const replacedWords = wordsText.replace(/\n/g, ',');
  const arrWords = replacedWords.split(',');

  const wordsFiltered = arrWords.map(word => ({
    word,
    word_trim: word.trim(),
  }));

  const listWords = wordsFiltered.map(currentWord => {
    const wordFiltered = currentWord.word_trim
      .replace("'", '%27')
      .replace(' ', '-');

    return {
      id: uuidv4(),
      date: new Date().toISOString(),
      word: currentWord.word_trim,
      word_sanitalized: wordFiltered,
      url: `${appConfig.site_to_translate}/${wordFiltered}`,
    };
  });

  yield put(
    changeListWords({
      words: listWords,
    }),
  );
}

export default function* wordsSaga(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeEvery(wordsActions.ASYNC_FETCH_RECENT_WORDS, asyncFetchRecentWords);
  yield takeEvery(wordsActions.ASYNC_LIST_WORDS, asyncListWords);
}
