import CategoryForm from './CategoryForm';
import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('Category form', () => {

  it('Renders add if no category prop', () => {
    const handleComplete = jest.fn();
    const promise = Promise.resolve();
    handleComplete.mockReturnValueOnce(promise);

    const wrapper = mount(<CategoryForm onComplete={handleComplete}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  
});