// Debouncing is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function is debounced with a wait time of X milliseconds, it must wait until after X milliseconds have elapsed since the debounced function was last called.

// You almost certainly have encountered debouncing in your daily lives before (e.g. when entering an elevator). Only after X duration of not pressing the "Door open" button (the debounced function not being called) will the elevator door actually close (the callback function is executed).

export default function debounce(func, wait) {
    let timer;
  
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(()=>{func.apply(this,args)},wait)
    }
  
}

  Example
  
  1
    let i = 0;
    function increment() {
      i++;
    }
    const debouncedIncrement = debounce(increment, 100);
    
    // t = 0: Call debouncedIncrement().
    debouncedIncrement(); // i = 0
    
    // t = 50: i is still 0 because 100ms have not passed.
    
    // t = 100: increment() was invoked and i is now 1.

  2 
    debouncedIncrement() is called multiple times.

      let i = 0;
      function increment() {
        i++;
      }
      const debouncedIncrement = debounce(increment, 100);

      // t = 0: Call debouncedIncrement().
      debouncedIncrement(); // i = 0

      // t = 50: i is still 0 because 100ms have not passed.
      //  Call debouncedIncrement() again.
      debouncedIncrement(); // i = 0

      // t = 100: i is still 0 because it has only
      //  been 50ms since the last debouncedIncrement() at t = 50.

      // t = 150: Because 100ms have passed since
      //  the last debouncedIncrement() at t = 50,
      //  increment was invoked and i is now 1 .

  3
      search input Example

        <input type="text" id="search" placeholder="Type to search..." />

        function handleInput (event) {
          console.log('value of event rn',event.target.value);
        }
        const searchInput = document.getElementById("search");
        searchInput.addEventListener('input' , debounce(handleInput,1000))

  4
      resize events , change of header menu at mobile and show full option during desktop

        function handleMenuOnResize() {
          if(window.innerWidth>=768) console.log('mobile size')
          else console.log('desktop size')
        }
        
        window.addEventListener('resize',debounce(handleMenuOnResize,250))

  5
  
    closure behaviour with debounce 
      1️⃣ When you call debounce(func, wait), a new function is returned.
      2️⃣ That returned function has access to variables defined in the outer debounce() function, namely:
        timer
        func
        wait
      This is a classic closure behavior
      The returned function remembers the environment where it was created.