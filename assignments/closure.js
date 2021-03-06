// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function myMonstrocity(myClass, timeline) {
  const className = myClass;
  function text() {
    const time_line = timeline;
    console.log(`Hello, ${className} I have come from the ${time_line}`);
  }
  text();
}
myMonstrocity("FSW 14", 'future');



// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let num = 0;
  function increase() {
    num++;
    return num;
  }
  return increase;
}
let newCount = counter();
console.log(newCount());


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
