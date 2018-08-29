import shortid from 'shortid';

export default [
  { key: '-LKZT8AlXZOMAM40VKPD', 
    budget: 100, 
    id: 'category1', 
    name: 'food', 
    timestamp: new Date(), 
    expense: [
      {
        id: shortid.generate(),
        categoryId: 'category1',
        timestamp: new Date(),
        name: 'yumm',
        price: 5 
      },
      {
        id: shortid.generate(),
        categoryId: 'category1',
        timestamp: new Date(),
        name: 'stumptown coffee',
        price: 3 
      },
      {
        id: shortid.generate(),
        categoryId: 'category1',
        timestamp: new Date(),
        name: 'ramen',
        price: 9 
      }
    ] 
  },
  { key: '-LKZTGF4mchHm10LGZFP', 
    budget: 500, 
    id: 'category2', 
    name: 'gas', 
    timestamp: new Date(), 
    expense: [
      {
        id: shortid.generate(),
        categoryId: 'category2',
        timestamp: new Date(),
        name: 'regular fill',
        price: 50
      },
      {
        id: shortid.generate(),
        categoryId: 'category2',
        timestamp: new Date(),
        name: 'regular fill',
        price: 37
      }
    ] 
  }
];
