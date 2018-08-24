import { CategoryDisplay } from './CategoryDisplay';
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('Category display', () => {
  it('renders display, then edit', () => {
    const handleEdit = jest.fn();
    const handleDelete = jest.fn();

    const wrapper = shallow(

      <CategoryDisplay
        category={{ key: 'PPBqWA9', 'name': 'Rent', 'timeStamp': '2095-12-17T03:24:00', 'budget': 500 }}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />);

    expect(toJSON(wrapper)).toMatchSnapshot();

    wrapper.find('button[name="edit"]').simulate('click');
    const editCalls = handleEdit.mock.calls;
    expect(editCalls.length).toBe(1);
  });
});