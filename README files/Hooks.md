# useState Hook in React

The `useState` Hook is a fundamental feature in React that allows functional components to have state variables. Before Hooks, only class components could manage state. With `useState`, you can add state to any functional component.

- **Purpose:** Manage local state within a function component.
- **Syntax:** `const [state, setState] = useState(initialValue)`
  - `state`: The current state value.
  - `setState`: Function to update the state.
  - `initialValue`: The initial value of the state variable.

When you call the setter function (`setState`), React re-renders the component with the new state value. Each call to `useState` returns a separate piece of state, so you can use it multiple times in one component.

## **Note:** State updates are asynchronous and may be batched for performance.

# useState Hook in React

The `useEffect` Hook in React enables functional components to perform side effects, such as data fetching, subscriptions, or interacting with the DOM. It serves as a replacement for lifecycle methods found in class components, including `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

With `useEffect`, you can specify code that should run after the component renders. You can also control when the effect runs by providing a dependency array. If the array is empty, the effect runs only once after the initial render. If dependencies are specified, the effect runs whenever any of those dependencies change.

Cleanup logic can be included by returning a function from the effect, which React will call before the component unmounts or before running the effect again due to dependency changes.

This hook helps manage side effects in a predictable and organized way within function components.
