import React from 'react';
import GithubAPI from '../../api/GithubAPI';
import { Container } from './styles/Project';

export default function ProjectContainer() {
  return (
    <Container>
      <GithubAPI />
    </Container>
  );
}
