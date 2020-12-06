import React from 'react';
import styled from 'styled-components';
import { node, string } from 'prop-types';

const StandardButton = ({ children, text, ...props }) => (
  <ButtonElement data-id={text} {...props}>
    {children}
  </ButtonElement>
);

const SmallButton = ({ children, text, ...props }) => (
  <ButtonSmall data-id={text} {...props}>
    {children}
  </ButtonSmall>
);

const SmallButtonDanger = ({ children, text, ...props }) => (
  <ButtonDanger data-id={text} {...props}>
    {children}
  </ButtonDanger>
);

const ButtonElement = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  border: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  height: 40px;
  padding: ${({ theme }) => theme.space.small} ${({ theme }) => theme.space.medium};
`;
const ButtonSmall = styled(ButtonElement)`
  height: 30px;
  padding: 4px 8px;
`;
const ButtonDanger = styled(ButtonSmall)`
  background-color: ${({ theme }) => theme.colors.red};
`;

StandardButton.defaultProps = {
  text: 'Stranger',
};

StandardButton.propTypes = {
  children: node.isRequired,
  text: string.isRequired,
};

SmallButton.defaultProps = {
  text: 'Stranger',
};

SmallButton.propTypes = {
  children: node.isRequired,
  text: string.isRequired,
};

SmallButtonDanger.defaultProps = {
  text: 'Stranger',
};

SmallButtonDanger.propTypes = {
  children: node.isRequired,
  text: string.isRequired,
};

export { StandardButton, SmallButton, SmallButtonDanger };
