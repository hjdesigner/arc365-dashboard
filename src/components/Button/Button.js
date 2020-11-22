import React from 'react';
import styled from 'styled-components';
import { node, string } from 'prop-types';

const StandardButton = ({ children, text, ...props }) => (
  <ButtonElement data-id={text} {...props}>
    {children}
  </ButtonElement>
);

const ButtonElement = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  border: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  height: 40px;
  padding: ${({ theme }) => theme.space.small} ${({ theme }) => theme.space.medium};
`;

StandardButton.defaultProps = {
  text: 'Stranger',
};

StandardButton.propTypes = {
  children: node.isRequired,
  text: string.isRequired,
};

export default StandardButton;
