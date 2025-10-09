// let vs const (why use one over the other?)

//      the core differences between let and const are rooted in variable mutability, code clarity, and error prevention. While both offer block-scope (unlike var’s function/global scope), their critical difference is reassignment: let allows it, whereas const prohibits it after initialization.

// What const Actually Does

//     const prevents reassignment of the variable binding (you cannot point it to a new value).

//     It does not freeze the value itself if it’s an object or array.
//         Objects: properties can still be added/removed/changed.
//         Arrays: elements can still be pushed, popped, or mutated.

            EXAMPLE 
                const person = { name: "Alice", age: 25 };
                // ✅ Allowed: mutate a property
                person.age = 26;
                // ❌ Not allowed: reassign the variable
                person = { name: "Bob", age: 30 };

// When to Use const with Mutation

    // You use const when:

    //     The identity should stay the same — you don’t want the variable name to point to a different object/array later.
    //     But you still need to work with the same object/array instance (mutating properties or pushing new items).
            EXAMPLE

                // Configuration object that evolves during runtime

                const config = { theme: "light" };
                // Later in the code, you toggle it:
                config.theme = "dark";  // ✅ mutate property

                // Arrays that grow/shrink

                const todos = [];
                todos.push("Buy milk");
                todos.push("Go to the gym");
                // The `todos` reference stays constant, but its contents evolve.

// how to make objects/arrays fully immutable  
    
    // We need Object.freeze() for our env obj configs, Role-based permissions, UI constants (design tokens) 

    // Configs are usually global/static objects that represent rules, constants, or environment-dependent values.
    // These shouldn’t ever be changed at runtime — so Object.freeze ensures nobody accidentally mutates them.

    // Limitation of Object.freeze() is that nested object properties still mutates

    // ✅ Rule of Thumb:
    // Use Object.freeze for static, global, read-only configs where mutation would cause bugs, security issues, or inconsistencies.

    EXAMPLE

        const APP_CONFIG = Object.freeze({
            APP_NAME: "MyCoolApp",
            VERSION: "1.0.0",
            API_URL: "https://api.example.com",
        });

        const THEME = Object.freeze({
            COLORS: {
              PRIMARY: "#3498db",
              SECONDARY: "#2ecc71",
              ERROR: "#e74c3c",
            },
            FONT_SIZE: {
              SMALL: "12px",
              MEDIUM: "16px",
              LARGE: "20px",
            }
          });
          

    

      
