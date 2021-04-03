import React from 'react';

import colors from '../../../../utils/colors';

import { Container } from './styles';

interface IWordComponent {
  word: string;
  url: string;
}

const WordComponent: React.FC<IWordComponent> = ({ word, url }) => {
  return (
    <Container
      color={colors.light.home.words.color}
      background_color={colors.light.home.words.background_color}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {word}
    </Container>
  );
};

export default WordComponent;
