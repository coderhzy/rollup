import { sum,mul } from './utils/math';

function foo () {
    console.log('foo');
    console.log(sum(1,2));
}

export {
    foo,
    sum,
    mul
}