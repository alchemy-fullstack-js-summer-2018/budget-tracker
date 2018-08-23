import { Category } from './Category';
import React from 'react';
import { shallow } from 'enzyme';

describe('Category', () => {
  it('renders display or edit', () => {
    const update = jest.fn();

    const category = { name: 'clothes', budget: 500 };
    const wrapper = shallow(<Category
      category={category}
      update={update}
    />);

    const component = wrapper.instance();

    expect(wrapper.state('editing')).toBe(false);
    component.handleEdit();
    expect(wrapper.state('editing')).toBe(true);
    component.handleEndEdit();
    expect(wrapper.state('editing')).toBe(false);
  });
});