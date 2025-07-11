import "./App.css";
import palash from "./assets/face imgs.jpg";

function NewComponent({ name, numgames }) {
  // console.log(props);
  return (
    <header>
      <h1>
        {name} made {numgames} games
      </h1>
    </header>
  );
}

let games = ["Kidnapped", "Wrongway", "Jetman Adventures", "Hunting simulator"];

const gameObjects = games.map((game, i) => ({
  id: i,
  title: game,
}));

function Main({ gamelist }) {
  return (
    <>
      <div>
        <h2>Welcome to my Portfolio</h2>
      </div>
      <main>
        <img src={palash} height={300} alt="Photo of Palash (me)" />
        <ul>
          {gamelist.map((game) => (
            <li key={game.id} style={{ listStyleType: "none" }}>
              {game.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  return (
    <div>
      <NewComponent name="Palash" numgames={10} />
      <Main gamelist={gameObjects} />
    </div>
  );
}

export default App;
