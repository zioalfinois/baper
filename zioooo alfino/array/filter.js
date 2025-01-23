const users = [
    
    {
      name: 'arfin',
      age: 17,
      gender: 'male',
    },
    {
      name: 'tiara',
      age: 16,
      gender: 'female',
    },
    {
        name: 'waskem',
        age: 50,
        gender: 'female',
    },
    {
        name: 'wasmun',
        age: 60,
        gender: 'female',
    },
];
  
  const usersfemale = users.filter((users) => users.gender === 'female');

  console.log(usersfemale);

  