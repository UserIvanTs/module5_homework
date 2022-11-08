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