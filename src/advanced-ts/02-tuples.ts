(() => {
  const array: (string | number)[] = [12, '10', 20, '25Age']; // simple array

  // Tuples

  let person: [string, number, boolean];

  person = ['juan', 24, true];

  // destructuring of tuples

  const [name, age, enable] = person;
  console.log(name);
  console.log(age);
  console.log(enable);

})();
