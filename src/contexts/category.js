import React, { createContext, useState } from 'react';
import { node } from 'prop-types';
import { createCategory, allCategories, createSubCategory } from 'utils/request';

const CategoryContext = createContext();

function CategoryProvider({ children }) {
  const [statusRequest, setStatusRequest] = useState(null);
  const [empty, setEmpty] = useState(true);
  const [parentCategory, setParentCategory] = useState(false);
  const [nameCategory, setNameCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [idCategory, setIdCategory] = useState(0);

  function addCategory(name) {
    createCategory(name).then((response) => {
      response.status === 200 ? setStatusRequest(true) : setStatusRequest(false);
    });
  }
  function addSubCategory(id, name) {
    createSubCategory(id, name).then((response) => {
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
  function addIdCategory(id) {
    setIdCategory(id);
  }
  function resetStatusRequest() {
    setStatusRequest(null);
  }
  function getCategories() {
    allCategories().then((response) => {
      setCategories(response.data.data.categories);
    });
  }
  function resetIdCategory() {
    setIdCategory(0);
  }
  function resetParentCategory() {
    setParentCategory(false);
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
        getCategories,
        categories,
        addIdCategory,
        idCategory,
        addSubCategory,
        resetIdCategory,
        resetParentCategory,
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
