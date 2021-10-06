import React from 'react';

import { Container } from 'react-bootstrap';

import * as S from './global.styled';

interface IAppOwnProps {
  username: string | undefined;
  userType: 'admin' | 'moderator' | 'user' | 'guest';
}

const App: React.FC<IAppOwnProps> = ({ username, userType }): JSX.Element => {
  return (
    <Container>
      <S.MainTitle>tests: {username}</S.MainTitle>
    </Container>
  );
};

export default App;
