import { useState } from "react"
import Child from "./Child"

const Parent = () => {

   const [callChild, setCallChild] = useState(false);
   const parentFn = () => {
      console.log("parent function called");
   }
   const callParent = () => {
      setCallChild(true)
   }
    const [fromChild, setFromChild] = useState('')
    const [content, setContent] = useState("empty content")
     return (
        <>
        <h1>This is a Parent Component</h1>
        <p>this is the content from child: {fromChild}</p>
        <button onClick={() => callParent()}>CallChild Fn</button>

        <input type="text" onChange={(e) => setContent(e.target.value) }/>
        <Child content={content} setParent={setFromChild} parentFn={parentFn} callChild={callChild} />
        </>
     )
}

export default Parent