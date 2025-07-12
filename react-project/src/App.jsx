import "./App.css";
import { useEffect, useReducer } from "react";
import palash from "./assets/face imgs.jpg";

function NewComponent({ numprojects, currentRole }) {
  // console.log(props);
  return (
    <header>
      <h1>
        I made {numprojects} {currentRole ? "games" : "projects"}
      </h1>
    </header>
  );
}

let games = ["Kidnapped", "Wrongway", "Jetman Adventures", "Hunting simulator"];
let projects = [
  "ASL detection",
  "Web applcation",
  "Lung disease classification",
  "Face Recognition with AWS",
  "E commerce Website",
];

const gameObjects = games.map((game, i) => ({
  id: i,
  title: game,
}));

const projectObjects = projects.map((project, i) => ({
  id: i,
  title: project,
}));

function Main() {
  return (
    <>
      <div>
        <h1>Welcome to my Portfolio</h1>
      </div>
      <main>
        <img src={palash} height={300} alt="Photo of Palash (me)" />
      </main>
    </>
  );
}

function ProjectList({ currentRole }) {
  let currList = currentRole ? gameObjects : projectObjects;
  return (
    <>
      <main>
        <ul>
          {currList.map((project) => (
            <li key={project.id} style={{ listStyleType: "none" }}>
              {project.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  const [Role, toggle] = useReducer((Role) => !Role, true);

  return (
    <div>
      <Main />
      <h2>
        You are looking for {Role ? "Game Developer" : "Software Developer"}.
      </h2>
      <button onClick={toggle}>
        Do you need {!Role ? "Game Developer" : "Software Developer"} ?
      </button>
      <NewComponent
        numprojects={Role ? games.length : projects.length}
        currentRole={Role}
      />
      <ProjectList currentRole={Role} />
    </div>
  );
}

export default App;
