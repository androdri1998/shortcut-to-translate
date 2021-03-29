/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { takeEvery, put, ForkEffect } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';

import SaveWordsSevice from '../../services/SaveWordsSevice';
import StorageProvider from '../../providers/implementations/StorageProvider';

import appConfig from '../../config/app';
import wordsActions, { changeListWords } from '../actions/words.actions';
import { TWord } from '../../@types';

function* asyncFetchRecentWords() {
  yield put({ type: wordsActions.FETCH_RECENT_WORDS });
}

interface IAsyncSaveNewWordsDTO {
  type: string;
  payload: {
    wordsText: string;
  };
}

function* asyncSaveNewWords({ payload: { wordsText } }: IAsyncSaveNewWordsDTO) {
  const replacedWords = wordsText.replace(/\n/g, ',');
  const arrWords = replacedWords.split(',');

  const wordsFiltered = arrWords.map(word => ({
    word,
    word_trim: word.trim(),
  }));

  const listWords: TWord[] = [];
  wordsFiltered.forEach(currentWord => {
    const wordFiltered = currentWord.word_trim
      .replace("'", '%27')
      .replace(' ', '-');

    if (currentWord.word_trim !== '') {
      listWords.push({
        id: uuidv4(),
        date: new Date().toISOString(),
        word: currentWord.word_trim,
        word_sanitalized: wordFiltered,
        url: `${appConfig.site_to_translate}/${wordFiltered}`,
      });
    }
  });

  const storageProvider = new StorageProvider();
  const saveWordsSevice = new SaveWordsSevice(storageProvider);

  const { words: wordsSaved } = saveWordsSevice.execute({
    words: listWords,
  });

  yield put(
    changeListWords({
      words: wordsSaved,
    }),
  );
}

export default function* wordsSaga(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeEvery(wordsActions.ASYNC_FETCH_RECENT_WORDS, asyncFetchRecentWords);
  yield takeEvery(wordsActions.ASYNC_SAVE_NEW_WORDS, asyncSaveNewWords);
}
