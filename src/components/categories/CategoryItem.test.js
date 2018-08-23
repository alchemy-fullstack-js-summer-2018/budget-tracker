import { CategoryItem } from './CategoryItem';
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('Category item display', () => {
  it('renders item display, then edit', () => {
    const handleEdit = jest.fn();
    const remove = jest.fn();

    const wrapper = shallow(<CategoryItem
      category={{ name: 'name', budget: 250 }}
      onEdit={handleEdit}
      remove={remove}
    />);

    expect(toJSON(wrapper)).toMatchSnapshot();

    wrapper.find('button[name="edit"]').simulate('click');
    const editCalls = handleEdit.mock.calls;
    expect(editCalls.length).toBe(1);

    wrapper.find('button[name="delete"]').simulate('click');
    const deleteCalls = remove.mock.calls;
    expect(deleteCalls.length).toBe(1);
  });
});