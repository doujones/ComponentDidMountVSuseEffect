import React, {useState, useEffect} from 'react'

function UseEffects() {
  const [user, setUser] = useState(null)
  const [searchQuery, setSearchQuery] = useState('Will')

  useEffect(() => {
    const fetchFunc = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`)
    const resJson = await response.json()
    setUser(resJson[0])
  }
  fetchFunc();
  }, [searchQuery])

  // the array in useEffect with have access to properties that will
  // not trigger a re-render
  // when the searchQuery changes, re fire the effect

  return (
    <>
      <input 
      type="search"
      value={searchQuery}
      onChange={event => setSearchQuery(event.target.value)}
      />
   
    {user ? (
    <div>
    <h3>{user.name}</h3>
    <h3>{user.username}</h3>
    <h3>{user.email}</h3>
    </div>
    ) : (
      <p>No user found</p>
    )}
    </>
  )
}
export default UseEffects