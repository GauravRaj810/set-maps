// Maps 
/*  Map is a built-in object that allows you to store key-value pairs 
    A map can use any type of value (objects , functions , primiteve types )


    // in object the key is of only 2 types - String or symbol 
    // But in map we can consist any type of data type 
 */

 const person = new Map();
 person.set('firstName' , 'Harshit');
 person.set('age' , 7);
 person.set(1 , 'one');
 console.log(person);
 console.log(person.get(1));
 for(let key of person.keys()){
  console.log(key);
 }

 