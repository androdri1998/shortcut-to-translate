import React, { useCallback } from 'react';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { asyncRemoveWord } from '../../store/actions/words.actions';

import FavoriteButton from '../FavoriteButton';

import colors from '../../utils/colors';

import { Container, ContainerLink, ExcludeButton } from './styles';

interface IWordComponent {
  word: string;
  url: string;
  wordId: string;
  favoritedAt?: string | null;
}

const WordComponent: React.FC<IWordComponent> = ({
  word,
  url,
  wordId,
  favoritedAt,
}) => {
  const dispatch = useDispatch();

  const removeWord = useCallback(
    (wordIdToRemove: string) => {
      dispatch(asyncRemoveWord({ wordId: wordIdToRemove }));
    },
    [dispatch],
  );

  return (
    <Container background_color={colors.light.home.words.background_color}>
      <ContainerLink
        color={colors.light.home.words.color}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {word}
      </ContainerLink>
      <FavoriteButton wordId={wordId} favorited={!!favoritedAt} />
      <ExcludeButton
        onClick={() => removeWord(wordId)}
        background_color_hover={
          colors.light.home.words.button_exclude.background_color_hover
        }
      >
        <MdClose color={colors.light.home.words.color} size={16} />
      </ExcludeButton>
    </Container>
  );
};

export default WordComponent;
