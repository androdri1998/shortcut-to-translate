/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { keyStoreConstants } from '../utils/appConstants';
import { TWord } from '../@types';
import { IStorageProvider } from '../providers/StorageProvider';

interface IExecuteDTO {
  wordId: string;
}

export default class FavoriteWordService {
  private storageProvider: IStorageProvider;

  constructor(storageProvider: IStorageProvider) {
    this.storageProvider = storageProvider;
  }

  execute({ wordId }: IExecuteDTO): TWord | null {
    const currentWords: TWord[] = this.storageProvider.get({
      key: keyStoreConstants.WORDS,
    });

    let newWords: TWord[] = [];
    let favoriteWord: TWord | null = null;
    if (currentWords) {
      const favoriteWordIndex = currentWords.findIndex(
        currentWord => currentWord.id === wordId,
      );
      newWords = currentWords.filter(currentWord => currentWord.id !== wordId);

      const favoritedAt = new Date().toISOString();
      favoriteWord = {
        ...currentWords[favoriteWordIndex],
        favorited_at: favoritedAt,
      };

      newWords = [favoriteWord, ...newWords];
    }

    this.storageProvider.store({
      key: keyStoreConstants.WORDS,
      value: newWords,
    });

    return favoriteWord;
  }
}
