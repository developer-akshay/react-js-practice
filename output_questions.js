1
    function sayHi() {
        console.log(name);
        console.log(age);
        var name = 'Lydia';
        let age = 21;
    }
    
    sayHi();

    // undefined and ReferenceError

        // Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined.

        // Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a ReferenceError.

2
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
    }
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
    }

    // 3 3 3 and 0 1 2

        // Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.

        // In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop.

3
    const shape = {
        radius: 10,
        diameter() {
        return this.radius * 2;
        },
        perimeter: () => 2 * Math.PI * this.radius,
    };
    
    console.log(shape.diameter());
    console.log(shape.perimeter());

    // 20 and NaN

        // Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function.

        // With arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions! This means that when we call perimeter, it doesn't refer to the shape object, but to its surrounding scope (window for example).

        // Since there is no value radius in the scope of the arrow function, this.radius returns undefined which, when multiplied by 2 * Math.PI, results in NaN.

4
    +true;
    !'Lydia';

    // 1 and false

        // The unary plus tries to convert an operand to a number. true is 1, and false is 0.
        // The string 'Lydia' is a truthy value. What we're actually asking, is "Is this truthy value falsy?". This returns false.

5 
    // Which one is true?
        const bird = {
        size: 'small',
        };

        const mouse = {
        name: 'Mickey',
        small: true,
        };

        // A: mouse.bird.size is not valid
        // B: mouse[bird.size] is not valid
        // C: mouse[bird["size"]] is not valid
        // D: All of them are valid

            // mouse.bird.size is not valid 
            // Since when we use dot it will look values statically (it only check values inside that variable only like we using mouse. then it can only access name, samll ) but if we use [] it will look values dynamically (it can access values of other objects too )

            // mouse[bird.size] is not valid  , it will print true
            // (here mouse is searching values dynamically then inside that birds. is searching statically ) so it will print true

            // mouse[bird["size"]] is not valid , it will print true
            // here mouse will look dynamically value then inside bird also can access values dynamically so it it will work

6
    let c = { greeting: 'Hey!' };
    let d;

    d = c;
    c.greeting = 'Hello';
    console.log(d.greeting);

    // Hello

        // In JavaScript, all objects interact by reference when setting them equal to each other.
        // First, variable c holds a value to an object. Later, we assign d with the same reference that c has to the object.
        // When you change one object, you change all of them.

7
    let a = 3;
    let b = new Number(3);
    let c = 3;

    console.log(a == b); //true
    console.log(a === b); //false
    console.log(b === c); //false

    // true false false

        // since when we use new Number(3) type is not number it's object 
        // new Number() is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.
        // When we use the == operator (Equality operator), it only checks whether it has the same value. They both have the value of 3, so it returns true.
        // However, when we use the === operator (Strict equality operator), both value and type should be the same. It's not: new Number() is not a number, it's an object. Both return false.

8 
    const a = [10,15]
    const b = a.push(13)
    console.log(a)
    console.log(b)

    // a will be [10,15,13] b is 3
        
        // Since  a.push(value) Adds value to the array & Returns new length

9
 