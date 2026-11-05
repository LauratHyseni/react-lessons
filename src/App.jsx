import { useState } from 'react'
import RegisterForm from './components/RegisterForm'
import Heading from './components/Heading'
import Button from './components/Button'
import StudentForm from './components/StudentForm'
import StudentTable from './components/StudentTable'




function App() {
   const [students, setStudents] = useState([]);

  function addStudent(newStudent) {
    setStudents([...students, newStudent]);
  }

  return (
    <div>
      <Heading text="Register Form" />
    <RegisterForm />
    <br />
    <br />
      <StudentForm onAddStudent={addStudent} />

      <StudentTable students={students} />
    </div>
  )
}

export default App
