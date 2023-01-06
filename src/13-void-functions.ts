(() => {
  const calcTotal = (price: number[]): number => {
    let total = 0;
    price.forEach((item) => {
      total += item;
    });
    return total;
  };

  const printTotal = (price: number[]): void => {
    const result = calcTotal(price);
    console.log(result);
  };

  printTotal([2, 3, 5, 1, 8]);

})()
