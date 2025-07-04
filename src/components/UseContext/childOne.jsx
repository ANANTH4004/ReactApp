import GrandChildOne from "./grandChildOne"
const ChildOne = () => {
    console.log("child Render")
    return (
        <>
            <h3>childOne Component 😂</h3>
            <GrandChildOne />
        </>
    )
}

export default ChildOne