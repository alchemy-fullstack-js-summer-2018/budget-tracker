export default [
  {
    key: 'abc',
    timestamp: new Date(),
    name: 'entertainment',
    budget: 300,
    expenses: [
      {
        id: '123',
        timestamp: new Date(),
        name: 'Netflix',
        price: 11,
        categoryId: 'abc'
      },
      {
        id: '456',
        timestamp: new Date(),
        name: 'FX Now',
        price: 11,
        categoryId: 'abc'
      }
    ]
  },
  {
    key: 'def',
    timestamp: new Date(),
    name: 'food',
    budget: 500,
  },
  {
    key: 'ghi',
    timestamp: new Date(),
    name: 'transportation',
    budget: 200,
    expenses: [
      {
        id: '012',
        timestamp: new Date(),
        name: 'streetcare fare',
        price: 2,
        categoryId: 'ghi'
      }
    ]
  }
];