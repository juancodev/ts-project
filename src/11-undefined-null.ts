(() => {
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myString: string | null = null;
  let myNumber: number | null = null;

  function greeting(name: string | null) {
    let hi = 'hi ';
    if (name) {
      hi += name.toLowerCase();
    } else {
      hi += 'nobody';
    }
    console.log(hi);
  }

  greeting('juan');
  greeting(null);

  function greeting2(name: string | null) {
    let hi = 'hi ';
    hi += name?.toLowerCase() || 'nobody';
    console.log(hi);
  }

  greeting2('juan');
  greeting2('');
  greeting2(null);
})()
