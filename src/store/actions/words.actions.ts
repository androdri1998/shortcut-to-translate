/* eslint-disable camelcase */
import { TWord } from '../../@types';

interface IWordsActions {
  ASYNC_FETCH_RECENT_WORDS: string;
  FETCH_RECENT_WORDS: string;
  ASYNC_SAVE_NEW_WORDS: string;
  CHANGE_LIST_WORDS: string;
}

const wordsActions = {
  ASYNC_FETCH_RECENT_WORDS: '@words/ASYNC_FETCH_RECENT_WORDS',
  FETCH_RECENT_WORDS: '@words/FETCH_RECENT_WORDS',
  ASYNC_SAVE_NEW_WORDS: '@words/ASYNC_SAVE_NEW_WORDS',
  CHANGE_LIST_WORDS: '@words/CHANGE_LIST_WORDS',
} as IWordsActions;

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
