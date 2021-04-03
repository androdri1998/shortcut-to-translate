/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { keyStoreConstants } from '../utils/appConstants';
import { TWord } from '../@types';
import { IStorageProvider } from '../providers/StorageProvider';

interface IExecuteDTO {
  search?: string;
}

interface IExecuteResponse {
  favorite_words: TWord[];
}

export default class ListFavoriteWordsService {
  private storageProvider: IStorageProvider;

  constructor(storageProvider: IStorageProvider) {
    this.storageProvider = storageProvider;
  }

  execute({ search }: IExecuteDTO): IExecuteResponse {
    const currentWords: TWord[] = this.storageProvider.get({
      key: keyStoreConstants.WORDS,
    });

    let favoriteWords: TWord[] = [];
    if (currentWords) {
      if (search) {
        favoriteWords = currentWords.filter(
          currentWord =>
            currentWord.favorited_at &&
            currentWord.word.toLowerCase().includes(search.toLowerCase()),
        );
      } else {
        favoriteWords = currentWords.filter(
          currentWord => currentWord.favorited_at,
        );
      }
    }

    return { favorite_words: favoriteWords };
  }
}
