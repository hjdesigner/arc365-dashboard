import React, { createContext, useState } from 'react';
import { node } from 'prop-types';
import createCategory from 'utils/request';

const CategoryContext = createContext();

function CategoryProvider({ children }) {
  const [statusRequest, setStatusRequest] = useState(null);

  function addCategory(name) {
    createCategory(name).then((response) => {
      response.status === 200 ? setStatusRequest(true) : setStatusRequest(false);
    });
  }

  return (
    <CategoryContext.Provider value={{ statusRequest, addCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

CategoryProvider.propTypes = {
  children: node.isRequired,
};

export { CategoryProvider, CategoryContext };
