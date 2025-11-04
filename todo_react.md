#                Focus on scaliblity & reuseablity
#                think about edge case and error handling 
#                Practice explaining your design decisions
#                build vaniall js first and then framework 
#                create your own component library
#                Data visualization libraries like Apache ECharts , D3.js, Charts.js
#                optimize re-render and handle edge cases

# Begineer 

    1 star rating
    2 progress bar

## Intermediate

    1 carousel (system design)
    2 Pagination & infinite scroll
    3 configurable color boxes
    4 Posts with comments 
    5 Ecommerce filters & shopping cart
    6 create a button on click open a modal containing a file input field for file selection.


## Advanced 
    1 Config Driven forms
    2 Toast /notification system
    3 Autocomplete/ Typehead
    4 Nested comment section
    5 Poll widget
    6 Advanced tic tac toe 
    7 Match simlar Tiles
    8 Cinema Hall Seat Booking 

# 1. How would you implement infinite scrolling in React?
    Consider the approach for triggering additional data load when the user scrolls near the end of the page or a scrollable element.
    How would you handle throttling, debouncing, or optimization to prevent excessive requests?
    Discuss how to manage state for pagination and loading indicators.
    How do you load more data on scroll without tanking performance?
    Throttling, debouncing, state sync, what's your approach?

# 2. How would you implement a search functionality with live filtering in a React application?
    Describe how to optimize the filtering process for large datasets.
    How would you debounce user input to avoid unnecessary re-renders or API calls?
    How would you manage the filtered results state and the interaction with an API?
    How do you debounce user input?
    What if you're working with large datasets?

# 3. How would you design and implement a form with dynamic fields in React?
    How would you manage form validation, error handling, and state for dynamic inputs?
    Would you use controlled or uncontrolled components for such a form?
    How would you structure the form's state for adding/removing dynamic fields?

# 4. How would you implement state management for a multi-step form in React?
    How would you ensure that data entered in each step of the form is stored properly and can be accessed across steps?
    How would you manage navigation between steps and handle errors or validation for each step?

# 5. How would you implement a custom useFetch hook in React for handling HTTP requests?
    Discuss the structure of the hook for handling loading, error, and success states.
    How would you use useEffect to trigger the API request and manage cleanup?
    How would you ensure that the hook is reusable across different components?

# 6. How would you implement lazy loading of components in React?
    Explain how to use React.lazy and Suspense for loading components only when required.
    How would you handle loading indicators or fallback Ul during the loading process?
    How would you manage this for multiple components or routes?

# 8. How would you implement a draggable list in React?
    Explain how to manage the drag-and-drop state and reordering of list items.
    What would be your approach for handling the drag events, and how would you optimize performance?

# 9. How would you implement authentication and authorization in React?
    How would you protect routes that require authentication and redirect users to the login page if they're not authenticated?
    How would you implement token-based authentication (e.g., JWT) and handle token expiry?

# 10. Create a page where use context api for toggling the theme of the page 


# Component composition :
    - It's a way to break complex ui into smaller , reusable components & combining them to build flexible and maintainable interfaces.
    
# React context API:

todo:
whenever data changes how the re render cycle works 


- It's one of the way to resolve issue of prop drilling, majorly used at cart page.

- How to do setup

1. Best way to create a seprate folder named " Store " then create a file where you will create context.
2. at the context file you have to import createContext object which will be used to store the data which you want to share accross the components using one of it's own provided component provided 
3.  import { createContext } from "react";

export const CartContext = createContext({
    item: []
});

4. It's not neccessary to wrap the created context object at APP.jsx file 

5. If you want to provide context store access to entire app then wrap at APP.JSX otherwise wrap only the component which you want to have access including to it's child component

6. <CartContext.Provider> Here from react 19 onwards you can skip .Provider and only write <CartContext> it will work but in previous versions we have to use provider as well.

# import {useContext} from 'react';
# import { CartContext } from '../store/Shopping-Cart-Context';

7. Now to use context we have to import 2 things {Context store object }, {useContext hook or use hook }

## 8. USE() Hook is more flexible then useContext()  since we can use use() inside if or for loops but not useContext() 

9. To use cartContext object you have to use above mention hook and store that value and then use it anywhere.
  const cartCtx = useContext(CartContext);

10. one thing is still left setting value prop at provider component without this it will give error
    <CartContext.Provider value={{items:[]}}>

11. it's not neccessary to set default value for context at the store but it helps with the autocompletion whereevr you are using the context store.

# linkinking context to the state 

12. for linking you can just directly write the useState name at the value prop for provider but there's a catch it will be read only not editable like 
    <CartContext.Provider value={shoppingCart}>
    # But you want to make it editable also so that there's no need to share props too so for that follow below steps 

- create a seprate object which consists of all the state and function too which we can reuse.

13. Another of consuming context api other then provider component is consumer component 
<CartContext.Consumer>
Here you have to wrap the compOnent in javascript syntax WHICH WILL REURN JSX basically all the compojent which will have access to context store.
at the prameters you will pass the value basically which you set at Provider component too.

      <CartContext.Consumer>
        {(ctxValue)=>{
          return (
            <>
                <Header
                  cart={shoppingCart}
                  onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
                />
                <Shop  >
                {DUMMY_PRODUCTS.map((product) => (
                    <li key={product.id}>
                      <Product {...product} />
                    </li>
                  ))}
                </Shop>
          </>
          )
        }}
      </CartContext.Consumer>

# What happens if values are updated or changed 

## CARTCONTEXTPROVIDER FUNCTION 
- best practice is to use cartcontextprovider which will be managing  context related data & providing it to the component we should store all the function , variables at our context store which will remove bloated code else where.
- export const cartContextProvider = () => {}

14. 




