import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Student from './components/Student'
import './App.css'

function App() {
  // state: holds the student data
  const [student] = useState({
    studentId: '101595929',
    name: 'Ramtin Loghmani',
    college: 'George Brown Polytechnic, Toronto',
  })

  return (
    <div className="app">
      <img src={reactLogo} className="logo" alt="React logo" />

      <h1>Welcome to Fullstack Development - I</h1>
      <h2>React JS Programming Week09 Lab exercise</h2>

      {/* props: pass state values down to Student */}
      <Student
        studentId={student.studentId}
        name={student.name}
        college={student.college}
      />
    </div>
  )
}

export default App
