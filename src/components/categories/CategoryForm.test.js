import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import CategoryForm from './CategoryForm';

describe('Category form', () => {
  it('renders add if no category prop', () => {
    const handleComplete = jest.fn();
    const wrapper = mount(<CategoryForm onComplete={handleComplete}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();

    const category = { name: 'clothes', key: null, budget: 500 };

    wrapper.find('input[name="name"]').simulate('change', {
      target: {
        name: 'name',
        value: category.name
      }
    });

    wrapper.find('input[name="budget"]').simulate('change', {
      target: {
        name: 'budget',
        value: category.budget
      }
    });

    wrapper.find('button').simulate('submit');

    const calls = handleComplete.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual(category);
  });

  it('renders edit if there is category prop', () => {
    const handleComplete = jest.fn();
    const handleCancel = jest.fn();

    const category = { name: 'clothes', key: null, budget: 500 };

    const wrapper = mount(<CategoryForm
      onComplete={handleComplete}
      onCancel={handleCancel}
      category={category}
    />);

    expect(toJSON(wrapper)).toMatchSnapshot();

    wrapper.find('input[name="budget"]').simulate('change', {
      target: {
        name: 'budget',
        value: 200
      }
    });

    wrapper.find('button[type="submit"]').simulate('submit');

    const calls = handleComplete.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual({
      ...category,
      budget: 200
    });
  });
});