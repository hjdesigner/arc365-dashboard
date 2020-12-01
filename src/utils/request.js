/* eslint-disable */
import axios from 'axios';

const createCategory = async (name) => {
  const data = await axios({
    url: 'http://localhost:4000/',
    method: 'post',
    data: {
     query: `mutation{
      addCategory(name_category: "${name}"){
        name_category
      }
     }`
    }
   })
    .then(res => res)
    .catch(err => err);

  return data;
}

const createSubCategory = async (id, name) => {
  const data = await axios({
    url: 'http://localhost:4000/',
    method: 'post',
    data: {
     query: `mutation{
      addSubCategory(id_category: ${id}, name_sub_category: "${name}"){
        name_sub_category
      }
     }`
    }
   })
    .then(res => res)
    .catch(err => err);

  return data;
}

const allCategories = async () => {
  const data = await axios({
    url: 'http://localhost:4000/',
    method: 'post',
    data: {
     query: `{
      categories{
        id_category,
        name_category
      }}`
    }
   })
    .then(res => res)
    .catch(err => err);

  return data;
}

export { createCategory, allCategories, createSubCategory }
