# ES6 Async Demo

this is just a demo of all the various methods to perform asynchronous operations in ES6

### Covered techniques

- **callback functions** ( _not recommended_ )
- **named callback functions/lambda expressions** ( _a bit better than callback_ )
- **Promises** ( _recommended/preferred_ )
- **Async/await** ( _recommended/more preferred_ )

### Key terms

##### Asynchronous JavaScript

    this a technique to execute long chain of processes on the JavaScript (single) thread without blocking it and hence allowing other functions or lines of code to run.
    check my examples for illustration of code execution while an asynchronous function is running

##### Callbacks

    A callback is a function that is passed into another (high order) function as an argument.
    It is executed after the high order function has finished executing.
    when the callback function is named or passed into a variable,then its a lambda expression.
    check my examples for illustration of callbacks/lambda expressions.

##### Promises

    A Promise is an object representing the eventual completion or failure of an asynchronous operation.
    Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
    Promises are created like objects and consumed using then(to add callbacks) and catch (to catch errors) expressions or using async/await.
    check my examples for illustration of promises creation and consumption.

##### Async/await

    Async/await is just a better way of consuming promises. it is basically a syntactic sugar added with ES6 to handle promises.
    they remove the chaining of then statements in promises consumption and use await to get data from resolved promises
