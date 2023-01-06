(() => {
  let userId: string | number;
  userId = 1;
  userId = 'primary key';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toUpperCase()}`)
    } else {
      console.log(`numbers ${myText.toFixed(2)}`)
    }
  }

  greeting('hello world');
  greeting(10.992540);
})()
