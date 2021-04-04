/* eslint-disable camelcase */
export type TWord = {
  created_at: string;
  word: string;
  word_sanitalized: string;
  favorited_at?: string | null;
  url: string;
  id: string;
};
