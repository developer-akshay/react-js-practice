// A Higher-Order Function is:

    // A function that either takes another function as an argument, Or returns a new function (or both).

    // Higher-Order Components (HOCs) are an effective React technique for reusing component logic. They are functions that accept a component as an argument and return a new, improved component. HOCs are excellent for abstracting shared functionality, such as data retrieval, authentication, or style, into reusable modules that can be applied to several components.

    // Why Is debounce a Higher-Order Function?

        // 👉 The answer is simple:

        // It takes a function func as an argument.

        // It returns a new debounced version of that function.

    // Higher-Order Function: accepts a function and returns a function

    function debounce(func, wait) {
        let timer;
    
        return function (...args) {       // <-- Returns a new function
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), wait);
        };
    }
  


