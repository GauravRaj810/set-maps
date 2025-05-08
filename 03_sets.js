// Sets is a type of new iterable 

/* - it is like similar to array 
    - store data 
    - sets also have its own methods 
    - No indexed-based access
    - order is not guranteed
    - unique items only (no duplicate allowed )
    - We can store different types of data in set 
 */

/* const numbers = new Set([1,2,3]);
console.log(numbers); */

const numbers = new Set();
    numbers.add(1);
    numbers.add(2);
    numbers.add(['item1', 'item2', 'item3'])  // we can also add here data type 
    numbers.add(['item1', 'item2', 'item3'])  // this will also be store but not count as duplicate because of 
    console.log(numbers);
    /* has method  */
    if(numbers.has(2)){
        console.log("2 is there ");
    } else{
        console.log(" 2 is not there okay got it  ");
    }
