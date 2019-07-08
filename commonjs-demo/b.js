const { add, mul } = require('./a');
const _ = require("lodash");  // 鲁大师 一般 用 "_" 代替

const sum = add(1, 5);
const result = mul(3, 3);

console.log(sum, result);

const arr = _.concat([1, 3], 2)
console.log("arr...", arr);