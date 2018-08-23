import React from 'react';
import { shallow } from 'enzyme';
import Categories from './Categories';
import toJSON from 'enzyme-to-json';

describe('Categories', () => {
  it('renders add if no category prop', () => {
    const categories = [
      { key: '123', timestamp: 'new Date()', name: 'transportation', budget: 400 },
      { key: '456', timestamp: 'new Date()', name: 'other', budget: 200 },
      { key: '789', timestamp: 'new Date()', name: 'more food', budget: 500 },
    ];

    const wrapper = shallow(<Categories
      categories={categories}
      onUpdate={jest.fn()}
    />);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});