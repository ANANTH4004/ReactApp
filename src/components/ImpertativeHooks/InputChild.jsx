import { forwardRef, useImperativeHandle } from 'react'
import { useState } from 'react'

const InputChild = forwardRef((props, inputRef) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  useImperativeHandle(inputRef, () => ({
    increment,
  }))

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment Count (child)</button>
      <input type="text" ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus Input(Child)
      </button>
    </div>
  )
})

export default InputChild
