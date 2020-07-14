## Learning React Hooks
Notes from the React Hooks documentation and 

### Introducing React Hooks 

* Hooks are functions that let you "hook into" React state and lifecycle features from function components. 
* Hooks don't work inside class components - Hooks allow us to use React without classes
* Every time the function runs, your Hooks must execute in the exact same order. Thus, Hooks cannot be nested in anything. They must be at the top level of your function
* Hooks are not build to replace classes. There are no plans to remove classes from React
* Hooks don't replace your knowledge of React concepts. Instead, Hooks provide a more direct API to the React concepts you already know: **props, context, refs, and lifecycles**  

### The problems React Hooks solves 

* Huge components that are hard to refactor and test
* Duplicated logic between different components and lifecycle methods 
* complex patterns like render props and higher-order components 

**Hooks solves all these problems by:**
* Allowin us to organize the logic inside a component into reusable isolated units 
* They apply the React philosophy (explicit data flow and composition) inside a component, rather than just between the components. 
* Hooks don't introduce unncessary nesting into your components tree.
* Hooks also don't suffer from the [drawbacks of mixins](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html#why-mixins-are-broken)

## Hooks at a Glance
```
import React, { useState, useEffect } from 'react';

export default function useWindowSize(cb) {
  // Declare a new state variable, which we'll call "width"
  const [[windowWidth, windowHeight], setWindowSize] = useState(window.innerWidth, window.innerHeight);
  
  useEffect(() => {
    const handleResize = () => {
      cb();
      setWindowSize([window.innerWidth, window.innerHeight])
    };
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []);
  
  return [windowWidth, windowHeight]
  
}
```
As you can see above, the built-in React Hooks like *useState* and *useEffect* serve as the basic building blocks. We can use them from our components directly, or we can combine them into custom Hooks like *useWindowSize*. 

### useState 
*useState* is the most basic and most used Hook. It is perfect for updating elements such as a name, number, list etc., where the user is constantly adding, updating, and deleting. It is a function and it always returns an array of values - the current state value and a funcion that lets you update it.

Every time the setstate function is called, it’s going to re-render our component with the new value for our state. Every time this happens the intial value get called every single time. Thus, this will slow down the performane of our application. To prevent the intial value from getting called with every render, we use a function to pass in the state to the *useState* Hook. 

Like so:
```
const [width, setWidth] = useState(() => {window.innerWidth})
```
In the example above, the intial state is the current window width. Note that unike this.state, the state here doesn't have to be an object - although it can if you want. Here is how *useState* works with objects 
```
const [state, setState] = useState({count: 4, theme: 'blue'}) 
```
The array destructuring syntax let's us destruct these values out. To update the state in an object with setState function, inside the function we return the value which is going to be an object. However, unlike with this.setState in a class component, it doesn't merge the old and new state together. In order to prevent setState function from overriding all of our old state, you need to spread out our prevState and then set our new state     
```
setState({... count: prevState.count + 1})
```
### useEffect Hook
*useEffect* hook adds the ability to preform side effects from a function component. It does what life cycle methods from mounting, updating, to make the side effect when our resource type changes, but unified into a single API. 
The *useEffect* hook will run every time we update our state, it will re-render and this useEffect will run.

The *useEffect* It is a function and takes two arguments - a setState function and an array of dependencies to prevent *useEffect* from running in an infinite loop.
Here is a trick - if you only want to apply the *useEffect* on mount, then you would leave the second argument the array of dependencies empty.

**Clean up:**
Effects may also optionally specify how to "clean up" after them by returning a function - whatever we return that's what React will consider as the thing that needs to run whenever you tell it to clean up or run this effect again. For instance, inside the retun function we could remove the event.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
