import { sum,mul,logTitle } from './utils/math';
import { formatPrice } from './utils/format'
import _ from 'lodash';
function foo () {
    console.log('foo');
    console.log(sum(1,2));
    console.log(formatPrice())
    console.log(_.join(['a', 'b', 'c'], '~'));
}

export {
    foo,
    sum,
    mul
}