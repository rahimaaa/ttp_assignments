// myEach function
const names = ['ado','opo','hapi', 'abdu'];

const myEach = (arr , cb) => {
    for( let i = 0; i < arr.length; i++){
        const element = arr[i];
        console.log(element);
        cb(element)

    }
}
myEach(names,(name) => {

    console.log(myEach);
    })

    //myMap function
   const  arr2 = [1,2,3,4,5]

    function myMap (arr2,cb){
        var newArr = [];
        for(let i =1; i<arr2.length; i++){
            newArr.push(cb(arr2[i]*2))

        }
        console.log(newArray);
        return newArr
        
    }
    

    console.log(myMap(arr2));


