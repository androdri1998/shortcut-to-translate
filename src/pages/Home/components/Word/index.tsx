import React from 'react';

import FavoriteButton from '../../../../components/FavoriteButton';

import colors from '../../../../utils/colors';

import { Container, ContainerLink } from './styles';

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
    </Container>
  );
};

export default WordComponent;
