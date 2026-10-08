import React from 'react'

function List() {
    const students = ["Zana", "Hana", "Xhenis"];
  return (
    <div>
      <h1>this is the list of my students</h1>
      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
    </div>
  )
}

export default List