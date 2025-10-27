ˇ- These are used for advanced DOM access & Value management
- Accessing DOM Elements w/ Refs; Managing values w/ Refs
- Detaching DOM Rendering from JSX Structure w/ Portals

# Refs

- Ref is a value that can be creaed using useRef(). We can connect the Ref with JSX element using ref special prop like kep prop.
- useRef will return an object ref with current property that will holds the input value.
- Refs are basically to read the value that has been entered; We should not write the ref; Eg: refName.current.value = '' as this would be imperative approach & directly manipulating DOM & React is declarative in nature. So we are violating the rule
- The current object hold all the properties that are present on the element on which ref is applied. Eg: for input it has value property for modal it has showModal()
- Prior we React 19 we were needed to forwardRef by ourself but now we can just pass ref directly to child C as props & use attach that ref prop on child C. Prior React19 we eeded to wrap our child C with forwardRef
- If some another developer mistakenly changed the ResultModal dialog to div then showModal won't work, therefore it might be prefereable to build ResultModal C such that it exposes it own func that can be c/d w/ help of ref outside of that C & that func will work independent of dialog or div. For this we use useImperativeHandle() hook
- useImperativeHandle() is used to define properties & methods that should be accessible on the C from outside the C; It takes 2 arguments: a ref object & fuction that returns the object which groups all properties & methods that should be exposed by C to other Cs

# Refs vs State

- We can not just replace the state with refs as state is responsible for re-render when it chage of UI but refs are not.
- State causes C re-evaluation when changed; Should be used for values that ar directly reflected in UI; Should not be used for BTS values that have no direct UI impact.
- Refs do not cause C re-evaluation when changed; can be used to gain direct DOM element access; great for reading values or accessing certain browser APIs
- Refs does not get reset or cleared when the C re-executes. Instead just as with state values, React store them BTS & make sure they don't get reset when C re-executes.
- When we do't want to trigger C re-render then we can use Refs like timer ref in TimerChallenger

# Portals

- Portals are a way to render a component’s children into a different part of the DOM tree — outside of its parent component’s DOM hierarchy — without breaking React’s data flow or event bubbling.
- Normally, React components render inside their parent’s DOM node. But sometimes, we want a component (like a modal, tooltip, dropdown, or overlay) to visually appear on top of everything, even if it’s nested deep in your component tree.
- Portals are imported from react-dom
