import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, StandardButton } from 'components';

const createCategory = () => {
  const [parentCategory, setParentCategory] = useState(false);

  const handleCheck = () => setParentCategory(!parentCategory);

  return (
    <Container>
      <Content>
        <Title>Criar categoria</Title>
        <Input
          name="categoy"
          text="Nome da categoria"
          type="text"
          placeholder="digite o nome da categoria"
        />
        <ParentCategory>
          <InputParent id="parent" name="parent" type="checkbox" onChange={handleCheck} />
          <LabelParent htmlFor="parent">Criar como uma sub-categoria</LabelParent>
        </ParentCategory>
        {parentCategory && (
          <Categories>
            <ListCategories>
              <option value="cadastro">Cadastro</option>
              <option value="renda-fixa">Renda Fixa</option>
            </ListCategories>
          </Categories>
        )}
        <Actions>
          <Button>Criar categoria</Button>
        </Actions>
      </Content>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.space.large};
  padding: 0 ${({ theme }) => theme.space.small};
  width: 100%;
`;
const Content = styled.section`
  max-width: ${({ theme }) => theme.breakpoints.extraLarge};
  width: 80%;
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  padding: ${({ theme }) => theme.space.medium};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.14);
`;
const Title = styled.h1`
  margin: ${({ theme }) => theme.space.small} 0 ${({ theme }) => theme.space.extraLarge};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 2em;
`;
const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled(StandardButton)`
  text-transform: uppercase;
`;
const ParentCategory = styled.div`
  margin-bottom: ${({ theme }) => theme.space.large};
`;
const LabelParent = styled.label`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.1em;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  position: relative;
  cursor: pointer;
  transition: all 0.25s linear;

  &:before {
    content: '';
    width: 50px;
    border: 1px solid ${({ theme }) => theme.colors.grayDark};
    background-color: ${({ theme }) => theme.colors.grayLight};
    border-radius: 60px;
    position: absolute;
    top: 0;
    right: -60px;
    height: 20px;
  }
  &:after {
    content: '';
    width: 25px;
    background-color: ${({ theme }) => theme.colors.grayDark};
    border-radius: 50%;
    position: absolute;
    top: 2px;
    right: -37px;
    height: 18px;
  }
`;
const InputParent = styled.input`
  display: none;

  &:checked ~ label:after {
    background-color: ${({ theme }) => theme.colors.green};
    transform: translateX(19px);
  }
`;
const Categories = styled.div`
  margin-bottom: ${({ theme }) => theme.space.large};
`;
const ListCategories = styled.select`
  width: 100%;
  max-width: 400px;
  height: 50px;
  padding: 0 ${({ theme }) => theme.space.small};
  font-size: 0.9em;
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

export default createCategory;
