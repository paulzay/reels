import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from '../components/App';

configure({ adapter: new Adapter() });

it('render app', () => {
  shallow(<App />);
});
