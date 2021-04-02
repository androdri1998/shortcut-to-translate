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
    const currentWords = this.storageProvider.get({
      key: keyStoreConstants.WORDS,
    });

    let recentWords = [];
    if (currentWords) {
      recentWords = currentWords.slice(0, 15);
    }

    return { recent_words: recentWords };
  }
}
