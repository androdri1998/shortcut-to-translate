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

interface IObjectWords {
  [key: string]: TWord;
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
    let wordsToReturn: TWord[] = [];
    if (currentWords) {
      const arrWords: IObjectWords = {};
      currentWords.forEach((currentWord: TWord) => {
        arrWords[currentWord.word] = currentWord;
      });

      const wordsNotIncluded: TWord[] = [];
      const wordsIncluded: TWord[] = [];
      words.forEach((currentWord: TWord) => {
        if (!Object.keys(arrWords).includes(currentWord.word)) {
          wordsNotIncluded.push(currentWord);
        } else {
          wordsIncluded.push(arrWords[currentWord.word]);
        }
      });

      wordsToBeSave = wordsNotIncluded.concat(currentWords);
      wordsToReturn = wordsNotIncluded.concat(wordsIncluded);
    } else {
      wordsToBeSave = words;
    }

    this.storageProvider.store({
      key: keyStoreConstants.WORDS,
      value: wordsToBeSave,
    });

    return { all_words: wordsToBeSave, words: wordsToReturn };
  }
}
