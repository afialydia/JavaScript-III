/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding is the default method for "this". It 
* 2. Implicit Binding is the most common use of this. When you call the function and when it is involed look to the left of the dot and that is what the this key word is referencing. 
* 3. explicit binding
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

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

// code example for New Binding

// Principle 4

// code example for Explicit Binding