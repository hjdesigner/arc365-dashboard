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

export default createCategory;
