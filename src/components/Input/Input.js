import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const Input = ({ name, text, type, value, ...props }) => (
  <Container>
    <Label htmlFor={name}>{text}</Label>
    <InputElement name={name} type={type} value={value} {...props} />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.space.medium};
  width: 100%;
`;
const Label = styled.label`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.2em;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin-bottom: ${({ theme }) => theme.space.small};
  width: 100%;
`;
const InputElement = styled.input`
  border: 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayDark};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  font-size: 1em;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  padding: ${({ theme }) => theme.space.regular} ${({ theme }) => theme.space.small};
  transition: border 0.25s ease-in-out;
  width: 100%;

  &:hover {
    border-color: ${({ theme }) => theme.colors.pink};
  }
`;

Input.defaultProps = {
  name: 'Name',
  text: 'Name',
  type: 'text',
  value: '',
};

Input.propTypes = {
  name: string.isRequired,
  text: string.isRequired,
  type: string.isRequired,
  value: string.isRequired,
};

export default Input;
