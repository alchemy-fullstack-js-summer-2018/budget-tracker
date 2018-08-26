import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './ExpenseReducers';

//Load to a Category through categoryId...

export const add = expense => {
  expense.timestamp = new Date();
  return {
    type: EXPENSE_ADD,
    payload: expense
  };
};

export const update = expense => ({
  type: EXPENSE_UPDATE,
  payload: expense
});

export const remove = (id) => ({
  type: EXPENSE_REMOVE,
  payload: id
});
