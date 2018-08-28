export const CATEGORY_LOAD = 'CATEGORY_LOAD';
export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';

export const getCategories = state => state.categories;

export function categories(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD:
      return payload
        ? Object.keys(payload).map(key => {
          const each = payload[key];
          each.id = key;
          return each;
        })
        : [];
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
