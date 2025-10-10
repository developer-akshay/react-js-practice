# React

- React is JS library for building UI;
- React is declarative unlike JS(imperative-step by step approach). We define the target UI state(s) - not the steps to get there. Instead, React will figure out & perform the necessary steps.
- To open new sandbox in browser for react type react.new
- npm create vite@latest react-project

# React Projects use a build process. Why?

- Raw, unprocessed React code won't execute in the browser because React uses JSX, which is not default JS feature
- The code would not be optimized for production(Eg: not minified). Minification means that names of variable/funcs are shortened to reduce the amount of JS code that's served to user.
- Therefore build process is required to transform our code; vite etc gives us such build process

# Components

- Cs are UI building blocks. Cs are foundation. React apps are built by combining Cs. Any website can be broken down into smaller building blocks: Cs. It can therefore also be built by creating & combining such Cs.
- C = HTML + CSS + JS
- Reusable building blocks: Create small building blocks & compose the UI from them. If needed then reuse a building block in different parts of UI
- Related Code Lives Together: Related HTML & JS &/or CSS code is stored together. Since JS influences the o/p, storing JS+HTML togethermakes sense & if we need to make any changes then we will make in Cs(single place)
- Separation of Concerns: Different Cs handle different data & logic. Vastly simplifies the process of working on complex apps.
- C funcs must follow 2 rules:
  1. Name starts with Uppercase Character i.e PascalCase
  2. Returns 'renderable' content: return a value that can be rendered by React. In most cases: Return JSC. Also allowed: string, number, boolean, null, array of allowed values

# JSX

- JavaScript Syntax Extension: Used to describe & create HTML elements in JS in declarative way. But browsers don't support JSX. React projects come build process that transforms JSX code to code that does work in browsers.
- Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.

# How React handles C

- In browsers if we inspect we see index.js file only, because this file acts as the main entry point of our React app since it is 1st file to be loaded by HTML file & it's that place where React app boots up. In index.js file, we have special React DOM library which belongs to the overall React library which ultimately renders the App C(App.jsx).
- App C is rendered by passing JSX code to render method. This render method is however c/d on an object that's created with another method i.e createRoot which takes an existing HTML element as an i/p(from index.html) & then that element is set as root for project. So createRoot & render methods are responsible for rendering a single root C which then in turn may contain as many nested Cs as needed which could then contain even more child Cs & with that ultimately we end up C hierarchy i.e tree of Cs.
- Tree of C is just analyzed by React & then it combines all JSX code from all Cs to generate overall DOM
- Custom C must start with capital letter to tell React that it's not built-in C. React traverses the C tree until has oly built-in C left.

# Images

- We should use relative/dynamic import if images are in src folder & Avoid Using Direct/Absolute Paths for Images. WHY it is important:
  - The bundler (Webpack/Vite) includes the image in the build process.
  - It can optimize, compress, or hash the image for caching (logo.abc123.png).
  - It ensures the image path works correctly in both dev and production builds.
- If we place images in the public directory, use them like: <img src="/logo.png" alt="Logo" />; These are:
  - Not optimized or processed by bundler
  - Served as static assets directly from the server root
  - Useful for favicons, manifest icons, or assets that don’t change

# Props

- React allows us to pass data to Cs via 'Props'. Props accept all value types. Make components configurable (and therefore reusable) by passing input data to them.
- Props (short for "properties") are used to pass data from a parent component to a child component.
- They are read-only — the child cannot modify them directly.
- Purpose: Make components configurable and reusable; Enable data flow between components; Support dynamic rendering of UI based on parent-provided data.
- Props are Immutable: We cannot change props inside the child component. If data needs to be changed → lift state up or use a callback prop.
- Data Flow Direction: Unidirectional: Data flows from parent → child; Ensures predictable state management and easier debugging.
- Default Props: Used to specify default values for props (if not provided).
- Children Prop: Special prop that allows you to pass nested elements between component tags, enabling flexible composition.
- Props enable component composition, not inheritance.
- Props help maintain pure functional components (same output for same input).
- In React 18+, defaultProps don’t work on function components when using ES6 default parameters — prefer destructuring defaults; Always remember: Props down, events up.

# Component Composition

- Component Composition in React means building complex UIs by combining smaller, reusable components together.
  Instead of using inheritance (like in OOP), React encourages composition — i.e., nesting and passing components as children or props.
