# JSX is not mandatory

- It is not stardard feature for browser as it doesn't understands JSX. We can make projects w/o JSX also.
- We can replace it using React.createElement which take component type as 1st argument, then takes props object & 3rd arg is child content if needed.
- We can use this non-JSX approach if we want project that requires no build process, because w/ JS we need build process to transform it for browser
- React.createElement('div', {id: 'content'}, React.createElement('p', null, 'Hello World')) - This is bit nested & difficult to understand.
  Hence JSX is used as it easy to read & understand.

# Fragments

- Fragments are a way to group multiple elements without adding extra nodes to the DOM.
- Normally, in JSX, a component must return a single parent element, therefore we wrap multiple elements inside Fragment. We can use dv as well but Sometimes, adding an extra div tag can break styling or DOM structure.
- There must be single parent because func itself doesn't return multiple values(one return statement). Also func even doesn't take multiple lines of code w/o being wrapped into {}
- We can use React.Fragment tag or just <> (shorthand). Both render without adding extra nodes in the DOM. Shorthand cannot accept keys or attributes; React.Fragment can (useful in lists).
- Fragments help keep the DOM clean while satisfying JSX’s requirement of a single parent element.

# Splitting the Cs

- Splitting components is about breaking your UI into smaller, reusable, and manageable pieces. You should split components when it improves readability, reusability, and maintainability. Here are key guidelines:
  1. Single Responsibility Principle: Each component should do one thing. Example: Instead of a ProfileCard handling layout, data fetching, and actions, split it into ProfileCard, Avatar, and ProfileDetails.
  2. Reusability: If a part of the UI appears in multiple places, make it a separate component. Example: Buttons, form fields, modals.
  3. Separation of Concerns: Keep UI, logic, and state organized. Example: Separate a TodoList into TodoItem for rendering and TodoList for managing state.
  4. Complex UI / Large JSX: If a component becomes too long or nested, split it for clarity. Helps avoid deeply nested JSX and makes it easier to maintain.
  5. Independent Updates / Performance: If a part of the UI updates frequently, splitting it allows React to re-render only that part, improving performance. This is the most important

# Props can not be forwarded, Multiple JSX slots

- Props are not forwarded to inner elements i.e When we set attributes to custom C like id, className, onClick etc, those are not forwarded to JSX code used inside of C
- We can use attributes but we need to destructure it inside the child C & then use it. It doesn't automatically passed.
- We can forward such attributes by using {...props} rest operator sort of & them speading it out on child C element.
- We can set slots as well. Eg: In Tabs.jsx button slot
- We can pass C identifier as prop as well like ButtonsContainer in Tabs.jsx as well; Must be PascalCase; For these we use string names like div, menu etc or we can pass C Eg ButtonsContainer={Section}; not executing it, no angular brackets
- We can set default props values as well
