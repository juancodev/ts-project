(() => {
  let productTitle: string = 'My amazing product changed';
  console.log('productTitle', productTitle);

  const productDescription = "I'm bla, bla, bla a sas";
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew = false;

  const summary = `
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew: ${isNew}
  `

  console.log(summary);
})()
