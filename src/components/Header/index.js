import React from 'react';
import Container from '../Container';
import { Heading } from './styles';

export const Header = () => (
  <Heading>
    <Container>
      <h1>
        <span className="bolded">Github</span> Jobs
      </h1>
    </Container>
  </Heading>
);