- Why use this? We can reuse small building blocks across the app; Pass data, structure, or even entire components as props; Easier to manage small focused components; Each component has a single, clear purpose.
- Types of Composition Patterns

  1. Children Composition: Most common and simple pattern. Used in TabButton.js; We take JSX inside component tags & then inside that C we can fetch that JSX using children prop.
     function Modal({ children }) {
     return <div className="modal">{children}</div>;
     }

     function App() {
     return (
     <Modal>
     <h2>Confirm Action</h2>
     <button>OK</button>
     </Modal>
     );
     }

  2. Specialized Composition (Named Props): We can pass specific components as props for more control. Allows layout components to be reused with different content.
     function SplitScreen({ left, right }) {
     return (
     <div style={{ display: 'flex' }}>
     <div style={{ flex: 1 }}>{left}</div>
     <div style={{ flex: 1 }}>{right}</div>
     </div>
     );
     }

     function LeftPane() {
     return <h3>Menu</h3>;
     }

     function RightPane() {
     return <p>Content Area</p>;
     }

     function App() {
     return <SplitScreen left={<LeftPane />} right={<RightPane />} />;
     }

  3. Conditional Composition: Combine components conditionally to render specific UIs.
  4. Higher-Order Components (HOCs): Higher-Order Component (HOC) is a function that takes a component and returns a new enhanced component. It’s a pattern used to reuse component logic across multiple components.
     function withLogger(WrappedComponent) {
     return function Logger(props) {
     console.log("Props:", props);
     return <WrappedComponent {...props} />;
     };
     }
     // Original component
     function Button({ label }) {
     return <button>{label}</button>;
     }
     // Enhanced component
     const ButtonWithLogger = withLogger(Button);
     // Usage
     function App() {
     return <ButtonWithLogger label="Click Me" />;
     }

  - withLogger is the HOC. ButtonWithLogger is the enhanced component. The original Button remains unchanged.
  - Common Use Cases: Code reuse / logic abstraction – share common behavior between components; Conditional rendering – show/hide a component based on props or state; Authentication & Authorization – wrap components that require login; Enhancing props – add extra props or data fetching to a component.
  - Key Points: HOCs don’t modify the original component; they return a new one; HOCs use composition, not inheritance; Props must be passed through (...props) to the wrapped component.

  5. Render Props: Use a function prop to control what’s rendered inside.
     function DataProvider({ render }) {
     const data = { name: "Reema", role: "Developer" };
     return render(data);
     }

     function App() {
     return (
     <DataProvider
     render={(data) => <p>{data.name} - {data.role}</p>}
     />
     );
     }

# State

- Normal varibales of JS doesn't update the UI in React because component func gets execute only once if UI doesn't change. Therefore we need a way to tell React that we want to update UI. This can be achieved using state.
- React-managed data which, when changed, causes the component to re-render & the UI to update.
- This concepts register variable that is handled by React & that are updated w/ help of func that is also provided by React which will cause the re-render of UI. These are created w/ help of useState hook. Hooks must be c/d on top level only & must only be c/d inside of Component funcs
- useState returns array of 2 elements: current state value & state updating func
- When we call React updating func to update the state it schedules the state update & it then re-executes the C func, so the updated value of sttae will only be available after the C execute again.
- Computed values are meant to be derived from existing state, allowing us to avoid managing extra state unnecessarily. This approach streamlines our application's logic and helps maintain clarity in state management.
- State Immutability: Always replace state, don’t mutate it directly; Helps React detect changes efficiently.
- Derived/Computed State: Avoid storing values that can be computed from existing state; use derived calculations instead.
- Lazy Initialization: useState(() => expensiveComputation()) → function runs only once on mount.
- Passing State: State can be passed down to child components via props. Updates in child must be communicated via callbacks to parent (lifting state).
- Batched Updates: React may batch multiple state updates for performance.
- State in Class vs Function Components: Class: this.setState(); Functional: useState() hook
- pre tag → preserves formatting (line breaks, indentation); code tag in html → indicates this is code (for accessibility, semantics, and styling).

# State vs Props

- State is internal to a component, managed by React, and can change over time, triggering a re-render whenever it updates. It is mutable and is usually created using the useState hook in functional components.
- In contrast, props are read-only data passed from a parent component to a child component. A child component cannot modify props; they are immutable within the child and are primarily used for communication and configuring components.
- While state controls a component’s own behavior and UI, props allow components to receive dynamic data from their parent, making them reusable and flexible.
- Essentially, state is for internal, mutable data, and props are for external, read-only data.
