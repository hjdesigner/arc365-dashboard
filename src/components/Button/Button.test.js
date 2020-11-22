import React from 'react';
import { configure, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import theme from 'utils/Themes';
import StandardButton from './Button';

configure({ adapter: new Adapter() });

describe('Teste tdd Button', () => {
  it('Should return one button', () => {
    const componet = mount(<ThemeProvider theme={theme}><StandardButton>Send</StandardButton></ThemeProvider>);
    expect(componet.find('button')).toHaveLength(1);
  });
  it('Should return button element with equal Send', () => {
    const componet = mount(<ThemeProvider theme={theme}><StandardButton>Send</StandardButton></ThemeProvider>);
    expect(componet.find('button').text()).toEqual('Send');
  });
});
