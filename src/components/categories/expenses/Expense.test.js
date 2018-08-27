import React from 'react';
import Expense from './Expense';
import { shallow } from 'enzyme';

describe('Expense component', () => {
  it('renders display or edit', () => {
    const example = { id: '5uio1d', name: 'bus', price: 5 };
    const wrapper = shallow(<Expense
      key={example.id}
      expense={example}
    />);

    const component = wrapper.instance();

    expect(wrapper.state('editing')).toBe(false);
    component.handleEdit();
    expect(wrapper.state('editing')).toBe(true);
    component.handleEndEdit();
    expect(wrapper.state('editing')).toBe(false);
  });
});