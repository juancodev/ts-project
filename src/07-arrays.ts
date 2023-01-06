(() => {
  const numbersArr = [0, 1, 2, 3, 4, 500];
  console.log(numbersArr);

  // explicit
  const arr: (string | number | boolean)[] = ['hi', 1, 2, 3, true];
  // arr.push({}); // I can't push a object
  arr.push(500);
  arr.push('yes');
  arr.push(false);
  console.log(arr);

  // in order to pass an object, you need to send it the data type object
  const objectsArr: (string | number | boolean | object)[] = ['true', false, 1];
  objectsArr.push({});
  objectsArr.push([]);
  console.log(objectsArr);

  // let meses = ["Mayo", "Junio", "Julio"];
  // meses.map(item => item * 2);
})()
