import React from 'react';
import { configure, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import theme from 'utils/Themes';
import { StandardButton, SmallButton, SmallButtonDanger } from './Button';

configure({ adapter: new Adapter() });

describe('Teste tdd Button', () => {
  it('should return one button', () => {
    const componet = mount(<ThemeProvider theme={theme}><StandardButton>send</StandardButton></ThemeProvider>);
    expect(componet.find('button')).toHaveLength(1);
  });
  it('should return button element with equal send', () => {
    const componet = mount(<ThemeProvider theme={theme}><StandardButton>send</StandardButton></ThemeProvider>);
    expect(componet.find('button').text()).toEqual('send');
  });
  it('should return one button the component SmallButton', () => {
    const componet = mount(<ThemeProvider theme={theme}><SmallButton>send</SmallButton></ThemeProvider>);
    expect(componet.find('button')).toHaveLength(1);
  });
  it('should return SmallButton component with equal send', () => {
    const componet = mount(<ThemeProvider theme={theme}><SmallButton>send</SmallButton></ThemeProvider>);
    expect(componet.find('button').text()).toEqual('send');
  });
  it('should return one button the component SmallButtonDanger', () => {
    const componet = mount(<ThemeProvider theme={theme}><SmallButtonDanger>send</SmallButtonDanger></ThemeProvider>);
    expect(componet.find('button')).toHaveLength(1);
  });
  it('should return SmallButtonDanger component with equal send', () => {
    const componet = mount(<ThemeProvider theme={theme}><SmallButtonDanger>send</SmallButtonDanger></ThemeProvider>);
    expect(componet.find('button').text()).toEqual('send');
  });
});
