(() => {
  type UserID = string | number | boolean;
  let userId: UserID;

  function greeting(userId: UserID) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toUpperCase()}`)
    }
  }

  // Literals types
  type Size = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Size;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
})()
