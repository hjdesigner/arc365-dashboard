import { useContext } from 'react';
import { CategoryContext } from 'contexts';

function userCategory() {
  return useContext(CategoryContext);
}

export default userCategory;
