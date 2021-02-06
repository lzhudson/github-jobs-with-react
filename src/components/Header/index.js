import React from 'react';
import Container from '../Container';
import { Heading } from './styles';

const Header = () => (
  <Heading>
    <Container>
      <h1>
        <span className="bolded">Github</span> Jobs
      </h1>
    </Container>
  </Heading>
);

export default Header;
