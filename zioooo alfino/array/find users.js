const users = [
    {
      name: 'zio',
      age: 16,
      gender: 'male',
      number:'083'
    },
    {
      name: 'alif',
      age: 15,
      gender: 'male',
      number:'099'
    },
    {
      name: 'turkijem',
      age: 16,
      gender: 'female',
      number:'0877'
    },
  ];
  
  const turkijem= users.find((user) => user.name === 'turkijem');
  
  console.log(turkijem); // {  }