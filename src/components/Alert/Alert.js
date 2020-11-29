import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

export const AlertSuccess = ({ text }) => (
  <>
    <Success>{text}</Success>
  </>
);

export const AlertError = ({ text }) => (
  <>
    <Error>{text}</Error>
  </>
);

const Success = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.space.regular};
  padding: ${({ theme }) => theme.space.regular};
  background-color: ${({ theme }) => theme.colors.greeLight};
  color: ${({ theme }) => theme.colors.greenDark};
  font-size: 1em;
  border: 1px solid ${({ theme }) => theme.colors.greenDark};
`;
const Error = styled(Success)`
  color: ${({ theme }) => theme.colors.redDark};
  background-color: ${({ theme }) => theme.colors.redLight};
  border: 1px solid ${({ theme }) => theme.colors.redDark};
`;

AlertSuccess.propTypes = {
  text: string.isRequired,
};
AlertError.propTypes = {
  text: string.isRequired,
};
