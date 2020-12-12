import React from 'react';
import styled from 'styled-components';
import { object } from 'prop-types';
import { SmallButton, SmallButtonDanger } from 'components';

const ListCategory = ({ item }) => {
  return (
    <>
      <List>
        <ListText>{item.name_category}</ListText>
        <ListActions>
          <Edit>Editar</Edit>
          <Delete data-id={item.id_category}>Excluir</Delete>
        </ListActions>
      </List>
      <SubList>
        {item.subCategory.length > 0 &&
          item.subCategory.map((item) => (
            <SubItem key={item.id_sub_category}>
              <SubListText>{item.name_sub_category}</SubListText>
              <SubListActions>
                <SubEdit>Editar</SubEdit>
                <SubDelete>Excluir</SubDelete>
              </SubListActions>
            </SubItem>
          ))}
      </SubList>
    </>
  );
};

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
const SubList = styled.ul`
  list-style: none;
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

ListCategory.propTypes = {
  item: object.isRequired,
};

export default ListCategory;
