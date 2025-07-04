import { useEffect, useState, useRef } from 'react'
import styles from '../styles/hooks.module.css'
const UseEffectHook = () => {
  const [users, setUsers] = useState([])
  const name = useRef(null)
  const phone = useRef(null)
  const username = useRef(null)
  const website = useRef(null)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users',{
      method: 'GET',
      mode: 'cors', // enable CORS (default for cross-origin fetch)
      headers: {
        'Accept': 'application/json',
        'X-Custom-Header': 'my-custom-header-value'
      }
    }).then((response) => {
      response.json().then((data) => {
        console.log('inside use effect', data)
        setUsers(data)
      })
    })
  }, [])

  const addNewUser = () => {
    const newUser = {
      id: users.length + 1,
      name: name.current.value,
      phone: phone.current.value,
      username: username.current.value,
      website: website.current.value,
    }
    setUsers([...users, newUser])
    name.current.value = ''
    phone.current.value = ''
    username.current.value = ''
    website.current.value = ''
  }

  return (
    <>
      <h1>useEffect Hook</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <div className={styles.form}>
        <div style={{ gap: '20px' }}>
          <label htmlFor="name">Name:</label>
          <input ref={name} type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input ref={phone} type="text" id="phone" name="phone" />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input ref={username} type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="website">Website:</label>
          <input ref={website} type="text" id="website" name="website" />
        </div>
        <div>
          <button onClick={addNewUser}> Add New User</button>
        </div>
      </div>
    </>
  )
}

export default UseEffectHook
