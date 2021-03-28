import React from 'react';

import colors from '../../utils/colors';

import { Container, ContainerHeader, ItemNav } from './styles';

const WrapperPagesComponent: React.FC = ({ children }) => {
  return (
    <Container>
      <ContainerHeader color={colors.light.header.title}>
        <h1 className="header-general__title">Translate&apos;s Shortcut</h1>
        <nav className="header-general__nav">
          <ItemNav color={colors.light.header.nav.item.color}>
            Favorites Words
          </ItemNav>
        </nav>
      </ContainerHeader>
      {children}
    </Container>
  );
};

export default WrapperPagesComponent;
