

const Child = ({content}) => {
    return (
       <>
       <h1>This is a Child Component</h1>
       <div style={{display: 'flex',justifyContent: 'center', flexDirection:'row'}}>
        <p>Content from parent component: {content} </p>
       </div>
       </>
    )
}

export default Child