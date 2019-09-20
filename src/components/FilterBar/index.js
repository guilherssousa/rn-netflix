import React from 'react';

import { Container, Logo, Selector } from './styles';

import logo from '~/assets/logo.png';

export default function FilterBar() {
    return (
        <Container>
            <Logo source={logo} style={{width: 50, height: 50, marginLeft: 5, marginTop: 5, marginBottom: 5}} />
            <Selector>Séries</Selector>
            <Selector>Filmes</Selector>
            <Selector>Minha lista</Selector>
        </Container>
    );
}