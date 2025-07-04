import { useEffect, useState } from 'react'
const UseEffectHook = () => {
  console.log('Component rendered')
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
      response.json().then((data) => {
        console.log('inside use effect', data)
        setUsers(data)
      })
    })
  }, [])
  return (
    <>
      <h1>useEffect Hook</h1>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  )
}

export default UseEffectHook
