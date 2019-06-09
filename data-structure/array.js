function print(i) {
  console.log(i)
}

var arr, arr2;
var result;

print("toString, join:");
arr = [1, 2];
print(Array.isArray(arr));
print(arr);
print(arr.toString());
print(arr.join());
print(arr.join('-'));
print(Array.prototype.join.call('Hello', '-'));
print('');

print("push (add element in end):");
arr = []
arr.push(1);
arr.push(2);
print(arr.toString()); // 1, 2
arr2 = [3, 4];
arr.push.apply(arr, arr2);
print(arr);
print('');

print("pop (delete and return the element in end):");
arr = [1, 2, 3];
print(arr.pop());
print(arr); // 1, 2
print([].pop()); // undefined
print('');

print("shift (delete and return the first element):");
arr = [1, 2, 3];
print(arr.shift());
print(arr);
print('');

print("unshift (add element in the beginning):");
arr = [2, 3];
print(arr.unshift(1)); // Return the new length.
print(arr); // 1, 2, 3
print('');

print("reverse (reverse the oringal array):");
arr = [1, 2];
arr.reverse()
print(arr);
print('');

print("slice (choose part of original array):");
// arr.slice(start_index, upto_index);
arr = [1, 2, 3];
print(arr.slice(1, 2)); // 2
print(arr.slice(1)); // 2, 3
print(arr.slice()); // 1, 2, 3
print(arr.slice(-2)); // 2, 3
print(arr.slice(-2, -1)); // 2
print(arr.slice(-2, 0)); // []
print(arr.slice(4)); // []
print(arr.slice(1, 0)); // []
// Change Array-like object to Array.
var newArray = Array.prototype.slice.call({0: 'a', 1: 'b', length: 2});
print(newArray); // a, b
print('');

print("splice (delete part of original array and insert new elementes):");
// arr.splice(index, count_to_remove, newElement1, newElement2...)
arr = [1, 2, 3];
print(arr.splice(2, 1)); // 3
print(arr); // 1, 2

arr = [1, 2, 3];
print(arr.splice(-2, 1)); // 3
print(arr); // 1, 2

arr = [1, 2, 3];
print(arr.splice(2, 1, 4, 5)); // 3
print(arr); // 1, 2, 4, 5
print('');

arr = [1, 2, 3];
print(arr.splice(1, 0, 4)); // set count to 0 to just insert.
print(arr); // 1, 4, 2, 3

Array.prototype.insert = function(index, value) {
  this.splice(index, 0, value);
};

arr = [1, 2, 3];
arr.insert(1, 4);
print(arr); // 1, 4, 2, 3

arr = [1, 2, 3];
print(arr.splice(1)); // 2, 3 // split into 2 arrays at index 1.
print(arr); // 1

print("sort (the original array will be changed):");
arr = [3, 2, 1];
arr.sort()
print(arr); // 3, 2, 1

var users = [
  {name: 'Tom', age: 10},
  {name: 'Jason', age: 9},
].sort(function (u1, u2) {
  // If return > 0, then: u2/u1.
  // Else, then: u1/u2.
  return u1.age - u2.age;
});
print(users); // Jason, Tom
print('');

print("map (operate each element, and return new Array):");
arr1 = [1, 2, 3].map(function (n) {
  return n * n;
});
print(arr1); // 1, 4, 9

// Element, Index, Array
arr1 = [1, 2, 3].map(function (elem, index, arr) {
  return elem * index;
});
print(arr1); // 0, 2, 6
print('');

arr = ['a', 'b', 'c'];
arr1 = [1, 2].map(function (elem) {
  return arr[elem];
}, arr);
print(arr1); // b, c

var upper = function(x) {
  return x.toUpperCase()
};
print([].map.call('abc', upper)); // A,B,C
print('abc'.split('').map(upper)); // A,B,C

print('');

print("forEach (operate each element, but do NOT return a new arry):");
['a', 'b', 'c'].forEach(function (elem, index, arr) {
  print(index + ": " + elem);
});
print('');

print("filter (find special elements and return a new array):");
arr = [1, 2, 3].filter(function (elem) {
  return (elem > 1);
});
print(arr); // 2, 3

arr = [1, 2, 3].filter(function (elem, index, arr) {
  return (index % 2 === 0);
});
print(arr); // 1, 3
print('');

print("some/every (does some or every elemente meet the case):");
arr = [1, 2, 3];
result = arr.some(function (elem) {
  return (elem > 1);
})
print(result); // true
result = arr.every(function (elem) {
  return (elem > 1);
})
print(result); // false

print('');

print("reduce/reduceRight (calculate some of an array):");
result = [1, 2, 3].reduce(function (partial, elem) {
  print(partial); // 1, 3
  return partial + elem;
});
print(result); // 6

result = [1, 2, 3].reduce(function (partial, elem) {
  print(partial); // 10, 11, 13
  return partial + elem;
}, 10); // 10 is the initial value.
print(result); // 16

Array.prototype.sum = function() {
  return this.reduce(function (partial, elem) {
    return partial + elem;
  });
}
print([1, 2, 3].sum()); // 6
print('');

print("indexOf (find the index of an element):");
print([1, 2, 3].indexOf(2)); // 1
print([1, 2, 3].indexOf(2, 2)); // -1 // Find from index of 2, can't find it.
print([1, 2, 3, 2].lastIndexOf(2)); // 3
print('');

/// ... => Change array to ',' separated list.
console.log(...[1, 2, 3]);

arr = [1, 2, 3];
console.log(Math.max(...arr));

/// Clone array.

let a1 = [1, 2];
let a2 = a1;      // Just the pointer to original array.
let a3 = [...a1]; // Clone the array.
a1[0] = 0;
console.log(a2[0]); // 0
console.log(a3[0]); // 1

/// Merge array.

arr2 = [4, 5, 6];
arr.push(...arr2);
console.log(arr);

let arr3 = [1, 2, 3, ...arr2];
console.log(arr3);

/// Destruct array.

let [first, ...rest] = arr;
console.log(first); // 1
console.log(rest);  // 2,3,4,5,6

/// With string.

// Change string to array.
let strArr = [...'Hello'];
console.log(strArr instanceof Array);

let strArr2 = Array.from('Hello');
console.log(strArr2 instanceof Array);

let numArr = Array.of(1, 2, 3);
console.log(numArr instanceof Array);

/// With Map/Set

let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);
console.log(...map.keys());

/// find/findIndex/indexOf/includes/

console.log('\nfind/findIndex/indexOf/includes/: ');
let arrToFound = [1, 2, 3];
let numFound = arrToFound.find((n) => n > 1);
console.log(numFound); // 2
let numIndex = arrToFound.findIndex((n) => n > 1);
console.log(numIndex); // 1
console.log(arrToFound.indexOf(2)); // 1
console.log(arrToFound.includes(2)); // true

/// fill

console.log('\nfill: ');
console.log(new Array(3).fill('a'));

/// entries/keys/values

console.log('\nentries/keys/values: ');
let arrToIterate = ['a', 'b', 'c'];
for (let key of arrToIterate.keys()) {
  console.log(key); // 0, 1, 2
}

for (let [key, value] of arrToIterate.entries()) {
  console.log(key, value); //
}
// TODO Strange that .values() is unavailable.
for (let [, value] of arrToIterate.entries()) {
  console.log(value);
}
// for...in
for (index in arrToIterate) {
  console.log(arrToIterate[index]);
}
// for...of
for (let value of arrToIterate) {
  console.log(value);
}

// Empty array
// arr.length = 0 // Reset original array.
// arr = [] // Will create new array.
