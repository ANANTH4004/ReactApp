import { useContext } from "react"
import MyContext from "./MyContext"

const GrandChildOne = () => {
    const [context, setContext] = useContext(MyContext)
    return (
        <>
            <h5>grandChildOne Component 😂</h5>
            <h5>From Parent using Context: {context}</h5>
        </>
    )
}

export default GrandChildOne