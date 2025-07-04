
import { useEffect } from "react"
const Child = (props) => {
    const childFn = () => {
        console.log("Child function called")
    }
    useEffect(()=> {
        childFn()
    }, [props.callChild])
    return (
       <>
       <h1>This is a Child Component</h1>
       <input type="text" onChange={(e) => props.setParent(e.target.value)} />
       <div style={{display: 'flex',justifyContent: 'center', flexDirection:'row'}}>
        <p>Content from parent component: {props.content} </p>
       </div>
       <button onClick={()=> props.parentFn()}>Call parent function</button>
       </>
    )
}

export default Child