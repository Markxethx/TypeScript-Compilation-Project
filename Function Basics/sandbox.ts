let greet: Function = () => {
  console.log('hello, world');
}

//greet = 'hello'; //this is an error, we cannot redefine the greet for it was suppose to be a function

// greet = () => {
//   console.log('hello, again');
// }

// greet()

// const add = (a: number, b: number, c/*?*/: number | string = 10): void => {
//     console.log(a + b);
//     console.log(c);
//   }
  
//   add(5, 10, 'ninja');
  
  const minus = (a: number, b: number): number => {
    return a + b;
  }
  
  let result = minus(10,7);
  console.log(result);
