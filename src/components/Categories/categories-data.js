// import shortid from 'shortid';

export default [
  { key: '-LKZT8AlXZOMAM40VKPD', 
    budget: 100, 
    id: 'category1', 
    name: 'food', 
    timestamp: '2018-08-22', 
    expense: [] 
  },
  { key: '-LKZTGF4mchHm10LGZFP', 
    budget: 500, 
    id: 'category2', 
    name: 'gas', 
    timestamp: '2018-08-21', 
    expense: [] 
  }
];

export const expenses = {
  category1: [
    {
      id: 'yum123',
      categoryId: 'category1',
      timestamp: '2018-08-20',
      name: 'yumm',
      price: 5 
    },
    {
      id: 'yum456',
      categoryId: 'category1',
      timestamp: '2018-08-22',
      name: 'stumptown coffee',
      price: 3 
    },
    {
      id: 'yum789',
      categoryId: 'category1',
      timestamp: '2018-08-22',
      name: 'ramen',
      price: 9 
    },
  ],
  category2: [
    {
      id: 'boo123',
      categoryId: 'category2',
      timestamp: '2018-08-22',
      name: 'regular fill',
      price: 50
    },
    {
      id: 'boo456',
      categoryId: 'category2',
      timestamp: '2018-08-24',
      name: 'regular fill',
      price: 37
    }
  ]
};