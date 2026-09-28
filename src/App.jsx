const technologies = ["react", "js",  "html"];
const students = [
  {
    id: 1,
    name: "student 1"
    
  },
  {
    id: 2,
    name: "student 2"
  },
  {
    id: 3,
    name: "student 3"
  }
];
function App() {
  

  return (
    <div>
     {
      technologies.map((technology) => <p key={technology}>{technology}</p>)
     }
     {
      students.map((student) => <h1 key={student.id}>{student.name}</h1>)
     }
    </div>
  )
}

export default App;
