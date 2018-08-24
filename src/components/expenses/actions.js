import { EXPENSE_LOAD } from '../expenses/reducersExpenses';
import data from './categories-data';

export const load = () => ({
  type: EXPENSE_LOAD,
  payload: data
});

// export const add = expense => {

// };

// export const update = expense => ({

// });

// export const remove = key => ({

// });