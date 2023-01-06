(() => {
  const login = (data: { email: string, password: string }) => {
    console.log(data.email, data.password);
  };

  login({
    email: 'juancodev@gmail.com',
    password: '123456789'
  });

  const products: any[] = [];

  type Size = 'S' | 'M' | 'L' | 'XL';
  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Size // optional
  }) => {
    return products.push(data);
  }

  const product1 = addProduct({
    title: 'Shoes',
    createdAt: new Date(),
    stock: 12
  });
  const product2 = addProduct({
    title: 'Shirt',
    createdAt: new Date(2022, 6, 10),
    stock: 1,
    size: 'S'
  })

  console.log(products);

  // Destructuring Objects
  type UserCredential = {
    username: string,
    email: string,
    password: string
  };

  const login2 = ({ username, email, password }: UserCredential) => {
    console.log(`username ${username}, email ${email} password ${password}`);
  };

  login2({
    username: 'juancodev',
    email: 'juancodev@gmail.com',
    password: '123456'
  });

})()
