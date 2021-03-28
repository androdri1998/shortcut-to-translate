/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import wordsReducer, { IWordsState } from './reducers/words.reducer';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IReducerState {
  wordsReducer: IWordsState;
}

const reducer = (history: History<any>): any =>
  combineReducers({
    router: connectRouter(history),
    wordsReducer,
  });

export default reducer;
