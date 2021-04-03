/* eslint-disable camelcase */
import { TWord } from '../../@types';

interface IWordsActions {
  ASYNC_FETCH_ALL_WORDS: string;
  ASYNC_FETCH_FAVORITE_WORDS: string;
  ASYNC_FETCH_RECENT_WORDS: string;
  ASYNC_FAVORITE_WORD: string;
  ASYNC_REMOVE_FAVORITE_WORD: string;
  ASYNC_REMOVE_FAVORITE_WORD_FROM_FAVORITE_WORD_PAGE: string;
  ASYNC_REMOVE_WORDS: string;
  ASYNC_SAVE_NEW_WORDS: string;
  CHANGE_LIST_WORDS: string;
}

const wordsActions = {
  ASYNC_FAVORITE_WORD: '@words/ASYNC_FAVORITE_WORD',
  ASYNC_FETCH_FAVORITE_WORDS: '@words/ASYNC_FETCH_FAVORITE_WORDS',
  ASYNC_REMOVE_FAVORITE_WORD: '@words/ASYNC_REMOVE_FAVORITE_WORD',
  ASYNC_REMOVE_FAVORITE_WORD_FROM_FAVORITE_WORD_PAGE:
    '@words/ASYNC_REMOVE_FAVORITE_WORD_FROM_FAVORITE_WORD_PAGE',
  ASYNC_FETCH_ALL_WORDS: '@words/ASYNC_FETCH_ALL_WORDS',
  ASYNC_REMOVE_WORDS: '@words/ASYNC_REMOVE_WORDS',
  ASYNC_FETCH_RECENT_WORDS: '@words/ASYNC_FETCH_RECENT_WORDS',
  ASYNC_SAVE_NEW_WORDS: '@words/ASYNC_SAVE_NEW_WORDS',
  CHANGE_LIST_WORDS: '@words/CHANGE_LIST_WORDS',
} as IWordsActions;

interface IAsyncFetchAllWordsDTO {
  search: string;
}

interface IAsyncFetchAllWordsResponse {
  type: string;
  payload: {
    search: string;
  };
}

export const asyncFetchAllWords = ({
  search,
}: IAsyncFetchAllWordsDTO): IAsyncFetchAllWordsResponse => ({
  type: wordsActions.ASYNC_FETCH_ALL_WORDS,
  payload: {
    search,
  },
});

interface IAsyncFetchFavoriteWordsDTO {
  search: string;
}

interface IAsyncFetchFavoriteWordsResponse {
  type: string;
  payload: {
    search: string;
  };
}

export const asyncFetchFavoriteWords = ({
  search,
}: IAsyncFetchFavoriteWordsDTO): IAsyncFetchFavoriteWordsResponse => ({
  type: wordsActions.ASYNC_FETCH_FAVORITE_WORDS,
  payload: {
    search,
  },
});

interface IAsyncRemoveWordDTO {
  wordId: string;
}

interface IAsyncRemoveWordResponse {
  type: string;
  payload: {
    wordId: string;
  };
}

export const asyncRemoveWord = ({
  wordId,
}: IAsyncRemoveWordDTO): IAsyncRemoveWordResponse => ({
  type: wordsActions.ASYNC_REMOVE_WORDS,
  payload: {
    wordId,
  },
});

interface IAsyncFavoriteWordDTO {
  wordId: string;
}

interface IAsyncFavoriteWordResponse {
  type: string;
  payload: {
    wordId: string;
  };
}

export const asyncFavoriteWord = ({
  wordId,
}: IAsyncFavoriteWordDTO): IAsyncFavoriteWordResponse => ({
  type: wordsActions.ASYNC_FAVORITE_WORD,
  payload: {
    wordId,
  },
});

interface IAsyncRemoveFavoriteWordFromFavoriteWordPageDTO {
  wordId: string;
}

interface IAsyncRemoveFavoriteWordFromFavoriteWordPageResponse {
  type: string;
  payload: {
    wordId: string;
  };
}

export const asyncRemoveFavoriteWordFromFavoriteWordPage = ({
  wordId,
}: IAsyncRemoveFavoriteWordFromFavoriteWordPageDTO): IAsyncRemoveFavoriteWordFromFavoriteWordPageResponse => ({
  type: wordsActions.ASYNC_REMOVE_FAVORITE_WORD_FROM_FAVORITE_WORD_PAGE,
  payload: {
    wordId,
  },
});

interface IAsyncRemoveFavoriteWordDTO {
  wordId: string;
}

interface IAsyncRemoveFavoriteWordResponse {
  type: string;
  payload: {
    wordId: string;
  };
}

export const asyncRemoveFavoriteWord = ({
  wordId,
}: IAsyncRemoveFavoriteWordDTO): IAsyncRemoveFavoriteWordResponse => ({
  type: wordsActions.ASYNC_REMOVE_FAVORITE_WORD,
  payload: {
    wordId,
  },
});

interface IAsyncFetchRecentWordsResponse {
  type: string;
}

export const asyncFetchRecentWords = (): IAsyncFetchRecentWordsResponse => ({
  type: wordsActions.ASYNC_FETCH_RECENT_WORDS,
});

interface IAsyncListWordsDTO {
  wordsText: string;
}

interface IAsyncSaveNewWordsResponse {
  type: string;
  payload: {
    wordsText: string;
  };
}

export const asyncSaveNewWords = ({
  wordsText,
}: IAsyncListWordsDTO): IAsyncSaveNewWordsResponse => ({
  type: wordsActions.ASYNC_SAVE_NEW_WORDS,
  payload: {
    wordsText,
  },
});

interface IChangeListWordsDTO {
  words: TWord[];
}

interface IChangeListWordsResponse {
  type: string;
  payload: { words: TWord[] };
}

export const changeListWords = ({
  words,
}: IChangeListWordsDTO): IChangeListWordsResponse => ({
  type: wordsActions.CHANGE_LIST_WORDS,
  payload: {
    words,
  },
});

export default wordsActions;
