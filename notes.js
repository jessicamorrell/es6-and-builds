// const
const foo = 2
foo // => 2
foo = false // ERROR!




// let
if(true){var asdf = 'hi'}
console.log(asdf) // this works

if(true){let ghjkl = 'hullo'}
console.log(ghjkl) // this does not!

let something = 'this is something!'
something = 0 // this is okay, just like with `var`

while (true) {
  let something = 'this is a new thing'
  console.log(something)
  break
}
console.log(something)

// that's not a function, it's a block.
function asdf() {
  for (let i = 0; i < 100; i++) {
    let j = 'string'
    console.log(j)
  }
  console.log(j)
}
asdf() // woahhhh







// arrow functions
var numbers = [1,2,3,4,5]
numbers.map(function(x) {
  return x * x
})
$('.btn').click(function(e) {
  e.preventDefault()
  this.toggle()
})
// vs
let numbers = [1,2,3,4,5]
numbers.map(x => x * x)
$('.btn').click(e => {
  e.preventDefault()
  this.toggle()
})


var fs = require('fs')
function add(x, y){
  return x + y
}
var nums = [1,2,3,4,5]
var newNums = nums.map(function(n){
  return n * 2
})
console.log(add(4, 12))
console.log(nums, newNums)
fs.readFile('./package.json', 'utf-8', function(err, data){
  if(err){
    console.error(err)
  }
  console.log(data)
})
// vs
const
  fs   = require('fs')
, add  = (x, y) => x + y
, nums = [1,2,3,4,5]
, newNums = nums.map(n => n * 2)
console.log(add(32, 32))
console.log(nums, newNums)
fs.readFile('./package.json', 'utf-8', (err, data) => {
  if(err){
    console.error(err)
  }
  console.log(data)
})






// arrow functions bind 'this' when defined, rather than when called!
// new kind of methods!
var obj = {
  name      : 'z'
, age       : 26
, friends   : ['g', 'e', 'r']
, hiFriends : function() {
    this.friends.forEach(function(friend) {
      console.log(this.name + ' is friends with ' + friend)
    })
  }
} // undefined is friends with g (etc.)

// vs
const obj = {
  name    : 'z'
, age     : 26
, friends : ['g', 'e', 'r']
, hiFriends(){
    this.friends.forEach(friend => {
      console.log(this.name + ' is friends with ' + friend)
    })
  }
} // z is friends with e (etc)







// template strings
const greetz = 'hello'
console.log(`${greetz}, world`)





// multiline strings (using one backtick)
var thing = 'this is a multi-line string\ndoing things the old way.\nkinda gross, huh?'
let stuff = `here's a multi-line string
doing things the new way.
much nicer, i think.`








// defaults:
function add(x, y) {
  if ((typeof x == 'undefined') || (typeof y == 'undefined')) {
    console.error('invalid arguments')
  } else {
    return x + y
  }
}

// vs
function add(x = 0, y = 0) { return x + y }
add(2, 2)
add()








// destructuring:
var peeps = ['scott', 'josh', 'erin', 'sam', 'nick', 'cole', 'geordyn']
,  first  = peeps[0]
,  second = peeps[1] // etc
// vs
const peeps = ['scott', 'josh', 'erin', 'sam', 'nick', 'cole', 'geordyn']
const [first, second, third, fourth, fifth, sixth, seventh] = peeps

// also:
var self = {
  name : 'zac'
, age  : 26
, does : 'stuff'
}
var nom  = self.name
  , old  = self.age
  , does = self.does
// vs
const self = {
  name : 'zac'
, age  : 26
, does : 'stuff'
}
const {nom, old, things} = self
let
  foo    = 'foo'
, bar    = 'bar'
, fooBar = {foo, bar}
console.log(fooBar)
let
  nonsense = {key : 'value', newKey : 'newValue'}
, {key, newKey} = senseless
console.log(key, newKey)
console.log(senseless)

// also
function personFactory(name, age, eyes, hair){
  return {
    name : name
  , age  : age
  , eyes : eyes
  , hair : hair
  }
}
// vs
function personFactory(name, age, eyes, hair){
  return {name, age, eyes, hair}
}

let [x, y] = [1, 2]
console.log(x, y)
[x, y] = [y, x]
console.log(x, y)

let foo = () => return [10, 20, 30]
let [, q, r] = foo()
console.log(q, r)






// putting some things together:
const eliteBook = {
  brand     : 'hp'
, overheats : 'rarely'
, ram       : 16
, cores     : 4
}
const toshy = {
  brand     : 'toshiba'
, overheats : 'frequently'
, ram       : 4
, cores     : 2
}
function laptopInfo({brand}, {overheats}, {ram}, {cores}){
  console.log(`my ${brand} laptop has ${ram} of RAM, a ${cores} CPU, and it overheats ${overheats}.`)
}









// rest:
var nums = [1,2,3,4,5]

function vals(list){
  var first  = nums[0]
    , second = nums[1]
    , rest   = list.slice(2)
  console.log(first, second, rest)
}

// vs
const nums = [1,2,3,4,5]

function vals([first, second, ...rest]){
  console.log(first, second, rest)
}

function logThings(...stuff){
  console.log(stuff)
}

