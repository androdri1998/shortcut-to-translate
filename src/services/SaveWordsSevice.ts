/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { keyStoreConstants } from '../utils/appConstants';
import { TWord } from '../@types';
import { IStorageProvider } from '../providers/StorageProvider';

interface IExecuteDTO {
  words: TWord[];
}

interface IExecuteResponse {
  words: TWord[];
  all_words: TWord[];
}

export default class SaveWordsService {
  private storageProvider: IStorageProvider;

  constructor(storageProvider: IStorageProvider) {
    this.storageProvider = storageProvider;
  }

  execute({ words }: IExecuteDTO): IExecuteResponse {
    const currentWords = this.storageProvider.get({
      key: keyStoreConstants.WORDS,
    });

    let wordsToBeSave = [];
    if (currentWords) {
      const arrWords = currentWords.map(
        (currentWord: TWord) => currentWord.word,
      );

      const wordsNotIncluded: TWord[] = [];
      words.forEach((currentWord: TWord) => {
        if (!arrWords.includes(currentWord.word)) {
          wordsNotIncluded.push(currentWord);
        }
      });

      wordsToBeSave = wordsNotIncluded.concat(currentWords);
    } else {
      wordsToBeSave = words;
    }

    this.storageProvider.store({
      key: keyStoreConstants.WORDS,
      value: wordsToBeSave,
    });

    return { all_words: wordsToBeSave, words };
  }
}
