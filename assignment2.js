const arr1 = ["ado", "opo", "hapi", "abdu"];
const arr2 = [1, 2, 3, 4, 5, 6, 2];

// MYEACH

//from my understanding its supposed to take in an array
//and iterate through each element with a callback of my choosing
function myEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}
//myEach(arr1)

//MYMAP
//myMap function, takes in an array and outputs the arra with whatever
//the callback function does, in this example it takes the arraya and the 2nd
//function multiplies an element by 2, and the myMap function
//iterates through the array and returns all the elements multiplied by two

function myMap(arr, cb) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = cb(arr[i]);
  }
  return result;
}
//    const vari=(value)=>{ return value * 2}
//    const mapp = myMap(arr2,vari )
//    console.log(mapp)

//MYFILTER
//iterterates through the array and returns if the passed element
//onith position in the array holds true for the callback function
//that we/user passed
function myFilter(arr, cb) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      result[result.length] = arr[i];
    }
  }
  return result;
}

//   const div3 =(value)=>{ return value % 3 == 0}
//   console.log(myFilter(arr2, div3))

//MYSOME

function mySome(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) return true;
  }
  return false;
}

//const some = (value)=>{return value % 7 == 0 }
// console.log(mySome(arr2,some))

//EVERY

function myEvery(arr, cb) {
  for (let i in arr) {
    if (!cb(i)) return false;
  }
  return true;
}

//console.log(myEvery(arr2, some))

//REDUCE

function myReduce(arr, cb, value) {
  for (let i in arr) {
    //had to use === for strict equality
    if (value === undefined) {
      value = i;
    } else {
      value = cb(arr[i], value);
    }
  }
  return value;
}
//   const add =(val, i)=>{ return i= i + val}
//   console.log(myReduce(arr2, add, 0))

//INCLUDES
function myIncludes(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      return true;
    }
  }
  return false;
}

//console.log(myIncludes(arr1,'seva'))

//INDEX OF
function myIndexOf(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      return i;
    }
  }
  return "not found";
}
//console.log(myIndexOf(arr2, 7))

//MYPUSH
function myPush(arr, element) {
  let length = arr.length;

  if (typeof element == "object") {
    for (let i of element) {
      arr[length] = i;
      length++;
    }
  } else {
    arr[length] = element;
    length++;
  }
  return arr.length;
}
// let arr3 = ['cows', 'dogs', 'cats']
// console.log(myPush(arr3,'pigs'))
// console.log(arr3)

//LAST INDEX OF
function myLastIndexOf(arr, element) {
  let x = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      x = i;
    }
  }
  return x;
}
//console.log(myLastIndexOf(arr2,2))

//OBJECT KEYS,
/*
 Modify the Object class, appending a static method to the Object class.,
  appending a static method to the Object class. Leverage the “for...in” 
  loop.
*/
function grabKeys() {}

//OBJECT VALUES
function grabValues() {}

/* PROBLEM(1)
1: Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

function moveZeros (nums) {

}


Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]


Note:
You must do this in-place without making a copy of the array.


*/
