import shortid from 'shortid';

export default [{
  key: 'xyz123',
  name: 'Automobile',
  budget: 800,
  timestamp: '8/24/2018, 11:17:26 AM',
  expenses: [
    { 
      key: `${shortid.generate()}`,
      categoryId: 'xyz123',
      name: 'Oil Change',
      price: 49.99,
      timestamp: '8/24/2018, 11:18:26 AM'
    }
  ]
}, 
{
  key: 'xyz456',
  name: 'Food & Dining',
  budget: 500,
  timestamp: '8/24/2018, 11:18:26 AM',
  expenses:[
    {
      key: `${shortid.generate()}`,
      categoryId: 'xyz456',
      name: 'Groceries',
      price: 121.14,
      timestamp: '8/24/2018, 11:20:26 AM'
    },
    {
      key: `${shortid.generate()}`,
      categoryId: 'xyz456',
      name: 'Tilt',
      price: 23.50,
      timestamp: '8/24/2018, 11:21:26 AM'
    }
  ]
},
{ 
  key: 'xyz789',
  name: 'Entertainment',
  budget: 500,
  timestamp: '8/24/2018, 11:17:26 AM',
  expenses: [
    { 
      key: `${shortid.generate()}`,
      categoryId: 'xyz789',
      name: 'Life of Riley',
      price: 35,
      timestamp: '8/24/2018, 11:17:26 AM',
    },
    { 
      key: `${shortid.generate()}`,
      categoryId: 'xyz789',
      name: 'Comedy Show',
      price: 119.23,
      timestamp: '8/24/2018, 11:17:26 AM',
    }, 
    { 
      key: `${shortid.generate()}`,
      categoryId: 'xyz789',
      name: 'PDX to SD',
      price: 401.95,
      timestamp: '8/24/2018, 11:17:26 AM',
    }
  ]
}
];