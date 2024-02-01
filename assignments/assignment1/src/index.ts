// 1

function Reverse<T>(val  : T[]){
    return val.slice().reverse();

}

let numRes = Reverse<number>([1,2,3,4,5,6,7,8])
console.log('1:',numRes)
let strRes = Reverse<string>(['hi','ahil'])
console.log('1:',strRes)

// donee
console.log('first done')
console.log()

// 2
function CalcLen<T extends string | number>(val:T){
    if(typeof val === 'string'){
        return val.length;
    }
    else if(typeof val === 'number'){
        return val * val;
    }
    else{
        return val
    }
}

let res1 = CalcLen<string>('ahil')
console.log('result:',res1)
let res2 = CalcLen<number>(7)
console.log('result:',res2)

console.log('second done')
console.log()
// 3

function ConCatSum (val: string[] | number[]): string | number{
    if(typeof val[0] === 'string'){
        // let conC:String ;
       
            // conC = conC.join('')
        
        return val.join('')
    }
    else if(typeof val[0] === 'number'){
        // let sum:number =0;
       
        return val.reduce((cur,next)=>{
           return  (typeof cur === 'number' ? cur : 0) + (typeof next === 'number' ? next : 0)
        },0)
    }
    else{
        return 0
    }
}

let resu2 = ConCatSum([1,2,3,4,5])
console.log("3:",resu2)
let resu1 = ConCatSum(['hi','hello','bye'])
console.log(resu1)

console.log('third done')
console.log()
// 4

interface Person{
    name : string;
    age : number;
}

interface Worker1{
    jobTitle:string;
    salary:number;

}

type employee = Person & Worker1;

const emp1:employee = {
    name:'ahil',
    age:21,
    jobTitle:'Frontend Developer',
    salary:20000
}

console.log(emp1)

console.log('fourth done')
console.log()
// 5

function Bothtype<T extends Worker1 & Person>(val1:Worker1 | Person, val2:Worker1 | Person){
    // let obj = val1.
    console.log(val1,val2)
    // return obj
}

Bothtype<employee>({name:'ahil',
age:21},{
jobTitle:'Frontend Developer',
salary:20000})

console.log('fifth done')
console.log()
// 6

function typCheck<T>(val:T){
    if(typeof val === 'string'){
        let result = val.split(' ');
        for(let i:number=0;i<result.length;i++){
            result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);

        }

        return result
    }
    else{
        return  val 
    }
}

let checking = typCheck('hello hi ahil')
console.log('capitalize:',checking)

console.log('sixth done')
console.log()

function handle(value : string | number):string|number{
    if(typeof value === 'string'){
        return value.toUpperCase()
    }
    else if(typeof value === 'number'){
        return value ** value;
    }
    else{
        return value;
    }
}

let ans1 = handle('abdullah');
let ans2 = handle(2);
console.log('7:',ans1)
console.log('7:',ans2)
console.log('seventh done')
console.log()