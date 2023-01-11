//1.- [J,u,a,n,c,o,d,e,v] => Juancodev;
//2.- Juancodev => [J,u,a,n,c,o,d,e,v]

export function convertor(args: string | string[]): string | string[] {
  if (Array.isArray(args)) {
    return args.join('');
  } else {
    return args.split('');
  };
};

const convertorToString = convertor(['J', 'u', 'a', 'n', 'c', 'o', 'd', 'e', 'v']);
console.log(`convertorToString => [J,u,a,n,c,o,d,e,v] => ${convertorToString}`);

const convertorToArray = convertor('Juancodev');
console.log(`convertorToArray => juancodev => ${convertorToArray}`);
