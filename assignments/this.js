/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding is the default method for "this". If none of the other rules of binding are met JS just uses it. 
* 2. Implicit Binding is the most common use of this. When you call the function and when it is involed look to the left of the dot and that is what the this key word is referencing. 
* 3. new binding occurs when this is used to create new data sets for new objects to pass through.  
* 4. explicit binding uses the call method to invoke the specific keyword that is to be referenced. 
*
* write out a code example of each explanation above
*/

// Principle 1
window.favColor = 'teal'

function colors () {
  console.log(`My favorite color is ${this.favColor}.`)
}

colors();
// code example for Window Binding

// Principle 2
var Bear = {
    type: 'bear',
    location: 'the woods',
    eats: 'fish',
    noise: 'ROOOOAAAR',
    hearMe: function(){
        console.log(this.noise);
    }
}

Bear.hearMe();
// code example for Implicit Binding



// Principle 3

function Person (obj){
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function(){
      console.log(this);
      return `Hello, my name is ${this.name}, and I am ${this.age} years old!`;
    }
  }
const Afia = new Person({name:'Afia', age: 27}); 
const Justin = new Person({name: `Justin`, age: 28});

Afia.speak();
// code example for New Binding

// Principle 4

Afia.speak.call(Justin)

// code example for Explicit Binding