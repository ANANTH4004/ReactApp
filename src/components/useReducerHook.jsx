import { useReducer } from 'react'
const UseReducerHook = () => {
  console.log('UseReducerHook')
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 }
      case 'decrement':
        return { count: state.count - 1 }
      case 'set':
        return { count: action.payload }
      case 'reset':
        return { count: 0 }
      default:
        throw new Error()
    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <>
      <h3> This is Use reducer Hook - {state.count}</h3>

      <div className="flex jusstify-center align-center gap-4">
        <button onClick={() => dispatch({ type: 'increment' })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: 'set', payload: 10 })}>
          Set
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </>
  )
}

export default UseReducerHook
