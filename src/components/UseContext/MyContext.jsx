import { createContext, useState } from "react";

const MyContext = createContext()

// const Provider = (props) => {
//     return
//     (
//     <MyContext.Provider>
//         {props.children}
//     </MyContext.Provider>
//     )
// }

function Provider(props){
    const [context, setContext] = useState()
    return (
        <MyContext.Provider value={[context, setContext]}>
            {props.children}
        </MyContext.Provider>
    )
}


export {Provider}
export default MyContext