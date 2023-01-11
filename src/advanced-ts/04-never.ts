const withoutEnd = () => {
  while (true) {
    console.log(`it's a true`);
  };
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return `it's a string.`;
  } else if (Array.isArray(input)) {
    return `it's a array.`;
  }
  return fail('not match');
};

console.log(example('string'));
console.log(example([1, 2, 3, 4]));
console.log(example(123)); // stop program.
