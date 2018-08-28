import { CATEGORY_LOAD, CATEGORY_REMOVE } from './reducers';

export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';

// state in parens from easton class demo (state)
export const getExpensesByCategory = state => state.expensesByCategory;
export const getExpenses = state => state.expenses;

export function expensesByCategory(state = [], { type, payload }) {
  //let expense = {};

  switch(type) {
    case CATEGORY_LOAD:
      return payload.reduce((map, category) => {
        map[category.id] = category.expense;
        return map;
      }, {});

    default:
      return state;
  }
}

export function expenses(state = [], { type, payload }) {
  switch(type) {

    //from mariah class demo
    case EXPENSE_ADD:
      return {
        ...state,
        [payload.categoryId]: [
          ...state[payload.categoryId],
          payload.expense
        ]

        //payload: payload 
      };

      //from mariah class demo. problems.
    case CATEGORY_REMOVE: {
      // const { [payload]: ignore, ...rest } = state;
      // return rest;
      const copy = { ...state };
      delete copy[payload];
      return copy;
    }
      // case EXPENSE_UPDATE:
      //   return state.map(expense => expense.id === payload.id ? payload : expense);
  }
}