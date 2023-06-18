


// MYEACH
const names = ['ado','opo','hapi', 'abdu'];
//from my understanding its supposed to take in an array
//and iterate through each element with a callback of my choosing
 function myEach (arr, cb) {
    for(let i = 0; i< arr.length; i++){
        cb(arr[i])
    }
}
//myEach(names)


    //MYMAP
    //myMap function, takes in an array and outputs the arra with whatever
    //the callback function does, in this example it takes the arraya and the 2nd
    //function multiplies an element by 2, and the myMap function
    //iterates through the array and returns all the elements multiplied by two
   const  arr2 = [1,2,3,4,5, 6]
   function myMap (arr, cb){
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
  function myFilter(arr, cb){
    let  result =[];
    for(let i = 0; i<arr.length; i++){ 
      if(cb(arr[i])){
          result[result.length] = arr[i];
      
        } 
    }
    return result;
  }

//   const div3 =(value)=>{ return value % 3 == 0}
//   console.log(myFilter(arr2, div3))




//MYSOME
//

function mySome(){


    return
}

//EVERY

function myEvery(){
     
}

//REDUCE

function myReduce(){

}

//INCLUDES

function myIncludes(){

}

//INDEX OF

function myIndexOf(){

}


//MYPUSH

function myPush(){


}

//LAST INDEX OF
 function myLastIndexOf(){


 }

//OBJECT KEYS, 

function grabKeys(){

}

//OBJECT VALUES
function grabValues(){

    
}

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
        
