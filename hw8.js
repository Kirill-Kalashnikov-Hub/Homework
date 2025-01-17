console.log('Задание 1');
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
  ];
  
  console.log(people.sort((a, b) => a.age - b.age));


  console.log('Задание 2');
  function isPositive(num) {
    return num > 0;
  }
  
  function isMale(person) {
    return person.gender === 'male';
  }
  
  function filter(arr, ruleFunction) {
      const result = [];
      for(let i = 0; i < arr.length; i++){
          if(ruleFunction(arr[i])) {
              result.push(arr[i]);
          }
      }
      return result;
  }
  
  
  console.log(filter([3, -4, 1, 9], isPositive));
  
  const users = [
      {name: 'Глеб', gender: 'male'},
      {name: 'Анна', gender: 'female'},
      {name: 'Олег', gender: 'male'},
      {name: 'Оксана', gender: 'female'}
  ];
  
  console.log(filter(people, isMale));