import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { MdStarBorder, MdStar } from 'react-icons/md';

import colors from '../../utils/colors';

import { Container } from './styles';
import {
  asyncFavoriteWord,
  asyncRemoveFavoriteWord,
} from '../../store/actions/words.actions';

interface IPropsFavoriteButton {
  wordId: string;
  favorited: boolean;
}

const FavoriteButton: React.FC<IPropsFavoriteButton> = ({
  wordId,
  favorited,
}) => {
  const dispatch = useDispatch();
  const removeFavoriteWord = useCallback(
    ({ wordIdToRemoveFavorite }) => {
      dispatch(asyncRemoveFavoriteWord({ wordId: wordIdToRemoveFavorite }));
    },
    [dispatch],
  );

  const favoriteWord = useCallback(
    ({ wordIdToFavorite }) => {
      dispatch(asyncFavoriteWord({ wordId: wordIdToFavorite }));
    },
    [dispatch],
  );

  const handleFavoriteWords = useCallback(() => {
    if (favorited) {
      removeFavoriteWord({ wordIdToRemoveFavorite: wordId });
    } else {
      favoriteWord({ wordIdToFavorite: wordId });
    }
  }, [removeFavoriteWord, favoriteWord, favorited, wordId]);

  return (
    <Container
      onClick={handleFavoriteWords}
      background_color_hover={
        colors.light.home.words.button_exclude.background_color_hover
      }
    >
      {favorited ? (
        <MdStar color={colors.light.home.words.color} size={16} />
      ) : (
        <MdStarBorder color={colors.light.home.words.color} size={16} />
      )}
    </Container>
  );
};

export default FavoriteButton;
