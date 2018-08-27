import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './reducersExpenses';

// export const add = expense => {

// };

export const update = expense => ({
  type: EXPENSE_UPDATE,
  payload: expense
});

// export const remove = key => ({

// });