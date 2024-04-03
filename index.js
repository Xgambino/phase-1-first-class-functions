function receivesAFunction(callback) {
    if (typeof callback === 'function') {
      callback();
    } else {
      console.error('Argument is not a function');
    }
  }
  
  // Example usage:
  function myCallback() {
    console.log('Callback function was called!');
  }


  receivesAFunction(myCallback);
  
  function returnsANamedFunction() {
    // Define a named function
    function namedFunction() {
        console.log('named function');
    }
    // Return the named function
    return namedFunction;
}

// Example usage:

const namedFunction = returnsANamedFunction();
namedFunction();

function returnsAnAnonymousFunction(){
 return function() {
        console.log('This is an anonymous function');
    };
}
  // Example usage:
  console.log(returnsAnAnonymousFunction)