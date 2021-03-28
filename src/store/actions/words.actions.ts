/* eslint-disable camelcase */
interface IWordsActions {
  ASYNC_FETCH_RECENT_WORDS: string;
  FETCH_RECENT_WORDS: string;
  ASYNC_LIST_WORDS: string;
  CHANGE_LIST_WORDS: string;
}

const wordsActions = {
  ASYNC_FETCH_RECENT_WORDS: '@words/ASYNC_FETCH_RECENT_WORDS',
  FETCH_RECENT_WORDS: '@words/FETCH_RECENT_WORDS',
  ASYNC_LIST_WORDS: '@words/ASYNC_LIST_WORDS',
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

interface IAsyncListWordsResponse {
  type: string;
  payload: {
    wordsText: string;
  };
}

export const asyncListWords = ({
  wordsText,
}: IAsyncListWordsDTO): IAsyncListWordsResponse => ({
  type: wordsActions.ASYNC_LIST_WORDS,
  payload: {
    wordsText,
  },
});

type TWord = {
  date: string;
  word: string;
  word_sanitalized: string;
  url: string;
  id: string;
};

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
