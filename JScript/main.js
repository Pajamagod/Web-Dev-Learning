console.log('Success');
// Comment JS

/* Multi 
Line 
Comment 
JS
*/

//Variables
/*Case Sensitive
Should be Meaningful and Descriptive
Cannot contain a space or hyphen
Cannot be a reserved word
*/

//Constants
/*
    Read only, cannot be changed.
    must be declare and initialize by assigning.
*/

//Primitive Data Types
/*
let name = 'John'; // String Literal
let age = 30; //Number Literal
let lovesCats = true; //Boolean Literal
let color = null; //Null
let undef; //Undefined

let message = `${name} is ${age}`;
//modern concatenation syntax
console.log(message);

//Reference Data Types

// Array Literals

const numbers = [1,2,3,4,5,6];
const colors = ['red', 'blue', 'green', 'yellow']

colors[4] = 'black';

//Object Literals

const person = {
firstName: 'John',
lastName: 'Smith',
age: 30,
pets: ['dogs', 'cats'],

}

// Dot Notation
console.log(person.age);

let key = 'firstName';

// Bracket Notation
console.log(person[key]);
*/

//DOM - Document Object Model

//Single Element Selectors
/*    const list = document.querySelector('#list');
    const listItems = document.querySelectorAll('.list-item');

    listItems.forEach(item => {
        console.log(item.textContent);
    })
    console.log(listItems);
    list.lastElementChild.remove();
*/
//Events

const btn = document.getElementById('myBtn');
btn.addEventListener('mouseout', (e) => {
    btn.style.background = 'blue';
});



