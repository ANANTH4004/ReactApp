import { useState } from 'react'
function HooksExample() {
  const [state, setState] = useState({
    name: 'Anand',
    age: 20,
  })
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  const incrementAge = () => {
    setState({ ...state, age: state.age + 1 })
  }
  const changeName = (event) => {
    setState({ ...state, name: event.target.value })
  }

  return (
    <>
      <h1>Count is {count}</h1>
      <h1>Name is {state.name}</h1>
      <h1>Age is {state.age}</h1>
      <input type="text" onChange={changeName} />
      <button onClick={incrementAge}>Increment Age</button>
      <button onClick={increment}>Increment</button>
      <h1>This is a functional component</h1>
    </>
  )
}

export default HooksExample
