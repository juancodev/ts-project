(() => {
  // any

  let myAnyVar: any;

  myAnyVar = 10;
  myAnyVar = "i'm a string";
  myAnyVar = true;
  myAnyVar = {};
  myAnyVar = [];

  let myBoolean: boolean = myAnyVar;

  // unknown type

  let myUnknownVar: unknown;

  myUnknownVar = 10;
  myUnknownVar = true;
  myUnknownVar = {};
  myUnknownVar = [];
  myUnknownVar = "i'm a string";

  if (typeof myUnknownVar === 'string') {
    myUnknownVar.toUpperCase;
    console.log(myUnknownVar);
  }

  const parseJson = (jsonObjct: string): unknown => {
    let parse = JSON.parse(jsonObjct);
    return parse;
  };

  let myUnknownVar2: unknown;

  myUnknownVar2 = true;
  myUnknownVar2 = {};
  myUnknownVar2 = [];
  myUnknownVar2 = "i'm a string";
  myUnknownVar2 = 10;

  typeof myUnknownVar2 === 'number' ? console.log(myUnknownVar2.toString()) : console.log(null);

})();
