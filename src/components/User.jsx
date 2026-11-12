import React from 'react'

function User({user}) {
  return (
    <div>
        <p>{user.username}</p>
        <p>{user.phone}</p>
        <p>{user.email}</p>
        <p>{user.address.city}</p>
        <p>{user.company.name}</p>

    </div>
  )
}

export default User