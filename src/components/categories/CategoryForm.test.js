import CategoryForm from './CategoryForm';
import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('Category form', () => {
  it('renders add if no category prop', () => {
    const handleComplete = jest.fn();
    const wrapper = mount(<CategoryForm onComplete={handleComplete}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();

    const category = {
      name: 'clothes',
      budget: 500
    };

    wrapper.find('input[name="name"]').simulate('change', {
      target: {
        name: 'name',
        value: category.name
      }
    });
  });
});