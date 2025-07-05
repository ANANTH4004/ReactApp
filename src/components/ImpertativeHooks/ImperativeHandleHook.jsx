import { useRef } from 'react'
import InputChild from './InputChild'
const UseImperativeHook = () => {
  const inputRef = useRef(null)
  return (
    <>
      <h1>Imperative Hook Example</h1>
      <button onClick={() => inputRef.current.increment()}>
        Increment Count(parent)
      </button>

      <InputChild ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </>
  )
}

export default UseImperativeHook
