(() => {
  let myDinamicVar: any;
  myDinamicVar = 100;
  myDinamicVar = null;
  myDinamicVar = {};
  myDinamicVar = '';
  myDinamicVar = undefined;
  myDinamicVar = true;

  // To force typing
  const changeTyping = (myDinamicVar as string) = 'HELLO WORLD';
  changeTyping.toLowerCase();
  console.log(changeTyping);

  //Another way to change the typing
  const anotherChangeTyping = (<number>myDinamicVar) = 24;
  console.log(anotherChangeTyping);
})()
