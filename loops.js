// a loop is used to repeat the same code as many times as we want
// the "while" looop runs its body as long as its condition is true
while (true) {
  console.log("hello");
}

//infinite loops make conditions never turn false
//usually a bug unless needed for something particular
//ctrl + C can kill this process

let heads = true;
while (heads){
if (Math.random)() < 0.8) {
  //Math.random() is a random num gen from 0 to 0.9
  console.log("Heads!");
} else {
  heads = false;
}
}

//indefinite loop, will stop eventually
let i = 1;
while (i <= 10);{
console.log(i);
console.log("hello")
1 += 1;
console.log("Goodbye")
}
//enable debugger: toggle auto attach > start
//will stay set until changed manually


//a for loop is syntactic sugar for a while loop
// for(start;stop;stop)
//not very readable 
// has to go at the end of the body
for (let i = 0; i <= 10; i += 1){
  console.log("hello")
}


let i = 0;
while (i <= 3){
  console.log(i);
  i += 1;
}
console.log("Done!")