import CrandChildTwo from "./grandChildTwo"
const ChildTwo = () => {
    console.log("child Render")
    return (
        <>
            <h3>childTwo Component 😂</h3>
            <CrandChildTwo />
        </>
    )
}

export default ChildTwo