/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { keyStoreConstants } from '../utils/appConstants';
import { TWord } from '../@types';
import { IStorageProvider } from '../providers/StorageProvider';

interface IExecuteResponse {
  recent_words: TWord[];
}

export default class ListRecentWordsService {
  private storageProvider: IStorageProvider;

  constructor(storageProvider: IStorageProvider) {
    this.storageProvider = storageProvider;
  }

  execute(): IExecuteResponse {
    const currentWords: TWord[] = this.storageProvider.get({
      key: keyStoreConstants.WORDS,
    });

    let recentWords: TWord[] = [];
    if (currentWords) {
      const wordsSortedByDate = currentWords.sort((a, b) => {
        if (a.created_at < b.created_at) {
          return 1;
        }
        if (a.created_at > b.created_at) {
          return -1;
        }
        return 0;
      });
      recentWords = wordsSortedByDate.slice(0, 15);
    }

    return { recent_words: recentWords };
  }
}
