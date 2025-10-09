// 1 Write a simple counter component using the `useState` Hook.

import React, { useState } from ‘react’;
function Counter() {
 const [count, setCount] = useState(0);
 return (
 <div>
 <p>Count: {count}</p>
 <button onClick={() => setCount(count + 1)}>Increment</button>
 </div>
 );
}

// 2  Implement a basic form with React.*

import React, { useState } from ‘react’;
function SimpleForm() {
 const [formData, setFormData] = useState({ name: ‘’, email: ‘’ });
 const handleChange = (e) => {
 setFormData({ …formData, [e.target.name]: e.target.value });
 };
 const handleSubmit = (e) => {
 e.preventDefault();
 console.log(‘Form submitted:’, formData);
 };
 return (
 <form onSubmit={handleSubmit}>
 <input type=”text” name=”name” value={formData.name} onChange={handleChange} placeholder=”Name” />
 <input type=”email” name=”email” value={formData.email} onChange={handleChange} placeholder=”Email” />
 <button type=”submit”>Submit</button>
 </form>
 );
}

// 3 Create a custom Hook for fetching data.

import { useState, useEffect } from ‘react’;
function useFetch(url) {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 
 useEffect(() => {
 fetch(url)
 .then((response) => response.json())
 .then((data) => {
 setData(data);
 setLoading(false);
 })
 .catch((error) => {
 setError(error);
 setLoading(false);
 });
 }, [url]);

 return { data, loading, error };
}

// 4 Implement a simple React Context

import React, { createContext, useContext, useState } from ‘react’;
const ThemeContext = createContext();
export function ThemeProvider({ children }) {
 const [theme, setTheme] = useState(‘light’);
 return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
export function useTheme() {
 return useContext(ThemeContext);
}

// 5 Create a Higher-Order Component for loading state.

function withLoading(WrappedComponent) {
    return function WithLoadingComponent({ isLoading, …props }) {
    if (isLoading) return <div>Loading…</div>;
    return <WrappedComponent {…props} />;
    };
   }
   // Usage
   const ComponentWithLoading = withLoading(MyComponent);

// 6 Implement a basic routing setup using React Router

import React from ‘react’;
import { BrowserRouter as Router, Route, Link, Switch } from ‘react-router-dom’;
function App() {
 return (
 <Router>
 <nav>
 <ul>
 <li><Link to=”/”>Home</Link></li>
 <li><Link to=”/about”>About</Link></li>
 <li><Link to=”/contact”>Contact</Link></li>
 </ul>
 </nav>
 <Switch>
 <Route exact path=”/” component={Home} />
 <Route path=”/about” component={About} />
 <Route path=”/contact” component={Contact} />
 </Switch>
 </Router>
 );
}

{/* 7 Implement a basic Redux setup with React. */}

// actions.js
export const increment = () => ({ type: ‘INCREMENT’ });
export const decrement = () => ({ type: ‘DECREMENT’ });
// reducer.js
const initialState = { count: 0 };
function counterReducer(state = initialState, action) {
 switch (action.type) {
 case ‘INCREMENT’:
 return { …state, count: state.count + 1 };
 case ‘DECREMENT’:
 return { …state, count: state.count — 1 };
 default:
 return state;
 }
}
// Component
import React from ‘react’;
import { useSelector, useDispatch } from ‘react-redux’;
import { increment, decrement } from ‘./actions’;
function Counter() {
 const count = useSelector((state) => state.count);
 const dispatch = useDispatch();
 return (
 <div>
 <p>Count: {count}</p>
 <button onClick={() => dispatch(increment())}>Increment</button>
 <button onClick={() => dispatch(decrement())}>Decrement</button>
 </div>
 );
}

{/* 8 Use the `useReducer` Hook for complex state management. */}


import React, { useReducer } from ‘react’;
const initialState = { count: 0 };
function reducer(state, action) {
 switch (action.type) {
 case ‘increment’:
 return { count: state.count + 1 };
 case ‘decrement’:
 return { count: state.count — 1 };
 default:
 throw new Error();
 }
}
function Counter() {
 const [state, dispatch] = useReducer(reducer, initialState);
 return (
 <>
 Count: {state.count}
 <button onClick={() => dispatch({ type: ‘increment’ })}>+</button>
 <button onClick={() => dispatch({ type: ‘decrement’ })}>-</button>
 </>
 );
}

