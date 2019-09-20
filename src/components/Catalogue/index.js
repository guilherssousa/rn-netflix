import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';


import { Container, CatalogueContainer, CatalogueTop, CatalogueTitle, CatalogueTabs, CatalogueItem, CatalogueText } from './styles';

export default function Catalogue({ name, movies }) {
    return (
        <Container>
            <CatalogueContainer>
                <CatalogueTop>
                    <CatalogueTitle>{name}</CatalogueTitle>
                    <Icon name="arrow-right" size={16} color="#FFF" />
                </CatalogueTop>
                <CatalogueTabs>
                { movies.map((movie, index) => (
                    <CatalogueItem>
                        <CatalogueText>{movie}</CatalogueText>
                    </CatalogueItem>
                ))}
                </CatalogueTabs>
            </CatalogueContainer>
        </Container>
    );
}