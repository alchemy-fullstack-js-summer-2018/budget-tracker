export const CATEGORY_LOAD = 'CATEGORY_LOAD';
export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';

// import { EXPENSE_ADD, EXPENSE_REMOVE } from './expenses/expenseReducers';

export const getCategories = state => state.categories;

export function categories(state = [], { type, payload }) {

  // const copy = [...state];
  switch(type) {
    case CATEGORY_LOAD:
      return payload;
    case CATEGORY_ADD:
      return [
        ...state,
        payload
      ];
    case CATEGORY_UPDATE:
      return state.map(category => category.key === payload.key ? payload : category);
    case CATEGORY_REMOVE:
      return state.filter(category => category.key !== payload);
    // case EXPENSE_ADD:
    //   copy.find(x => x.key === payload.categoryId).expenses.push(payload);
    //   return copy;
    default: 
      return state;
  }
}