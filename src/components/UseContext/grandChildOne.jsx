// import { useContext } from "react"
import MyContext from './MyContext'

const GrandChildOne = () => {
  console.log('grandChildOne Render')
  // const [context, setContext] = useContext(MyContext)
  return (
    <>
      <h5>grandChildOne Component 😂</h5>
      {/* <h5>From Parent using Context: {context}</h5> */}
      {/* <input type="text" onChange={(e) => setContext(e.target.value)} /> */}
    </>
  )
}

export default GrandChildOne
