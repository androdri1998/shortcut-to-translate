/* eslint-disable camelcase */
import wordsActions from '../actions/words.actions';
import { TWord } from '../../@types';

export interface IWordsState {
  words: TWord[];
}

const initialState: IWordsState = {
  words: [],
};

interface IActionDTO {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

const wordsReducer = (
  state = initialState,
  action: IActionDTO,
): IWordsState => {
  switch (action.type) {
    case wordsActions.CHANGE_LIST_WORDS:
      return { ...state, words: action.payload.words };
    default:
      return state;
  }
};

export default wordsReducer;
