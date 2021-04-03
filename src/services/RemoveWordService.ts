/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { keyStoreConstants } from '../utils/appConstants';
import { TWord } from '../@types';
import { IStorageProvider } from '../providers/StorageProvider';

interface IExecuteDTO {
  wordId: string;
}

interface IExecuteResponse {
  isRemoved: boolean;
}

export default class RemoveWordService {
  private storageProvider: IStorageProvider;

  constructor(storageProvider: IStorageProvider) {
    this.storageProvider = storageProvider;
  }

  execute({ wordId }: IExecuteDTO): IExecuteResponse {
    const currentWords: TWord[] = this.storageProvider.get({
      key: keyStoreConstants.WORDS,
    });

    let newWords: TWord[] = [];
    if (currentWords) {
      newWords = currentWords.filter(currentWord => currentWord.id !== wordId);
    }

    this.storageProvider.store({
      key: keyStoreConstants.WORDS,
      value: newWords,
    });

    const isRemoved = true;

    return { isRemoved };
  }
}
