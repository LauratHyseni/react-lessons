import React from 'react'
import { useNavigate } from 'react-router-dom'

function Courses() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Courses</h1>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  )
}

export default Courses