import { useState } from "react"
import Child from "./Child"

const Parent = () => {
    const [content, setContent] = useState("empty content")
     return (
        <>
        <h1>This is a Parent Component</h1>
        <input type="text" onChange={(e) => setContent(e.target.value) }/>
        <Child content={content}></Child>
        </>
     )
}

export default Parent