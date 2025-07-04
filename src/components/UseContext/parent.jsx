import { useContext } from 'react'
import ChildOne from './childOne'
import ChildTwo from './childTwo'
import MyContext from './MyContext'
const Parent = () => {
    const [context, setContext] = useContext(MyContext)
    return (
        <>
            <div style={{minHeight: "200px", border: '2px solid red', padding: "25px"}}>
            <h1>Parent Component 😂</h1>
            <div>
                <label htmlFor='pass'>To GrandChildren: </label>
                <input type="text" name='pass' id='pass' onChange={(e) => setContext(e.target.value)} />
            </div>
            <div style={{minHeight: "100px", border: '2px solid green'}}>
            <ChildOne />
            </div>
            <div style={{minHeight: "100px", border: '2px solid green'}}>
            <ChildTwo />
            </div>
            </div>
        </>
    )
}

export default Parent