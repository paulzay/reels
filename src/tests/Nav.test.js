import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { shallow, configure } from 'enzyme';
import Nav from '../containers/Nav/Nav';

configure({ adapter: new Adapter() });

it('contains 1 NavLinks via shallow', () => {
  const numLinks = shallow(<Nav />).find('NavLink').length;
  expect(numLinks).toEqual(1);
});

describe('navbar snapshot', () => {
  it('should match with snapshot', () => {
    const tree = render(<BrowserRouter><Nav /></BrowserRouter>); expect(tree).toMatchSnapshot();
  });
});
