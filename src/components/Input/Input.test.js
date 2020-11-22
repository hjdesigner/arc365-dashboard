import React from 'react';
import { configure, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import theme from 'utils/Themes';
import Input from './Input';

configure({ adapter: new Adapter() });

describe('Teste tdd Input', () => {
  it('Should return one label', () => {
    const componet = mount(<ThemeProvider theme={theme}><Input name="name" type="text" text="Name" placeholder="you name" /></ThemeProvider>);
    expect(componet.find('label')).toHaveLength(1);
  });
  

});
