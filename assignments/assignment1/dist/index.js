"use strict";
// 1
function Reverse(val) {
    return val.slice().reverse();
}
let numRes = Reverse([1, 2, 3, 4, 5, 6, 7, 8]);
console.log('1:', numRes);
let strRes = Reverse(['hi', 'ahil']);
console.log('1:', strRes);
// donee
console.log('first done');
console.log();
// 2
function CalcLen(val) {
    if (typeof val === 'string') {
        return val.length;
    }
    else if (typeof val === 'number') {
        return val * val;
    }
    else {
        return val;
    }
}
let res1 = CalcLen('ahil');
console.log('result:', res1);
let res2 = CalcLen(7);
console.log('result:', res2);
console.log('second done');
console.log();
// 3
function ConCatSum(val) {
    if (typeof val[0] === 'string') {
        // let conC:String ;
        // conC = conC.join('')
        return val.join('');
    }
    else if (typeof val[0] === 'number') {
        // let sum:number =0;
        return val.reduce((cur, next) => {
            return (typeof cur === 'number' ? cur : 0) + (typeof next === 'number' ? next : 0);
        }, 0);
    }
    else {
        return 0;
    }
}
let resu2 = ConCatSum([1, 2, 3, 4, 5]);
console.log("3:", resu2);
let resu1 = ConCatSum(['hi', 'hello', 'bye']);
console.log(resu1);
console.log('third done');
console.log();
const emp1 = {
    name: 'ahil',
    age: 21,
    jobTitle: 'Frontend Developer',
    salary: 20000
};
console.log(emp1);
console.log('fourth done');
console.log();
// 5
function Bothtype(val1, val2) {
    // let obj = val1.
    console.log(val1, val2);
    // return obj
}
Bothtype({ name: 'ahil',
    age: 21 }, {
    jobTitle: 'Frontend Developer',
    salary: 20000
});
console.log('fifth done');
console.log();
// 6
function typCheck(val) {
    if (typeof val === 'string') {
        let result = val.split(' ');
        for (let i = 0; i < result.length; i++) {
            result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
        }
        return result;
    }
    else {
        return val;
    }
}
let checking = typCheck('hello hi ahil');
console.log('capitalize:', checking);
console.log('sixth done');
console.log();
function handle(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return value ** value;
    }
    else {
        return value;
    }
}
let ans1 = handle('abdullah');
let ans2 = handle(2);
console.log('7:', ans1);
console.log('7:', ans2);
console.log('seventh done');
console.log();
//# sourceMappingURL=index.js.map