
import React , { useEffect, useState } from 'react'
import User from './components/User'
function App() {
  const [users, setUsers] = useState([])
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((res) => {
        console.log(res)
        setUsers(res)
      }).catch((error) => {
        setErrors(error)
      })
  }, []);

  return (
    <div>
      
        {users.map((user) => (
         
            <User key={user.id} user={user} />
          
          
         
          
        ))}
        <p>{errors}</p>
      
    </div>
  )
}

export default App;
