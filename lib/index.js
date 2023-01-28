import { sum,mul,logTitle } from './utils/math';
import { formatPrice } from './utils/format'
import './css/style.css'

function foo () {
    console.log('foo');
    console.log(sum(1,2));
    console.log(formatPrice())
}
foo()

// DOM操作
const titleEl = document.createElement('h2');
titleEl.textContent = 'Hello Rollup';
titleEl.className = 'title';
document.body.appendChild(titleEl);