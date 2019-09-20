import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import FilterBar from '~/components/FilterBar';
import Catalogue from '~/components/Catalogue';

export default function Main() {

  return (
  <Container>
    <FilterBar />
    <Catalogue name="Originais Netflix" movies={['SINTONIA', 'La Casa de Papel', 'Highlanders', 'Keyd Stars: The Documentary']} />
    <Catalogue name="Séries japonesas" movies={['Naruto Shippuuden', 'Sakurasou no Pet na Kanojo', 'Sword Art Online 3: Alicization', 'Ajin', 'Boruto: NARUTO NEXT GENERATIONS']} />
    <Catalogue name="Originais Netflix" movies={['SINTONIA', 'La Casa de Papel', 'Highlanders', 'Keyd Stars: The Documentary']} />
    <Catalogue name="Séries japonesas" movies={['Naruto Shippuuden', 'Sakurasou no Pet na Kanojo', 'Sword Art Online 3: Alicization', 'Ajin', 'Boruto: NARUTO NEXT GENERATIONS']} />
    <Catalogue name="Originais Netflix" movies={['SINTONIA', 'La Casa de Papel', 'Highlanders', 'Keyd Stars: The Documentary']} />
    <Catalogue name="Séries japonesas" movies={['Naruto Shippuuden', 'Sakurasou no Pet na Kanojo', 'Sword Art Online 3: Alicization', 'Ajin', 'Boruto: NARUTO NEXT GENERATIONS']} />
  </Container>
);
}