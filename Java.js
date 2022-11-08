Задание 1

let a = prompt('Введите значение', '');
a = +a
console.log(typeof(a))
 if (a % 2 ===0) {
  console.log('четное')
} else if (a % 1 === 0) {
  console.log('нечетное')
} else if (a === 'NaN') {
  console.log('Не число')
} else {
  console.log('Упс, кажется, вы ошиблись')
}

Задание 2

let x = true;
 if (typeof(x) === 'number') {
   console.log(typeof(x))
 } else if (typeof(x) === 'string') {
   console.log(typeof(x))
 } else if (typeof(x) === 'boolean') {
   console.log(typeof(x))
 } else {
   console.log('Тип x не определён')
 }

Задание 3

let str = "Hello"
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse(str))

Задание 4

function  getRandomRange(min, max) {
    return Math.floor(Math.random() * (max-min));
  } 
  console.log(getRandomRange(0, 100));

Задание 5 

let arr = ['раз', 'два', 'три', 'четыре', 'пять'];
console.log(arr.length);
arr.forEach(function(item, index, array) {
            console.log(item)
            });

Задание 6

let a = ['Весы', 'Телец', 'Близнецы', 'Дева', 'Скорпион'];

function hasDuplicates(a) {

  const noDups = new Set(a);

  if (a.length !== noDups.size) {
    return true;
  } else {
    return false;
  }
}

Задание 7

et arr = [52, 9, 1.4, null, 24, 0.8, 11,undefined, ];
let zerocount = 0;
let numbercount = 0;
let evencount = 0;
let oddcount = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
        
        if (arr[i] === 0) {
            zerocount += 1;
        } else if (arr[i] % 2 === 0) {
            evencount += 1;
        } else {
            oddcount += 1;
        }
    }
}

console.log(`В массиве: ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных!`);
Задание 8

let myMap = new Map();
myMap.set('one', 'ten');
myMap.set('two', 'ten');
myMap.set(333, 'wow');
myMap.set(false, 666);
myMap.set('sting', 'spring');

console.log(myMap.keys())
console.log(myMap.values())

for(let name of myMap.keys()) {
  console.log(`Ключ - ${name}`)
}
for(let name of myMap.values()) {
  console.log(`Значение - ${name}`)
}
