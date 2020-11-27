import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Container>
    <Logo>ARC Dashboard</Logo>
  </Container>
);

const Container = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  height: 60px;
  padding: 0 ${({ theme }) => theme.space.small};
  with: 100%;
`;
const Logo = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5em;
`;

export default Header;
