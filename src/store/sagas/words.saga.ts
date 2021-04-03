/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { takeEvery, put, ForkEffect, select } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';

import SaveWordsSevice from '../../services/SaveWordsSevice';
import ListRecentWordsService from '../../services/ListRecentWordsService';
import ListAllWordsService from '../../services/ListAllWordsService';
import ListFavoriteWordsService from '../../services/ListFavoriteWordsService';
import RemoveWordService from '../../services/RemoveWordService';
import FavoriteWordService from '../../services/FavoriteWordService';
import RemoveFavoriteWordService from '../../services/RemoveFavoriteWordService';
import StorageProvider from '../../providers/implementations/StorageProvider';

import appConfig from '../../config/app';
import wordsActions, { changeListWords } from '../actions/words.actions';
import { TWord } from '../../@types';

interface IAsyncFetchAllWordsDTO {
  type: string;
  payload: {
    search: string;
  };
}

function* asyncFetchAllWords({ payload: { search } }: IAsyncFetchAllWordsDTO) {
  const storageProvider = new StorageProvider();
  const listAllWordsService = new ListAllWordsService(storageProvider);

  const { all_words: allWords } = listAllWordsService.execute({ search });

  yield put(
    changeListWords({
      words: allWords,
    }),
  );
}

interface IAsyncFetchFavoriteWordsDTO {
  type: string;
  payload: {
    search: string;
  };
}

function* asyncFetchFavoriteWords({
  payload: { search },
}: IAsyncFetchFavoriteWordsDTO) {
  const storageProvider = new StorageProvider();
  const listFavoriteWordsService = new ListFavoriteWordsService(
    storageProvider,
  );

  const { favorite_words: favoriteWords } = listFavoriteWordsService.execute({
    search,
  });

  yield put(
    changeListWords({
      words: favoriteWords,
    }),
  );
}

function* asyncFetchRecentWords() {
  const storageProvider = new StorageProvider();
  const listRecentWordsService = new ListRecentWordsService(storageProvider);

  const { recent_words: recentWords } = listRecentWordsService.execute();

  yield put(
    changeListWords({
      words: recentWords,
    }),
  );
}

interface IAsyncRemoveWordDTO {
  type: string;
  payload: {
    wordId: string;
  };
}

function* asyncRemoveWord({ payload: { wordId } }: IAsyncRemoveWordDTO) {
  const storageProvider = new StorageProvider();
  const removeWordService = new RemoveWordService(storageProvider);

  const { isRemoved } = removeWordService.execute({ wordId });

  let newWords: TWord[] = [];
  if (isRemoved) {
    const currentWords: TWord[] = yield select(
      state => state.wordsReducer.words,
    );
    newWords = currentWords.filter(word => word.id !== wordId);
  }

  yield put(
    changeListWords({
      words: newWords,
    }),
  );
}

interface IAsyncFavoriteWordDTO {
  type: string;
  payload: {
    wordId: string;
  };
}

function* asyncFavoriteWord({ payload: { wordId } }: IAsyncFavoriteWordDTO) {
  const storageProvider = new StorageProvider();
  const favoriteWordService = new FavoriteWordService(storageProvider);

  const wordUpdated: TWord | null = favoriteWordService.execute({ wordId });

  let newWords: TWord[] = [];
  if (newWords) {
    const currentWords: TWord[] = yield select(
      state => state.wordsReducer.words,
    );
    newWords = currentWords.filter(word => word.id !== wordId);
    newWords = [wordUpdated as TWord, ...newWords];
  }

  yield put(
    changeListWords({
      words: newWords,
    }),
  );
}

interface IAsyncRemoveFavoriteWordDTO {
  type: string;
  payload: {
    wordId: string;
  };
}

function* asyncRemoveFavoriteWord({
  payload: { wordId },
}: IAsyncRemoveFavoriteWordDTO) {
  const storageProvider = new StorageProvider();
  const removeFavoriteWordService = new RemoveFavoriteWordService(
    storageProvider,
  );

  const wordUpdated: TWord | null = removeFavoriteWordService.execute({
    wordId,
  });

  let newWords: TWord[] = [];
  if (newWords) {
    const currentWords: TWord[] = yield select(
      state => state.wordsReducer.words,
    );
    newWords = currentWords.filter(word => word.id !== wordId);
    newWords = [wordUpdated as TWord, ...newWords];
  }

  yield put(
    changeListWords({
      words: newWords,
    }),
  );
}

interface IAsyncRemoveFavoriteWordFromFavoriteWordPageDTO {
  type: string;
  payload: {
    wordId: string;
  };
}

function* asyncRemoveFavoriteWordFromFavoriteWordPage({
  payload: { wordId },
}: IAsyncRemoveFavoriteWordFromFavoriteWordPageDTO) {
  const storageProvider = new StorageProvider();
  const removeFavoriteWordService = new RemoveFavoriteWordService(
    storageProvider,
  );

  removeFavoriteWordService.execute({
    wordId,
  });

  let newWords: TWord[] = [];
  if (newWords) {
    const currentWords: TWord[] = yield select(
      state => state.wordsReducer.words,
    );
    newWords = currentWords.filter(word => word.id !== wordId);
    newWords = [...newWords];
  }

  yield put(
    changeListWords({
      words: newWords,
    }),
  );
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
  yield takeEvery(wordsActions.ASYNC_FETCH_ALL_WORDS, asyncFetchAllWords);
  yield takeEvery(
    wordsActions.ASYNC_FETCH_FAVORITE_WORDS,
    asyncFetchFavoriteWords,
  );
  yield takeEvery(wordsActions.ASYNC_FETCH_RECENT_WORDS, asyncFetchRecentWords);
  yield takeEvery(wordsActions.ASYNC_SAVE_NEW_WORDS, asyncSaveNewWords);
  yield takeEvery(wordsActions.ASYNC_REMOVE_WORDS, asyncRemoveWord);
  yield takeEvery(wordsActions.ASYNC_FAVORITE_WORD, asyncFavoriteWord);
  yield takeEvery(
    wordsActions.ASYNC_REMOVE_FAVORITE_WORD,
    asyncRemoveFavoriteWord,
  );
  yield takeEvery(
    wordsActions.ASYNC_REMOVE_FAVORITE_WORD_FROM_FAVORITE_WORD_PAGE,
    asyncRemoveFavoriteWordFromFavoriteWordPage,
  );
}
