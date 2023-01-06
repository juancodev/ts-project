import { subDays, format } from 'date-fns';

const date = new Date();
const result = subDays(date, 2);
const formateResult = format(result, 'yy/MM/dd');
console.log(formateResult);
