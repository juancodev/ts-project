(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 23;
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number;
  console.log('productInStock', productInStock);

  let discount = parseInt('123');
  console.log('discount', discount);
  if (discount < 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  // hex and bin
  let hex = 0xfff;
  console.log('hex', hex);
  let bin = 0b1010;
  console.log('bin', bin);
})()
