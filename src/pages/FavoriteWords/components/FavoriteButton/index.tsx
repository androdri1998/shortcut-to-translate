import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { MdStar } from 'react-icons/md';

import colors from '../../../../utils/colors';

import { Container } from './styles';
import { asyncRemoveFavoriteWordFromFavoriteWordPage } from '../../../../store/actions/words.actions';

interface IPropsFavoriteButton {
  wordId: string;
}

const FavoriteButton: React.FC<IPropsFavoriteButton> = ({ wordId }) => {
  const dispatch = useDispatch();
  const removeFavoriteWord = useCallback(
    ({ wordIdToRemoveFavorite }) => {
      dispatch(
        asyncRemoveFavoriteWordFromFavoriteWordPage({
          wordId: wordIdToRemoveFavorite,
        }),
      );
    },
    [dispatch],
  );

  return (
    <Container
      onClick={() => removeFavoriteWord({ wordIdToRemoveFavorite: wordId })}
      background_color_hover={
        colors.light.home.words.button_exclude.background_color_hover
      }
    >
      <MdStar color={colors.light.home.words.color} size={16} />
    </Container>
  );
};

export default FavoriteButton;
