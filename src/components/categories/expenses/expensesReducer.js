import CATEGORY_LOAD from '../categoryReducers';

export const getExpenses = state => state.expenses;
 
export function expenses(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD:
      return payload.reduce((map, category) => {
        map[category.key] = category.expenses;
        return map;
      }, {});
    default:
      return state;
  }
}