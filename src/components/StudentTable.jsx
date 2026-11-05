
import React from "react";

function StudentTable({ students }) {
  return (
    <div>
      <h2>Lista e studentëve</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Emri</th>
            <th>Mbiemri</th>
            <th>Email</th>
            <th>Telefoni</th>
            <th>Gjinia</th>
            <th>Data e lindjes</th>
            <th>Drejtimi</th>
            <th>Viti</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.gender}</td>
              <td>{student.birthDate}</td>
              <td>{student.direction}</td>
              <td>{student.year}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {students.length === 0 && <p>Nuk ka ende studentë të regjistruar.</p>}
    </div>
  );
}

export default StudentTable;
