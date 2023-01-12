//mutable values
const array: number[] = [1, 2, 3, 4, 5];

array.push(6);
array.pop();
array.unshift(0);

const onlyArrayNotMutable: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// onlyArrayNotMutable.push(6); - Error
// onlyArrayNotMutable.pop(); - Error
// onlyArrayNotMutable.unshift(0); - Error
onlyArrayNotMutable.map(() => 0);
onlyArrayNotMutable.filter(() => 0);
onlyArrayNotMutable.reduce(() => 0);
