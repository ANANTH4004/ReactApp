import GrandChildOne from './grandChildOne'
import { useState } from 'react'
const ChildOne = () => {
  const someFunction = () => {
    console.log('someFunction called')
    return 'some value'
  }
  //   function anotherFunction() {
  //     console.log('anotherFunction called')
  //     return 'another value'
  //   }
  const [childOne, setChildOne] = useState(someFunction)
  console.log('childone Render', childOne)
  return (
    <>
      <h3>childOne Component 😂 {childOne}</h3>
      <button onClick={() => setChildOne('setting state child one')}>
        ChildOne
      </button>
      <GrandChildOne />
    </>
  )
}

export default ChildOne
