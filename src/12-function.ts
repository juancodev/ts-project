(() => {
  type Size = 'S' | 'M' | 'L' | 'XL';
  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Size
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProductToJson('P1', new Date, 10, 'S');

  const createProductToJson2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Size
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }
  const product2 = createProductToJson2('P2', new Date(), 10);
  console.log(product2.title);
  console.log(product2.size); // size | undefined;
})()
