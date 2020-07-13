## Learning React Hooks
Notes from the React Hooks documentation and 

### Introducing React Hooks 

* Hooks are functions that let you "hook into" React state and lifecycle features from function components. 
* Hooks don't work inside class components - Hooks allow us to use React without classes
* Hooks are not build to replace classes. There are no plans to remove classes from React
* Hooks don't replace your knowledge of React concepts. Instead, Hooks provide a more direct API to the React concepts you already know: **props, context, refs, and lifecycles**  

### The problems React Hooks solves 

* Huge components that are hard to refactor and test
* Duplicated logic between different components and lifecycle methods 
* complex patterns like render props and higher-order components 

Hooks solves all these problems by:
* Allowin us to organize the logic inside a component into reusable isolated units 
* They apply the React philosophy (explicit data flow and composition) inside a component, rather than just between the components. 
* Hooks don't introduce unncessary nesting into your components tree.
* Hooks also don't suffer from the [drawbacks of mixins](https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html#why-mixins-are-broken)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
