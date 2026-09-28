const technologies = ["react", "js",  "html"];
function App() {
  

  return (
    <div>
     {
      technologies.map((technology) => <p key={technology}>{technology}</p>)
     }
    </div>
  )
}

export default App;
