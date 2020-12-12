import React from 'react';
import { configure, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import theme from 'utils/Themes';
import ListCategory from './ListCategory';

configure({ adapter: new Adapter() });

const category = {
  "id_category": "2",
  "name_category": "Money",
  "subCategory": [],
};
const subCategory = {
  "id_category": "3",
  "name_category": "Renda variável",
  "subCategory": [
    {
      "id_sub_category": "4",
      "name_sub_category": "Add Cash"
    },
    {
      "id_sub_category": "5",
      "name_sub_category": "Change email"
    },
  ],
};

describe('Teste tdd ListCategory', () => {
  it('should return one li', () => {
    const componet = mount(<ThemeProvider theme={theme}><ListCategory item={category} /></ThemeProvider>);
    expect(componet.find('li')).toHaveLength(1);
  });
  it('should return li with text equal passe in the object', () => {
    const componet = mount(<ThemeProvider theme={theme}><ListCategory item={category} /></ThemeProvider>);
    expect(componet.find('p').text()).toEqual('Money');
  });
  it('should return button delete with data-id equal 1', () => {
    const componet = mount(<ThemeProvider theme={theme}><ListCategory item={category} /></ThemeProvider>);
    expect(componet.find('button').at(1).prop('data-id')).toEqual('2');
  });
  it('should return tree li', () => {
    const componet = mount(<ThemeProvider theme={theme}><ListCategory item={subCategory} /></ThemeProvider>);
    expect(componet.find('li')).toHaveLength(3);
  });
  it('should return first li with text equal passe in the object', () => {
    const componet = mount(<ThemeProvider theme={theme}><ListCategory item={subCategory} /></ThemeProvider>);
    expect(componet.find('p').at(0).text()).toEqual('Renda variável');
  });
  it('should return second li with text equal passe in the object', () => {
    const componet = mount(<ThemeProvider theme={theme}><ListCategory item={subCategory} /></ThemeProvider>);
    expect(componet.find('p').at(1).text()).toEqual('Add Cash');
  });
  it('should return second li with text equal passe in the object', () => {
    const componet = mount(<ThemeProvider theme={theme}><ListCategory item={subCategory} /></ThemeProvider>);
    expect(componet.find('p').at(2).text()).toEqual('Change email');
  });
});
