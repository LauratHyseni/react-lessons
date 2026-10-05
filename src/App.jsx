import Counter from './components/Counter';
import LikeCounter from './components/LikeCounter';
import CourseCard from './components/CourseCard';
import ProfileCard from './components/ProfileCard';
import StudentAttendance from './components/StudentAttendance';
import ProductQuantity from './components/ProductQuantity';

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
  },
  {
    id: 4,
    name: "student 4"
  },
  {
    id: 5,
    name: "student 5"
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
      <ProfileCard name="Person 1" age="17" city="Vushtrri" />
      <ProfileCard name="Person 2" age="18" city="Pristina" />
      <ProfileCard name="Person 3" age="19" city="Mitrovica" />
      <CourseCard course="React JS" instructor="Egzon" duration="3 months" price="$100"  />
       <CourseCard course="React JS" instructor="Egzon" duration="6 months" price="$200"  />
        <CourseCard course="React JS" instructor="Egzon" duration="9 months" price="$300"  />
        <Counter />
        <LikeCounter />
        <StudentAttendance
          student={students[0]}
          course={{ course: "React JS" }}
          isPresent={true}
        />
        <StudentAttendance
          student={students[1]}
          course={{ course: "React JS" }}
          isPresent={false}
        />
        <hr />
        <br />
        <ProductQuantity
          name="Product 1"
          price={10}
        />
        <ProductQuantity
          name="Product 2"
          price={20}
        />
        
    </div>
    
   
  )
}

export default App;
