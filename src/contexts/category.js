import React, { createContext, useState } from 'react';
import { node } from 'prop-types';
import createCategory from 'utils/request';

const CategoryContext = createContext();

function CategoryProvider({ children }) {
  const [statusRequest, setStatusRequest] = useState(null);
  const [empty, setEmpty] = useState(true);
  const [parentCategory, setParentCategory] = useState(false);
  const [nameCategory, setNameCategory] = useState('');

  function addCategory(name) {
    createCategory(name).then((response) => {
      response.status === 200 ? setStatusRequest(true) : setStatusRequest(false);
    });
  }
  function toggleEmpty(status) {
    setEmpty(status);
  }
  function toggleParentCategory() {
    setParentCategory(!parentCategory);
  }
  function setName(text) {
    setNameCategory(text);
  }
  function resetStatusRequest() {
    setStatusRequest(null);
  }

  return (
    <CategoryContext.Provider
      value={{
        statusRequest,
        empty,
        addCategory,
        toggleEmpty,
        parentCategory,
        toggleParentCategory,
        nameCategory,
        setName,
        resetStatusRequest,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

CategoryProvider.propTypes = {
  children: node.isRequired,
};

export { CategoryProvider, CategoryContext };
