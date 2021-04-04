/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { TWord } from '../@types';

interface IExecuteDTO {
  words: TWord[];
}

interface IExecuteResponse {
  [key: string]: TWord[];
}

export default class SeparateWordsPerCreateAtService {
  execute({ words }: IExecuteDTO): IExecuteResponse {
    const wordsSeparated: IExecuteResponse = {};
    const wordsSortedByDate = words.sort((a, b) => {
      if (a.favorited_at && b.favorited_at && a.favorited_at < b.favorited_at) {
        return 1;
      }
      if (a.favorited_at && b.favorited_at && a.favorited_at > b.favorited_at) {
        return -1;
      }
      return 0;
    });

    wordsSortedByDate.forEach(currentWord => {
      const favoritedAt = currentWord.favorited_at
        ? currentWord.favorited_at.split('T')[0]
        : null;

      if (favoritedAt) {
        if (!wordsSeparated[favoritedAt]) {
          wordsSeparated[favoritedAt] = [];
          wordsSeparated[favoritedAt].push(currentWord);
        } else {
          wordsSeparated[favoritedAt].push(currentWord);
        }
      }
    });

    return wordsSeparated;
  }
}
