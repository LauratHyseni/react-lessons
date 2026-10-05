import React from 'react'

function CourseCard({ course, instructor, duration, price }) {
  return (
    <div>
      <h1>{course}</h1>
      <p>Instructor: {instructor}</p>
      <p>Duration: {duration}</p>
      <p>Price: {price}</p>
    </div>
  )
}

export default CourseCard