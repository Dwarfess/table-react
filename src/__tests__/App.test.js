import React from 'react';
import App from '../components/App';
import {shallow} from 'enzyme';

describe('testing App component', () => {
  let wrapper;
  beforeEach(() => {wrapper = shallow(<App />)});

  it('includes 1 div with class container', () => {
    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div')).toEqual(1);
  });
});