logThings('thing one', 'thing two', false, 2)









// spread:
var a = [1,2,3]
  , b = [4,5,6]
  , c = [7,8,9]
  , x = [].concat(a,b,c)

// vs
let y = [...a, ...b, ...c]

var paragraphs = document.querySelectorAll('p')
Array.prototype.forEach.call(ps, (elm) => {
  console.log(elm.textContent)
})

// or
[...ps].forEach(elm => console.log(elm.textContent))







// MODULES! http://www.2ality.com/2014/09/es6-modules-final.html

// a module:
export function add(list){
  return [...list].reduce((acc, x) => acc + x, 0)
}

export function square(val){
  return val * val
}

const Math = {add, square}

export default Math

// using that module:
import Math          from 'math' // because it's the default
import {add, square} from 'math' // because we can

let
  total = Math.add(1,2,3,4,5)
, twice = square(16)







// classes:
// NO.
// https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a
// https://medium.com/javascript-scene/how-to-fix-the-es6-class-keyword-2d42bb3f4caf
// https://medium.com/javascript-scene/inside-the-dev-team-death-spiral-6a7ea255467b
// http://www.johndcook.com/blog/2011/07/19/you-wanted-banana/
// http://harmful.cat-v.org/software/OO_programming/

class Mammal {
  constructor(name, limbs) {
    this.name  = name
    this.limbs = limbs
  }
  details() {
    console.log(`${this.name} has ${this.limbs} limbs`)
  }
}
let cat = new Mammal('kitten', 4)
class Human extends Mammal {
  constructor(name, limbs, skillz) {
    super(name, limbs)
    this.skillz = skillz
  }
  skilled() {
    console.log(`${this.name} has ${this.skillz} skills`)
  }
}
let me = new Mammal('Zac', 4)
me.detail()
me.skilled()







// promises
// generators
// async/await
// decorators
// observables
// array methods
// object methods





// Official description of generators:
// Generators are functions which can be exited and later re-entered. Their context (variable bindings)
// will be saved across re-entrances.
// Calling a generator function does not execute its body immediately; an iterator object for the function is returned
// instead. When the iterator’s next() method is called, the generator function’s body is executed until the first
// yield expression, which specifies the value to be returned from the iterator or, with yield*, delegates to another
// generator function. The next() method returns an object with a value property containing the yielded value and a done
// property which indicates whether the generator has yielded its last value.
//
// Generator examples:
// // simple generator function
// function* simpleGeneratorFunc() {
//     yield 1;
//     yield 2;
//     return "finished";
// }
// let gen = simpleGeneratorFunc();
// console.log(gen.next());    // { value: 1, done: false }
// console.log(gen.next());    // { value: 2, done: false }
// console.log(gen.next());    // { value: 'finished', done: true }
//
//
// // calling generator function inside a generator function
// function* callGeneratorInGenerator() {
//     yield 'a';
//     yield* simpleGeneratorFunc();
//     yield 'b';
// }
// gen = callGeneratorInGenerator();
// console.log(gen.next());    // { value: 'a', done: false }
// console.log(gen.next());    // { value: 1, done: false }
// console.log(gen.next());    // { value: 2, done: false }
// console.log(gen.next());    // { value: 'b', done: false }
// console.log(gen.next());    // { value: undefined, done: true }
//
// // ways of iterating through all the yields in the generator function
//
// // while loop
// gen = simpleGeneratorFunc();
// let item = {"done":false};
// while(!item.done) {
//     item = gen.next();
//     console.log(item);
// }
// // { value: 1, done: false }
// // { value: 2, done: false }
// // { value: 'finished', done: true }
//
//
// // for of
// for (let g of simpleGeneratorFunc()) {
//     console.log(g);
// }
// //1
// //2
//
// // the three dots spread operator ...
// let arr = [...simpleGeneratorFunc()];
// console.log(arr); // [1, 2]
//
// // destructuring
// let [a, b] = simpleGeneratorFunc();
// console.log(a); // 1
// console.log(b); // 2
//
//
//
// In node.js, input and output operations are asynchronous or non-blocking I/O. It allows other operations to continue
// before the I/O transmission are finished. For example, when it encounters a file read operation, it will not wait
// for the file reading operation to finish, but instead it will jump to the next line of code and go on it’s execution.
// This causes the results of the I/O operation to be out of order. There are ways of to control the order, such as
// nested callback function, async libraries, promise libraries and generator function. Generator function is a new
// feature in es6, the snippet below is an example of using generator function to make sure the asynchronous functions
// to run in the order it is written in the code.
// // synchronous timeout function
// // genAsync is a generator object in global scope
// // genAsync.next in this function keeps the tasks to run till completed
// function timeoutFunc(order) {
//     var random = Math.random();
//     setTimeout(function(){
//         genAsync.next(random + order);
//     }, random * 3000);
// }
//
// // The generator function runing the asynchronous function in series, one after another
// function* runTimeoutFuncAsync() {
//     var random1 = yield timeoutFunc(1); console.log(random1);
//     var random2 = yield timeoutFunc(2); console.log(random2);
//     var random3 = yield timeoutFunc(3); console.log(random3);
// }
// var genAsync = runTimeoutFuncAsync();
// genAsync.next(); // kick off the tasks


