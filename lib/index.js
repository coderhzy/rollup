import { sum,mul,logTitle } from './utils/math';
import { formatPrice } from './utils/format'
import './css/style.css'
import App from './vue/App.vue'
import {createApp} from 'vue'

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

// 编写vue代码
const app = createApp(App)
app.mount("#app")