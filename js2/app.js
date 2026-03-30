// console.log("Hello World!");

// let x=666
// console.log(x);
// console.log(typeof(x));

// function createcourse(coursename) {
//     console.log(coursename);
// }

// createcourse("Angular");
// createcourse("React");


//scope
//global scope

// let a=10;
// function test() {
//     console.log(a);
// }
// test();
// console.log(a);

let a = 1;

function demo() {
  let b = 2;

  if (true) {
    let c = 3;
    console.log(a, b, c);
  }
}
demo();

function one() {
  two();
}

function two() {
  three();
}

function three() {
  console.log("Done");
}

one();