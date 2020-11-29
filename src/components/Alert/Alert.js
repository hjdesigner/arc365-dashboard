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
  background-color: ${({ theme }) => theme.colors.greeLight};
  border: 1px solid ${({ theme }) => theme.colors.greenDark};
  color: ${({ theme }) => theme.colors.greenDark};
  font-size: 1em;
  margin-bottom: ${({ theme }) => theme.space.regular};
  padding: ${({ theme }) => theme.space.regular};
  width: 100%;
`;
const Error = styled(Success)`
  background-color: ${({ theme }) => theme.colors.redLight};
  border: 1px solid ${({ theme }) => theme.colors.redDark};
  color: ${({ theme }) => theme.colors.redDark};
`;

AlertSuccess.propTypes = {
  text: string.isRequired,
};
AlertError.propTypes = {
  text: string.isRequired,
};
