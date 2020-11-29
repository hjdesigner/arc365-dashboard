import React from 'react';
import { configure, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import theme from 'utils/Themes';
import 'jest-styled-components';
import { AlertSuccess, AlertError } from './Alert';

configure({ adapter: new Adapter() });

describe('Teste tdd Alert', () => {
  it('Should return one div', () => {
    const componet = mount(<ThemeProvider theme={theme}><AlertSuccess text="Success" /></ThemeProvider>);
    expect(componet.find('div')).toHaveLength(1);
  });
  it('Should return the alert element with text equal to success', () => {
    const componet = mount(<ThemeProvider theme={theme}><AlertSuccess text="Success" /></ThemeProvider>);
    expect(componet.text()).toEqual('Success');
  });
  it('Should return the alert element with text equal to error', () => {
    const componet = mount(<ThemeProvider theme={theme}><AlertError text="Error" /></ThemeProvider>);
    expect(componet.text()).toEqual('Error');
  });
  it('should return the alert element with the background-color, color and border colort referring to the error', () => {
    const componet = mount(<ThemeProvider theme={theme}><AlertError text="Error" /></ThemeProvider>);
    expect(componet).toHaveStyleRule('background-color', '#f8d7da');
    expect(componet).toHaveStyleRule('border', '1px solid #721c24');
    expect(componet).toHaveStyleRule('color', '#721c24');
  });
  it('should return the alert element with the background-color, color and border colort referring to the success', () => {
    const componet = mount(<ThemeProvider theme={theme}><AlertSuccess text="Error" /></ThemeProvider>);
    expect(componet).toHaveStyleRule('background-color', '#d4edda');
    expect(componet).toHaveStyleRule('border', '1px solid #37911c');
    expect(componet).toHaveStyleRule('color', '#37911c');
  });
});
