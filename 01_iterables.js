// iterables - 
/* - A iterable is something which you can loop through like array , string  */

// Example of string to show for of working as iterable 
const firsName = "Gaurav";
for(let char of firsName){
    console.log(char);
}
 
// Example of array to show for of working as iterable 

const items = ['Guava' , 'Mango' , 'Litchi' , 'pineapple ']
for(let item of items){
    console.log(item);
}


// Example of using over object 
/* - object is not iterable  */
/* 
const obj = {a:1 , b:2};

for(let objs of obj){
    console.log(objs);
}
 */



