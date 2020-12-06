import React from 'react';
import styled from 'styled-components';
import { SmallButton, SmallButtonDanger } from 'components';

const Category = () => {
  return (
    <Container>
      <Content>
        <Title>Categorias</Title>
        <HeaderTable>
          <HeaderTableName>Nome da categoria</HeaderTableName>
          <HeaderTableActions>Ações</HeaderTableActions>
        </HeaderTable>
        <TableList>
          <List>
            <ListText>Categoria</ListText>
            <ListActions>
              <Edit>Editar</Edit>
              <Delete>Excluir</Delete>
            </ListActions>
            <SubList>
              <SubItem>
                <SubListText>Categoria</SubListText>
                <SubListActions>
                  <SubEdit>Editar</SubEdit>
                  <SubDelete>Excluir</SubDelete>
                </SubListActions>
              </SubItem>
            </SubList>
          </List>
          <List>
            <ListText>Categoria</ListText>
            <ListActions>
              <Edit>Editar</Edit>
              <Delete>Excluir</Delete>
            </ListActions>
            <SubList>
              <SubItem>
                <SubListText>Categoria</SubListText>
                <SubListActions>
                  <SubEdit>Editar</SubEdit>
                  <SubDelete>Excluir</SubDelete>
                </SubListActions>
              </SubItem>
            </SubList>
          </List>
        </TableList>
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
const Content = styled.div`
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
const HeaderTable = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  border-left: 0;
  border-right: 0;
  padding: ${({ theme }) => theme.space.regular} ${({ theme }) => theme.space.small};
  justify-content: space-between;
`;
const HeaderTableName = styled.div`
  font-size: 1em;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
const HeaderTableActions = styled(HeaderTableName)``;
const TableList = styled.ul`
  list-style: none;
`;
const List = styled.li`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space.regular} ${({ theme }) => theme.space.small};
  background-color: ${({ theme }) => theme.colors.grayLight};
  margin-bottom: ${({ theme }) => theme.space.small};
`;
const ListText = styled.p`
  font-size: 0.9em;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
const ListActions = styled.div``;
const Delete = styled(SmallButtonDanger)`
  margin-left: ${({ theme }) => theme.space.small};
`;
const Edit = styled(SmallButton)``;
const SubList = styled(TableList)`
  width: 100%;
`;
const SubItem = styled(List)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.space.small} ${({ theme }) => theme.space.small};
  margin-top: ${({ theme }) => theme.space.small};
  margin-bottom: 0;
`;
const SubListText = styled(ListText)``;
const SubListActions = styled(ListActions)``;
const SubEdit = styled(Edit)``;
const SubDelete = styled(Delete)``;

export default Category;
