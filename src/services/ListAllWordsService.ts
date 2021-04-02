/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { keyStoreConstants } from '../utils/appConstants';
import { TWord } from '../@types';
import { IStorageProvider } from '../providers/StorageProvider';

interface IExecuteDTO {
  search?: string;
}

interface IExecuteResponse {
  all_words: TWord[];
}

export default class ListAllWordsService {
  private storageProvider: IStorageProvider;

  constructor(storageProvider: IStorageProvider) {
    this.storageProvider = storageProvider;
  }

  execute({ search }: IExecuteDTO): IExecuteResponse {
    const currentWords: TWord[] = this.storageProvider.get({
      key: keyStoreConstants.WORDS,
    });

    let allWords: TWord[] = [];
    if (currentWords) {
      if (search) {
        allWords = currentWords.filter(currentWord =>
          currentWord.word.toLowerCase().includes(search.toLowerCase()),
        );
      } else {
        allWords = currentWords;
      }
    }

    return { all_words: allWords };
  }
}
