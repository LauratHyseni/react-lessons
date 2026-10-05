import React from 'react'

function ProfileCard({ name, age, city }) {
  return (
    <div>
      <h1>{name}</h1>
      <p> {age}</p>
      <p> {city}</p>
    </div>
  )
}

export default ProfileCard;