export const CATEGORY_LOAD = 'CATEGORY_LOAD';

export function categories(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD:
      return payload;
    default:
      return state;
  }
}