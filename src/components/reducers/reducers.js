export const CATEGORY_LOAD = 'CATEGORY_LOAD';
export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';

// function (state = initialState, action) {
//   if (action.type == 'item_select') {
//     return { ...state, activeProduct: action.payload);}
//   }
//   return state;
// }

export function categories(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD:
    // expenses
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
    default:  
      return state; 
  }
}