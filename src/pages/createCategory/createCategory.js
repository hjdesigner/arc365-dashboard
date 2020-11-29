import React from 'react';
import styled from 'styled-components';
import { Input, StandardButton, AlertSuccess, AlertError } from 'components';
import { useCategory } from 'hooks';

const createCategory = () => {
  const {
    addCategory,
    statusRequest,
    empty,
    toggleEmpty,
    parentCategory,
    toggleParentCategory,
    nameCategory,
    setName,
    resetStatusRequest,
  } = useCategory();
  const handleCheck = () => toggleParentCategory();
  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);
    if (value.length > 1) {
      toggleEmpty(false);
    } else {
      toggleEmpty(true);
      resetStatusRequest();
    }
  };
  const handleCreate = () => addCategory(nameCategory);

  return (
    <Container>
      <Content>
        <Title>Criar categoria</Title>
        {statusRequest && <AlertSuccess text="Categoria cadastrada com sucesso!" />}
        {statusRequest == false && (
          <AlertError text="Houve um problema, tente novamente mais tarde" />
        )}
        <Input
          name="categoy"
          text="Nome da categoria"
          type="text"
          placeholder="digite o nome da categoria"
          value={nameCategory}
          onChange={handleChange}
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
          <Button disabled={empty} onClick={handleCreate}>
            Criar categoria
          </Button>
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
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.14);
  max-width: ${({ theme }) => theme.breakpoints.extraLarge};
  padding: ${({ theme }) => theme.space.medium};
  width: 80%;
`;
const Title = styled.h1`
  font-size: 2em;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin: ${({ theme }) => theme.space.small} 0 ${({ theme }) => theme.space.extraLarge};
`;
const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled(StandardButton)`
  text-transform: uppercase;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;
const ParentCategory = styled.div`
  margin-bottom: ${({ theme }) => theme.space.large};
`;
const LabelParent = styled.label`
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  font-size: 1.1em;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  position: relative;
  transition: all 0.25s linear;

  &:before {
    background-color: ${({ theme }) => theme.colors.grayLight};
    border-radius: 60px;
    border: 1px solid ${({ theme }) => theme.colors.grayDark};
    content: '';
    height: 20px;
    position: absolute;
    right: -60px;
    top: 0;
    width: 50px;
  }
  &:after {
    background-color: ${({ theme }) => theme.colors.grayDark};
    border-radius: 50%;
    content: '';
    height: 18px;
    position: absolute;
    right: -29px;
    top: 2px;
    width: 18px;
  }
`;
const InputParent = styled.input`
  display: none;

  &:checked ~ label:after {
    background-color: ${({ theme }) => theme.colors.green};
    transform: translateX(27px);
  }
`;
const Categories = styled.div`
  margin-bottom: ${({ theme }) => theme.space.large};
`;
const ListCategories = styled.select`
  font-size: 0.9em;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  height: 50px;
  max-width: 400px;
  padding: 0 ${({ theme }) => theme.space.small};
  width: 100%;
`;

export default createCategory;
