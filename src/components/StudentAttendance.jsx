import React, { useState } from 'react'

function StudentAttendance({ student, course, }) {
    const [isPresent, setIsPresent] = useState(true);
  return (
    <>
      <p>Student: {student.name}</p>
      <p>Course: {course.course}</p>
      <p>Status: {isPresent ? 'Present' : 'Absent'}</p>
      <button onClick={() => setIsPresent(!isPresent)}>
        Student is {isPresent ? 'absent' : 'present'}
      </button>
    </>
  )
}

export default StudentAttendance