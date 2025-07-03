import React from 'react'
import { useState } from 'react'

function StudentLists() {
  const [students, setStudents] = useState([
    { name: 'Anand', age: 20, dob: '2003-01-01' },
    { name: 'John', age: 22, dob: '2001-05-15' },
    { name: 'Jane', age: 19, dob: '2004-03-10' },
  ])
  const addStudent = () => {
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const dob = document.getElementById('dob').value
    if (name && age && dob) {
      setStudents([...students, { name, age, dob }])
      document.getElementById('name').value = ''
      document.getElementById('age').value = ''
      document.getElementById('dob').value = ''
    }
  }
  const deleteStudent = (name) => {
    setStudents(students.filter((student) => student.name !== name))
  }
  return (
    <>
      <div>
        <h1>Student Lists</h1>
        <table>
          <thead>
            <tr>
              <td>
                <input type="text" id="name" />
              </td>
              <td>
                <input type="number" id="age" />
              </td>
              <td>
                <input type="date" id="dob" />
              </td>
              <td>
                <button onClick={addStudent}>Add</button>
              </td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Age</td>
              <td>DOB</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.dob}</td>
                <td>
                  <button onClick={() => deleteStudent(student.name)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default StudentLists
