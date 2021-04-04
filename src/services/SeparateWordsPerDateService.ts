/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { TWord } from '../@types';

interface IExecuteDTO {
  words: TWord[];
}

interface IExecuteResponse {
  [key: string]: TWord[];
}

export default class SeparateWordsPerDateService {
  execute({ words }: IExecuteDTO): IExecuteResponse {
    const wordsSeparated: IExecuteResponse = {};
    const wordsSortedByDate = words.sort((a, b) => {
      if (a.created_at < b.created_at) {
        return 1;
      }
      if (a.created_at > b.created_at) {
        return -1;
      }
      return 0;
    });

    wordsSortedByDate.forEach(currentWord => {
      const createdAt = currentWord.created_at.split('T')[0];
      if (!wordsSeparated[createdAt]) {
        wordsSeparated[createdAt] = [];
        wordsSeparated[createdAt].push(currentWord);
      } else {
        wordsSeparated[createdAt].push(currentWord);
      }
    });

    return wordsSeparated;
  }
}
