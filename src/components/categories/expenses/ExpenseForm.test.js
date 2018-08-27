import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseForm from './ExpenseForm';

describe('Expense Form component', () => {
  it('renders add if no expense prop', () => {
    const handleComplete = jest.fn();
    const wrapper = mount(<ExpenseForm onComplete={handleComplete}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});