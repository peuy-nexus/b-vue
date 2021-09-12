// 1
import { name, flag } from './a.js'
console.log(name);
if (flag) {
    console.log(1111);
}

// 2
import { userName } from './a.js';
userName(name);

// 3
import { Person } from './b.js';
const p = new Person();
p.run()



// 5.统一全部导入
// import {flag, num, num1, height, Person, mul, sum} from "./aaa.js";

import * as aaa from './a.js'

console.log(aaa.flag);