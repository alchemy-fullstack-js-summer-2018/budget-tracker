export const CATEGORY_ADD = 'CATEGORY_ADD';

export function categories(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_ADD:
      return [
        ...state,
        payload
      ];
    default:
      return state;
  }
}
