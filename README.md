# ES6 Async Demo

this is just a demo of all the various methods to perform asynchronous operations in ES6

### Covered techniques

- **callback functions** ( _not recommended_ )
- **named callback functions/lambda expressions** ( _a bit better than callback_ )
- **Promises** ( _recommended/preferred_ )
- **Async/await** ( _recommended/more preferred_ )

### Key terms

##### Asynchronous JavaScript

    this a technique to execute long chain of processes on the JavaScript (single) thread without blocking it and hence allowing other functions or lines of code to run. check my examples for illustration of code execution while an asynchronous function is running

##### Callbacks

    A callback is a function that is passed into another (high order) function as an argument and is executed after the high order function has finished executing.
    when the callback function is named or passed into a variable,then its a lambda expression.
    check my examples for illustration callbacks/lambda expressions

##### Promises

    A Promise is an object representing the eventual completion or failure of an asynchronous operation.
    Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
